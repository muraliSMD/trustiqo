import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Quote from '@/models/Quote';

export async function GET() {
  try {
    await dbConnect();
    const quotes = await Quote.find({}).sort({ date: -1 });
    return NextResponse.json({ success: true, quotes });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { id, status } = await request.json();
    await dbConnect();
    
    // Validate status
    const validStatuses = ['New', 'Contacted', 'Closed'];
    if (!validStatuses.includes(status)) {
       return NextResponse.json({ success: false, error: 'Invalid status' }, { status: 400 });
    }

    const updatedQuote = await Quote.findByIdAndUpdate(
      id, 
      { status }, 
      { new: true }
    );

    if (!updatedQuote) {
      return NextResponse.json({ success: false, error: 'Quote not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, quote: updatedQuote });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
