const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  answerIndex: { type: Number, required: true } 
});

module.exports = mongoose.model('Question', QuestionSchema);
