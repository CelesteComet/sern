process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const mongoose = require('./config/mongoose');
const express = require('./config/express');
const passportConfig = require('./config/passport');

const db = mongoose();
const app = express();
const passport = passportConfig();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server running at http://localhost:' + port);
})

module.exports = app;