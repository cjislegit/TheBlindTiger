const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//Connect to Mongo
mongoose
  .connect(
    'mongodb://localhost/theblindtiger',
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected'))
  .catch(err => console.log(err));

app.listen(3000, () => {
  console.log('Sever has started');
});
