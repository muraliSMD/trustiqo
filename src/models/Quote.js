import mongoose from 'mongoose';

const QuoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    maxlength: 60,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number'],
  },
  service: {
    type: String,
    required: false, // Can be "General Quote"
    default: 'General Quote',
  },
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Closed'],
    default: 'New',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Quote || mongoose.model('Quote', QuoteSchema);
