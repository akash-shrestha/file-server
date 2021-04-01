const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.send(`Welcome, please enter the correct url with the complete file name ! 
  <br> For eg: if your file name is 'image1.jpg' then enter 'http://localhost:4000/image1.jpg'
  or 'http://yourUrl/image1.jpg'`);
});

app.listen(4000, () => {
  console.log('Server running, Listening for req on the port 4000 !');
});

