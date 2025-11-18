import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs, existsSync } from 'fs';

// Enable CORS in development
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function GET() {
  try {
    // Get the absolute path to the content.json file
    const jsonDirectory = path.join(process.cwd(), 'data');
    const filePath = path.join(jsonDirectory, 'content.json');
    
    // Check if file exists
    if (!existsSync(filePath)) {
      console.error(`Content file not found at: ${filePath}`);
      return new NextResponse(
        JSON.stringify({ error: 'Content file not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }
    
    // Read and parse the file
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    // Return the parsed JSON data with CORS headers
    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      },
    });
    
  } catch (error) {
    console.error('Error reading content.json:', error);
    return new NextResponse(
      JSON.stringify({ 
        error: 'Failed to load content',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders } 
      }
    );
  }
}

// Handle OPTIONS method for CORS preflight
// This is important for development when frontend and backend are on different ports
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json',
    },
  });
}
