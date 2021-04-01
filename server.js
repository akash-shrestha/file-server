const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.send("Welcome, please enter the correct url with the complete file name !");
});

app.listen(4000, () => {
  console.log('Listening for req on the port 4000 !');
});

