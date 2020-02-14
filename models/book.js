const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
   
   title:   {
      type: String,
      required: true
   },
   subtitle: {
      type: String,
      required: true
   },
   authors: {
      type: [String],
      required: true
   },
   description:   {
      type: String,
      required: true
   },
   link:   {
      type: String,
      required: true
   },
   image: {
      type: String,
      required: true
   },
   googleID: {
      type: String,
      required: true,
      unique: true
   }

});

const Book = mongoose.model('Book', BookSchema);


module.exports = Book;