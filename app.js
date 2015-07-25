var http = require('http');
var port = process.env.PORT || 3000;

var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public'));
app.listen(port, function() { console.log('Node server listening on port:' + port)
});

