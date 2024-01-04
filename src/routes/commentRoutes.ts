import express from 'express';
import Comment from '../models/Comment';
import isAuthenticated from '../middleware/authMiddleware';
import { CustomRequest } from '../types/customTypes';

const router = express.Router();

// Posting a comment with authentication
router.post('/comment', isAuthenticated, async (req: CustomRequest, res) => {
  try {
    const { type, content, state, dutyType, source } = req.body;
    const userId = req.user.id;

    const comment = new Comment({ userId, type, content, state, dutyType, source });
    await comment.save();
    res.status(201).send("Comment added successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
