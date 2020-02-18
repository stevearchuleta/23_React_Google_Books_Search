const path = require('path');
const router = require('express').Router();
const booksRouter = require('./books');
const googleRouter = require('./google');
const usersRouter = require('./users');

//Book routes
router.use('/books', booksRouter);

//Google routes
router.use('/google', googleRouter);

//User routes
router.use('/users', usersRouter);

//For any other route data, render the html page
router.use((req, res) => {
   res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;