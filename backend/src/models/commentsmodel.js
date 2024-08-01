const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const commentsSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  rate: { type: Number, required: true },
  comment: { type: String, required: true }
}, {
  timestamps: true
});

const UseComments = model('eagles-comments', commentsSchema);

module.exports = { UseComments };
