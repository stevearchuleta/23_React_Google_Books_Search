const axios = require('axios');
const db = require('../models/book.model');

//Define methods for the googleController
//https://developers.google.com/books/docs/v1/reference/volumes/get
//findAll searches the Google Books API and returns only those entries that have not already been saved in the MongoDB Atlas database; findAll also ensures that all books returned from the API contain a title, author(s), a link, a description, and an image.

module.exports = {
   findAll: function(req, res) {
      const { query: params } = req;
      axios
         .get('https://www.googleapis.com/books/v1/volumes', {
            params
         })
         .then(results => 
            results.data.items.filter(
               result =>
               result.volumeInfo.title &&
               result.volumeInfo.infoLink &&
               result.volumeInfo.authors &&
               result.volumeInfo.description &&
               result.volumeInfo.imageLinks &&
               result.volumeInfo.imageLinks.thumbnaiil
            )
         )
         .then(apiBooks =>
            db.Book.find().then(dbBooks =>
               apiBooks.filter(apiBook =>
                  dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
               )
            )
         )
         .then(books => res.json(books))
         .catch(err => res.status(422).json(err));
   }
};
