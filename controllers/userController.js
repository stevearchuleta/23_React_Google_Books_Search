const db = require('../models/user.model');

module.exports = {
   findAll: function(req, res) {
      db.User.find(req.query)
         .then(dbUsers => res.json(dbUsers))
         .catch(err => res.status(422).json('Error: ' + err));
   },
   findById: function(req, res) {
      db.User.findById(req.params.id)
         .then(dbUser => res.json(dbUser))
         .catch(err => res.status(422).json('Error: ' + err));
   },
   create: function(req, res) {
      db.User.create(req.body)
      const username = req.body.username;
      const newUser = new User({username})
      newUser.save() // instance of new user is saved to the MongoDB Atlas database
      .then(dbUser => res.json(dbUser + ': User Added!'))
      .catch(err => res.status(422).json('Error: ' + err));


      },
   update: function(req, res) {
      db.User.findOneAndUpdate( {id: req.params.id}, req.body )
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json('Error: ' + err));
   },
   remove: function(req, res) {
      db.User.findById(req.params.id)
      .then(dbUser => dbUser.remove())
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json('Error: ' + err));
   }
};

