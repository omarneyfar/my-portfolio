import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  try {
    // Get the absolute path to the content.json file
    const jsonDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(jsonDirectory + '/content.json', 'utf8');
    const data = JSON.parse(fileContents);
    
    // Return the parsed JSON data
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading content.json:', error);
    return NextResponse.json(
      { error: 'Failed to load content' },
      { status: 500 }
    );
  }
}
