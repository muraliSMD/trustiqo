import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load env vars
// Note: We need to point to .env file specifically if running standalone
dotenv.config(); 

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Please define the MONGODB_URI environment variable inside .env');
  process.exit(1);
}

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// We define model locally to avoid import issues with Next.js specific code if any in other models
const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const adminUser = 'admin'; // Default username
    const adminPass = 'admin123'; // Default password - CHANGE THIS

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminPass, salt);

    // Check if admin exists
    const existing = await Admin.findOne({ username: adminUser });
    if (existing) {
      console.log('Admin user already exists. Updating password...');
      existing.password = hashedPassword;
      await existing.save();
    } else {
      console.log('Creating new Admin user...');
      await Admin.create({
        username: adminUser,
        password: hashedPassword,
      });
    }

    console.log(`Admin seeded successfully.`);
    console.log(`Username: ${adminUser}`);
    console.log(`Password: ${adminPass}`);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
}

seed();
