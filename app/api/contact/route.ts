import { NextRequest, NextResponse } from 'next/server';
import { submitContactForm } from '@/lib/supabase';
import { sendContactEmail, sendAutoReply } from '@/lib/mailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { data, error } = await submitContactForm({
      name,
      email,
      budget: budget || 'Not specified',
      message,
    });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save contact form submission' },
        { status: 500 }
      );
    }

    // Send email notifications
    try {
      await sendContactEmail({ name, email, budget, message });
      await sendAutoReply({ name, email });
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Don't fail the request if email fails, but log it
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        id: data?.[0]?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
