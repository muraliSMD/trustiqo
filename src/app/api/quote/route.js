import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Quote from '@/models/Quote';

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    const quote = await Quote.create(body);
    
    return NextResponse.json({ success: true, data: quote }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
