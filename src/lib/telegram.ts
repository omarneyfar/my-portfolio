interface TelegramLogParams {
  event: string;
  meta?: Record<string, any>;
}

export async function sendTelegramLog({ event, meta }: TelegramLogParams): Promise<void> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn('Telegram credentials not configured. Skipping log.');
    return;
  }

  try {
    const message = formatLogMessage(event, meta);
    
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`);
    }
  } catch (error) {
    console.error('Failed to send Telegram log:', error);
  }
}

function formatLogMessage(event: string, meta?: Record<string, any>): string {
  const timestamp = new Date().toISOString();
  let message = `<b>📊 Event:</b> ${event}\n<b>🕐 Time:</b> ${timestamp}`;

  if (meta && Object.keys(meta).length > 0) {
    message += '\n<b>📝 Details:</b>\n';
    Object.entries(meta).forEach(([key, value]) => {
      message += `  • ${key}: ${JSON.stringify(value)}\n`;
    });
  }

  return message;
}
