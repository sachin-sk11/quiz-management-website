const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  answerIndex: { type: Number, required: true } // index of the correct option
});

module.exports = mongoose.model('Question', QuestionSchema);
