import { ContactLead } from './supabase';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

// Send email using SendGrid API
async function sendEmailWithSendGrid(options: EmailOptions) {
  const apiKey = process.env.SENDGRID_API_KEY;
  
  if (!apiKey) {
    throw new Error('SENDGRID_API_KEY not configured');
  }

  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: options.to }],
          subject: options.subject,
        },
      ],
      from: { email: 'noreply@omarnaifar.com', name: 'Omar Naifar Portfolio' },
      content: [
        {
          type: 'text/html',
          value: options.html,
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`SendGrid error: ${error}`);
  }

  return response;
}

// Send email using SMTP (alternative to SendGrid)
async function sendEmailWithSMTP(options: EmailOptions) {
  // Note: In a real Next.js app, you'd use nodemailer here
  // For this implementation, we'll log a warning
  console.warn('SMTP not implemented in this environment. Using console log for email.');
  console.log('Email would be sent:', options);
  return { ok: true };
}

// Main email sending function
export async function sendEmail(options: EmailOptions) {
  try {
    if (process.env.SENDGRID_API_KEY) {
      return await sendEmailWithSendGrid(options);
    } else {
      return await sendEmailWithSMTP(options);
    }
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Send notification email to Omar about new contact
export async function sendContactNotificationEmail(lead: ContactLead) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #081320; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f6f8fa; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #00c2a8; }
          .value { margin-top: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${lead.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${lead.email}</div>
            </div>
            ${lead.company ? `
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${lead.company}</div>
              </div>
            ` : ''}
            <div class="field">
              <div class="label">Budget:</div>
              <div class="value">${lead.budget}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${lead.message}</div>
            </div>
            ${lead.preferred_start_date ? `
              <div class="field">
                <div class="label">Preferred Start Date:</div>
                <div class="value">${lead.preferred_start_date}</div>
              </div>
            ` : ''}
          </div>
        </div>
      </body>
    </html>
  `;

  await sendEmail({
    to: 'omarneyfar@gmail.com',
    subject: `New Contact: ${lead.name} from ${lead.company || 'N/A'}`,
    html,
  });
}
