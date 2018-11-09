// author(s):  Patrice-Morgan Ongoly
// version: 0.2.2
// last modified: Monday, July 2, 2018 12:32 EST
// description: 

// required modules
var bodyParser = require('body-parser');
var express = require('express');
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');
//var WhichBrowser = require('which-browser');
// main application instance

var app = express();

// main application settings

var config = {
    PORT: process.env.PORT || 8008,
    DIRECTORY: [
        './',
        './css',
        './js',
        './media/texture',
        './media/gifs',
        './media/pattern',
        './media/img',
        './media/sounds',
        './media/model',
        './uploads',
        './drafts/docs',
        './media/upload',
        './media/room',
        './media/img/bg',
        './media/room/media/model'
    ]
};

var dir = config.DIRECTORY;

app.engine('html', require('ejs').renderFile);

/*

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

*/

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.static('/'));

var deviceType = 'unknown';

app.get('/', function(req, res){
    res.render('main.html',{root: dir[0]});
});

app.get('/edu', function(req, res){
    res.render('edu.html',{root: dir[0]});
});

app.get('/utility', function(req, res){
    res.render('utility.html',{root: dir[0]});
});

app.get('/css/remote.css', function(req, res){
    res.sendFile('remote.css', {root: dir[1]});
});

app.get('/css/rfid.css', function(req, res){
    res.sendFile('rfid.css', {root: dir[1]});
});

app.get('/js/:script_id', function(req, res){
    var script_id = req.params.script_id;
    res.sendFile(script_id, {root: dir[2]});
});

app.get('/media/texture/:texture_id', function(req, res){
    var texture_id = req.params.texture_id;
    res.sendFile(texture_id, {root: dir[3]});
});

app.get('/media/gifs/:gif_id', function(req, res){
    var gif_id = req.params.gif_id;
    res.sendFile(gif_id, {root: dir[4]});
});

app.get('/media/pattern/:pattern_id', function(req, res){
    var pattern_id = req.params.pattern_id;
    res.sendFile(pattern_id+'.patt', {root: dir[5]});
});

app.get('/media/img/:img_id', function(req, res){
    var img_id = req.params.img_id;
    res.sendFile(img_id, {root: dir[6]});
});

app.get('/media/sounds/:sound_id', function(req, res){
    var sound_id = req.params.sound_id;
    res.sendFile(sound_id, {root: dir[7]});
});

app.get('/media/model/:model_id', function(req, res){
    var model_id = req.params.model_id;
    res.sendFile(model_id, {root: dir[8]});
});

app.get('/uploads/:upload_id', function(req, res){
    var upload_id = req.params.upload_id;
    res.sendFile(upload_id, {root: dir[9]});
});

app.get('/drafts/docs/:doc_id', function(req, res){
    var doc_id = req.params.doc_id;
    res.sendFile(doc_id, {root: dir[10]});
});

app.get('/media/card/:card_id', function(req, res){
    var card_id = req.params.card_id;
    res.sendFile(card_id+'.html', {root: dir[12]});
});

app.get('/media/room/media/model/:room_model_id', function(req, res){
    var room_model_id = req.params.room_model_id;
    res.sendFile(room_model_id, {root: dir[14]});
});

app.get('/media/img/bg/:img_id', function(req, res){
    var img_id = req.params.img_id;
    res.sendFile(img_id, {root: dir[13]});
});

app.get('/css/roomsapp/:style_id', function(req, res){
    var style_id = req.params.style_id;
    res.sendFile('roomsapp/'+style_id, {root: dir[1]});
});

app.get('/css/postARapp/:style_id', function(req, res){
    var style_id = req.params.style_id;
    res.sendFile('postARapp/'+style_id, {root: dir[1]});
});

var io = require('socket.io').listen(app.listen(config.PORT, function(){
    console.log(`[0] listening on port ${config.PORT}`);
}));

var scenes = [];
/*

orientation: 0 = landmark; 1 = face; 2 = hand



*/

var guests = [
    
];

io.sockets.on('connection', function(socket){
    console.log('client connected.');
    var conn = socket;
    
    socket.on('checkDeviceType', function(data){
        socket.emit('loadDeviceType', {type: deviceType});
    });
    
    socket.on('identify', function(data){
        console.log('configuring id...');
        var remote = data;
        var user  = {
            manufacturer: remote.manufacturer,
            author: remote.author,
            source: remote.source,
            socket: conn,
            id: guests.length
        };
        guests.push(user);
        console.log('remote registered.');
        console.log(`connection ${user.socket.id} established b/w remote ${user.source.tapin} and ${user.source.product} ${user.source.device}`);
    });

    socket.on('disconnect', function(){
        console.log(`socket ${socket.id} disconnected.`);
    });
});