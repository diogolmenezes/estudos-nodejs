var app              = require('./config/express')();
var http             = require('http').Server(app)
var io               = require('socket.io')(http);
var booksRoutes      = require('./app/controller/booksController')(app);
var homeRoutes       = require('./app/controller/homeController')(app);
var promotionRoutes  = require('./app/controller/promotionController')(app);

app.set('io', io);
app.use(function(request, response, next){
    response.status(404).render('errors/404');
    next();
});

app.use(function(error, request, response, next){
    if(process.env.NODE_ENV == 'production')
        response.status(500).render('errors/500');    
    else
        next(error);
});

http.listen(3000, function() {
    console.log('OK! Express is runing....');
});