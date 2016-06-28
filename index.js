var express = require('express');
var app = express();

app.use(express.static('client'));

app.get('/', function (req, res) {
  res.sendFile('client/index.html', {root: __dirname })
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});