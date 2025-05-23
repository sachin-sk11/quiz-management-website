const express = require('express');
const router = express.Router();
const QuizHistory = require('../models/QuizHistory');

// POST /history - save a quiz attempt (userId, score, totalQuestions)
router.post('/', async (req, res) => {
  try {
    const { userId, score, totalQuestions } = req.body;
    if(!userId || score == null || !totalQuestions) {
      return res.status(400).json({ error: 'Missing quiz history data' });
    }
    const history = new QuizHistory({ userId, score, totalQuestions });
    await history.save();
    res.json({ message: 'Quiz history saved' });
  } catch (e) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /history/:userId - get quiz history of user
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const histories = await QuizHistory.find({ userId }).sort({ date: -1 });
    res.json(histories);
  } catch (e) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
