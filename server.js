var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var port = 3000;
var routes = require('./routes');

// var log = require('./log')(module); // winston
// var config = require('./config'); // nconf

//app configs

app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app routes

app.use('/', routes);

//error hendler

app.use(function(req, res, next){
    res.status(404).send('Sorry, this page not found.');
    // log.debug('Not found URL: %s',req.url);
    return;
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next){
        res.status(err.status || 500);
        log.error('Internal error(%d): %s',res.statusCode,err.message);
        return;
    });    
}

server.listen(port, function(){
    console.log('Server create on: ' + port);
});