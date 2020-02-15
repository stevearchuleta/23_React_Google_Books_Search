const axios = require('axios');
const db = require('../models');

//Define methods for the googleController
//https://developers.google.com/books/docs/v1/reference/volumes/get
//findAll searches the Google Books API and returns only those entries that have not already been saved in the MongoDB Atlas database; findAll also ensures that all books returned from the API contain a title, author(s), a link, a description, and an image.

module exports = {
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

            )
            )
   }
}