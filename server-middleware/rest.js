const express = require('express');
const app = express();

app.use(express.json());
app.post('/auth', (req, res) => {
  const options = {
    secure: true,
    httpOnly: true // The cookie only accessible by the web server
  };

  // Set cookie
  res.cookie('access_token', req.body.token, {
    maxAge: 86400000,
    path: '/'
  }); // options is optional
  res.send('');
});

app.delete('/auth', (req, res) => {
  res.clearCookie('access_token'); // options is optional
  res.send('');
});

module.exports = app;
