const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find().select('-__v'); 
    res.json(questions);
  } catch (e) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
