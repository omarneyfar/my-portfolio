import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

interface EmailParams {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail({ to, subject, html, from }: EmailParams) {
  const emailFrom = from || process.env.EMAIL_FROM || 'noreply@example.com';

  if (resend) {
    try {
      const { data, error } = await resend.emails.send({
        from: emailFrom,
        to,
        subject,
        html,
      });

      if (error) {
        throw error;
      }

      return { success: true, data };
    } catch (error) {
      console.error('Resend email error:', error);
      return fallbackEmailSend({ to, subject, html, from: emailFrom });
    }
  }

  return fallbackEmailSend({ to, subject, html, from: emailFrom });
}

async function fallbackEmailSend({ to, subject, html, from }: EmailParams) {
  console.warn('Resend not configured. Email would be sent:');
  console.log({ to, from, subject, html });
  
  return {
    success: true,
    data: { message: 'Email logged (no provider configured)' },
  };
}

export const emailTemplates = {
  contactForm: (data: { name: string; email: string; subject: string; message: string }) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0ea5e9; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #374151; }
          .value { color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${data.subject}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `,
  
  cvRequest: (data: { name: string; email: string }) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #10b981; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
          .alert { background: #fef3c7; padding: 10px; border-left: 4px solid #f59e0b; margin-bottom: 15px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>CV Request Notification</h2>
          </div>
          <div class="content">
            <div class="alert">
              <strong>Action Required:</strong> Someone has requested your CV.
            </div>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p>Please review and respond to this CV request.</p>
          </div>
        </div>
      </body>
    </html>
  `,
};
