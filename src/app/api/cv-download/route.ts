import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    // In a real application, you would:
    // 1. Validate the request (e.g., check for required fields)
    // 2. Save the email to your database
    // 3. Send a confirmation email
    
    // For now, we'll just return a success response
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    // In a real application, you would get the CV file path from your database or config
    const cvPath = path.join(process.cwd(), 'public', 'cv.pdf');
    
    // Check if file exists
    if (!fs.existsSync(cvPath)) {
      return NextResponse.json(
        { error: 'CV not found' },
        { status: 404 }
      );
    }
    
    // Read the file
    const fileBuffer = fs.readFileSync(cvPath);
    
    // Set headers for file download
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', 'attachment; filename="cv.pdf"');
    
    // Return the file for download
    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });
    
  } catch (error) {
    console.error('Error handling CV download:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Add a GET handler for testing
// In production, you might want to remove this or add proper authentication
export async function GET() {
  return NextResponse.json(
    { error: 'Use POST method with email to download CV' },
    { status: 405 }
  );
}
