// require Express and Socket.io
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var uv_proto = require('./test_uv.js')

app.set('port', (process.env.PORT || 5000));

// serve the static assets (js/dashboard.js and css/dashboard.css)
// from the public/ directory
app.use(express.static(path.join(__dirname, 'public/')));

// serve the index.html page when someone visits any of the following endpoints:
//    1. /
//    2. /about
//    3. /contact
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
