var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 var fs = require('fs');
 var htmlfile = new Buffer(24);
 var text = fs.readFileSync('index.html', 'utf8');
  response.send(text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
