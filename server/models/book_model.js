const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {name: String, price: Number},
  {versionKey: false, timestamps: true},
);

const BookModel = mongoose.model('books', bookSchema);

module.exports = BookModel;
