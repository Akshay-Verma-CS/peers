import mongoose from 'mongoose';
import { CustomRequest } from '../types/customTypes';

interface CommentAttributes {
  userId: CustomRequest; // Link to the user's ID
  type: 'casual' | 'request'; // Type of comment
  content: string; // The actual comment content
  state?: string; // For stamp duty requests
  dutyType?: string; // For stamp duty requests
  source?: string; // URL, text or image
}

const commentSchema = new mongoose.Schema<CommentAttributes>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  content: { type: String, required: true },
  state: { type: String },
  dutyType: { type: String },
  source: { type: String },
});

export default mongoose.model('Comment', commentSchema);
