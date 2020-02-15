const db = require('../models/book.model');

module.exports = {
   findAll: function(req, res) {
      db.Book.find(req.query)
         .then(dbBook => res.json(dbBook))
         .catch(err => res.status(422).json('Error: ' + err));
   },
   findById: function(req, res) {
      db.Book.findById(req.params.id)
         .then(dbBook => res.json(dbBook))
         .catch(err => res.status(422).json('Error: ' + err));
   },
   create: function(req, res) {
      db.Book.create(req.body)
      const bookTitle = req.body.bookTitle;
      const newBook = new Book({bookTitle})
      newUser.save() // instance of new book is saved to the MongoDB Atlas database
      newBook.save()
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json('Error: ' + err));
      },
   update: function(req, res) {
      db.Book.findOneAndUpdate( {id: req.params.id}, req.body )
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json('Error: ' + err));
   },
   remove: function(req, res) {
      db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json('Error: ' + err));
   }
};