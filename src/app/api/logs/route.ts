import { NextRequest, NextResponse } from 'next/server';
import { sendTelegramLog } from '@/lib/telegram';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { event, meta } = body;

    if (!event) {
      return NextResponse.json(
        { error: 'Event name is required' },
        { status: 400 }
      );
    }

    await sendTelegramLog({ event, meta });

    return NextResponse.json({
      success: true,
      message: 'Log sent successfully',
    });
  } catch (error) {
    console.error('Logging error:', error);
    
    return NextResponse.json(
      { error: 'Failed to send log' },
      { status: 500 }
    );
  }
}
