const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');


router.use('/api', apiRoutes);

//For any other route data, render the html page
router.use((req, res) => {
   res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;