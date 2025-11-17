import nodemailer from 'nodemailer';

interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (data: EmailData) => {
  try {
    await transporter.verify();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: data.to,
      subject: data.subject,
      html: data.html,
      text: data.text,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

export const generateContactEmailHTML = (formData: {
  name: string;
  email: string;
  budget?: string;
  message: string;
}) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: #081320; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">New Contact Form Submission</h1>
        <p style="margin: 10px 0 0 0; color: #00C2A8;">Omar Naifar Portfolio</p>
      </div>
      
      <div style="padding: 20px; background: #f6f8fa;">
        <h2 style="color: #081320; margin-top: 0;">Contact Information</h2>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #0F1724;">Name:</strong> ${formData.name}
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #0F1724;">Email:</strong> ${formData.email}
        </div>
        
        ${formData.budget ? `
        <div style="margin-bottom: 15px;">
          <strong style="color: #0F1724;">Budget:</strong> ${formData.budget}
        </div>
        ` : ''}
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #0F1724;">Message:</strong>
        </div>
        
        <div style="background: white; padding: 15px; border-left: 4px solid #00C2A8;">
          ${formData.message.replace(/\n/g, '<br>')}
        </div>
      </div>
      
      <div style="background: #081320; color: white; padding: 15px; text-align: center; font-size: 12px;">
        <p style="margin: 0;">This email was sent from the contact form on Omar Naifar's portfolio website.</p>
        <p style="margin: 5px 0 0 0;">Typical response time: &lt; 24 hours</p>
      </div>
    </div>
  `;
};

export const generateAutoReplyHTML = (formData: { name: string; email: string }) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: #081320; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Thank You for Contacting Me!</h1>
        <p style="margin: 10px 0 0 0; color: #00C2A8;">Omar Naifar - Full-Stack Engineer</p>
      </div>
      
      <div style="padding: 20px; background: #f6f8fa;">
        <p>Hi ${formData.name},</p>
        
        <p>Thank you for reaching out! I've received your message and will get back to you within 24 hours.</p>
        
        <p>In the meantime, feel free to check out my recent projects on my portfolio or connect with me on LinkedIn.</p>
        
        <div style="margin: 20px 0;">
          <a href="https://omar-naifar-portfolio.vercel.app" style="background: #00C2A8; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">View Portfolio</a>
        </div>
        
        <p>Best regards,<br>Omar Naifar</p>
      </div>
      
      <div style="background: #081320; color: white; padding: 15px; text-align: center; font-size: 12px;">
        <p style="margin: 0;">Full-Stack Engineer | SaaS & Web Applications</p>
        <p style="margin: 5px 0 0 0;">Fast delivery, clean architecture, measurable results</p>
      </div>
    </div>
  `;
};
