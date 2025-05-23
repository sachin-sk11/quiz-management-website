const mongoose = require('mongoose');

const QuizHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true }
});

module.exports = mongoose.model('QuizHistory', QuizHistorySchema);
