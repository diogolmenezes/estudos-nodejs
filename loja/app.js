var app              = require('./config/express')();
var http             = require('http').Server(app)
var io               = require('socket.io')(http);
var booksRoutes      = require('./app/controller/booksController')(app);
var homeRoutes       = require('./app/controller/homeController')(app);
var promotionRoutes  = require('./app/controller/promotionController')(app);

app.set('io', io);

http.listen(3000, function() {
    console.log('OK! Express is runing....');
});