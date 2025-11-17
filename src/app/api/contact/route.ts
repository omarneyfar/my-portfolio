import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getServerSupabase, ContactLead } from '../../../src/lib/supabase';
import { sendContactNotificationEmail } from '../../../src/lib/mailer';

// Rate limiting map (in-memory, for production use Redis or similar)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  budget: z.enum(['< $2,000', '$2,000 - $10,000', '$10,000+'], {
    errorMap: () => ({ message: 'Please select a budget range' }),
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  preferred_start_date: z.string().optional(),
});

// Rate limiting check
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];
  
  // Remove old requests
  const recentRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW);
  
  if (recentRequests.length >= MAX_REQUESTS) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Store in Supabase
    const supabase = getServerSupabase();
    const contactLead: ContactLead = {
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company || null,
      budget: validatedData.budget,
      message: validatedData.message,
      preferred_start_date: validatedData.preferred_start_date || null,
    };

    const { data, error: supabaseError } = await supabase
      .from('contact_leads')
      .insert([contactLead])
      .select()
      .single();

    if (supabaseError) {
      console.error('Supabase error while storing contact lead:', supabaseError);
      // Continue even if database fails - still send email
    }

    // Send notification email
    try {
      await sendContactNotificationEmail(contactLead);
    } catch (emailError) {
      console.error('Error sending notification email:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        data: data || contactLead,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// OPTIONS handler for CORS
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
