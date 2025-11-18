import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, emailTemplates } from '@/lib/email';
import { sendTelegramLog } from '@/lib/telegram';

const RATE_LIMIT_MAP = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 3;

function getRateLimitKey(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
  return ip;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const userLimit = RATE_LIMIT_MAP.get(key);

  if (!userLimit || now > userLimit.resetTime) {
    RATE_LIMIT_MAP.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return true;
  }

  if (userLimit.count >= MAX_REQUESTS) {
    return false;
  }

  userLimit.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const rateLimitKey = getRateLimitKey(req);
    
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const isCVRequest = 
      message.toLowerCase().includes('cv') || 
      message.toLowerCase().includes('resume') ||
      message.toLowerCase().includes('curriculum') ||
      subject.toLowerCase().includes('cv') ||
      subject.toLowerCase().includes('resume');

    const contactEmail = process.env.CONTACT_EMAIL || 'admin@example.com';

    await sendEmail({
      to: contactEmail,
      subject: `Contact Form: ${subject}`,
      html: isCVRequest 
        ? emailTemplates.cvRequest({ name, email })
        : emailTemplates.contactForm({ name, email, subject, message }),
    });

    await sendTelegramLog({
      event: 'Contact Form Submission',
      meta: {
        name,
        email,
        subject,
        isCVRequest,
        timestamp: new Date().toISOString(),
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
