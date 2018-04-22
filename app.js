var express = require('express');
var app = express();

var buy_api = require('./api/buy');
var confirm_api = require('./api/confirm');
app.use('/buy', buy_api.index);
app.use('/confirm', confirm_api.index);


var port = 3001
console.log("Listening to port " + port);
app.listen(port);
