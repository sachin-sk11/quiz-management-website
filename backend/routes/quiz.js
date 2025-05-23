const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// GET /quiz/questions - get all quiz questions (for simplicity)
router.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find().select('-__v'); // omit version key
    res.json(questions);
  } catch (e) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
