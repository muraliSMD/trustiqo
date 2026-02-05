import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    const { username, oldPassword, newPassword } = await request.json();
    
    await dbConnect();
    
    // Find admin user
    const admin = await Admin.findOne({ username });
    
    // Verify Old Password
    const isValid = admin && (await bcrypt.compare(oldPassword, admin.password));
    
    if (!isValid) {
      return NextResponse.json({ success: false, error: 'Invalid username or current password' }, { status: 401 });
    }

    // Hash New Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    
    // Update Password
    admin.password = hashedPassword;
    await admin.save();

    return NextResponse.json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
