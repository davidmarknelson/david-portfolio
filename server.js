const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

// Force SSL
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
  next(); }
}

// App
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
if (process.env.NODE_ENV !== 'dev') {
  app.use(forceSSL());
}

// Set static path to Angular app in dist
if (process.env.NODE_ENV !== 'dev') {
  app.use(express.static(__dirname + '/dist/david-portfolio'));
}

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
if (process.env.NODE_ENV !== 'dev') {
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/david-portfolio/index.html'));
  });
}

// Server
app.listen(process.env.PORT || 8083, () => console.log('Server is running.'));