import express from 'express';
import User from '../models/User';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body); // This includes username, email, and password
    await user.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
