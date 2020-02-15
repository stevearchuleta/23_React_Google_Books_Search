const path = require('path');
const router = require('express').Router();
const bookRoutes = require('./books');
const googleRoutes = require('./google');
const userRoutes = require('./users');

//Book routes
router.use('books', bookRoutes);

//Google routes
router.use('google', googleRoutes);

//User routes
router.use('users', userRoutes);

//For any other route data, render the html page
router.use((req, res) => {
   res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;