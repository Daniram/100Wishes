'use strict';

var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var server = http.createServer(app);
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var ctrl = require(path.join(__dirname, 'server/controllers'));
var io = require('socket.io').listen(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', ctrl);

server.listen(3000, function () {
    console.log('App listening on port 3000!');
});

io.on('connection', function(socket){
    console.log("Socket connected: " + socket.id);
    socket.on('action', (action) => {
        console.log('action', action);
        ctrl.routeAction(socket, action);
    });
});


