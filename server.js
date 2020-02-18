const express = require('express');

const mongoose = require('mongoose');
const routes = require('./routes/index');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARE
// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
//Parse JSON becasue server will send and receive JSON
app.use(express.json()); 

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
const uri = process.env.ATLAS_URI;
mongoose.connect(
  uri,
  {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
  }
  );
  
mongoose.connection.once('open', () => {
    console.log("🌎  ==> MongoDB database connection has been established successfully.");
  })

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
