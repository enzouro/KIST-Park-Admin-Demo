// server\mongodb\models\highlights.js
import mongoose from 'mongoose';

const HighlightSchema = new mongoose.Schema({
  seq: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  sdg: {
    type: [String],
    required: false,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', // Reference to the Category model
    required: false,
  },
// Modify the date fields
  date: {
    type: String, // Change to String instead of Date
    required: false,
  },
  createdAt: {
    type: String, // Change to String instead of Date
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  images: {  
    type: [String], // contains image URLs or paths to cloudinary storage
    required: true,
  },
  content: {
    type: String, // Store as rich text (HTML or Markdown) example: <p>This is the sample data for Content</p>
    required: true,
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'rejected'],
    default: 'draft',
    required: true
  }
}, {
  timestamps: true 
});

const Highlight = mongoose.model('Highlight', HighlightSchema);

export default Highlight;