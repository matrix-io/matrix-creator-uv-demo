/*
 * Copyright 2016 <Admobilize>
 * All rights reserved.
 */

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var uv_proto = require('./test_uv.js')

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public/')));

app.get(/\/(about|contact)?$/, function(req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

io.on('connection', function(socket) {

setInterval(function(){
 io.emit('update-uv',uv_proto.getUV());
 console.log(uv_proto.getUV()) 
}, 1000);

});

http.listen(app.get('port'), function() {
  console.log('listening on *:' + app.get('port'));
});
