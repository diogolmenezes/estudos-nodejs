var app         = require('./config/express')();
var booksRoutes = require('./app/controller/booksController')(app);

app.listen(3000, function() {
    console.log('OK! Express is runing...');
});