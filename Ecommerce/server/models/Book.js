const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  tensp: { type: String, required: true },
  tacgia: { type: String, required: true },
  imgURL: { type: String, required: true },
  gia: { type: Number },
  mota: { type: String }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
