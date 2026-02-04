import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Quote from '@/models/Quote';
import Visitor from '@/models/Visitor';

export async function GET() {
  try {
    await dbConnect();
    
    const totalQuotes = await Quote.countDocuments({});
    const recentQuotes = await Quote.find({}).sort({ date: -1 }).limit(5);
    
    const visitors = await Visitor.find({}).sort({ date: -1 }).limit(30); // Last 30 days
    
    return NextResponse.json({ 
      success: true, 
      stats: {
        totalQuotes,
        recentQuotes,
        visitors
      }
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
