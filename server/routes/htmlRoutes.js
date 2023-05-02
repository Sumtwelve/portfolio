const path = require('path');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
  app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/src/html/about.html'));
  });
  app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/src/html/contact.html'));
  });
  app.get('/games', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/src/html/games.html'));
  });
  app.get('/music', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/src/html/music.html'));
  });
  app.get('/resume', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/src/html/resume.html'));
  });
  app.get('/web-dev', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/src/html/web-dev.html'));
  });
};