import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'content.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const content = JSON.parse(fileContents);
    
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error reading content.json:', error);
    return NextResponse.json(
      { error: 'Failed to load content' },
      { status: 500 }
    );
  }
}
