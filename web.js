var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 var fs = require('fs');
 var htmlfile = new Buffer(24);
 var text = fs.readFileSync('index.html', 'utf8');
 htmlfile.write(text, "utf-8");
  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
