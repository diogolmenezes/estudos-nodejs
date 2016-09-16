var booksRepository   = require('../repository/booksRepository')();
var connectionFactory = require('../infra/connectionFactory');

module.exports = function (app) { 
    app.get('/books', function(request, response) {   
        var connection = connectionFactory();
        
        repository = new booksRepository(connection);        
        repository.list(function(err, results) {
            if(err)
                console.log(err);                    
            response.render('books/index', { books: results });
        });        

        connection.end;
    });

    app.get('/books/new', function(request, response) {
        response.render('books/form');
    });

    app.post('/books/new', function(request, response) {
        var connection = connectionFactory();
        var repository = new booksRepository(connection);    
        var book       = request.body;

        repository.insert(book, function(err, results) {
            if(err)
                console.log(err);             
            response.redirect('/books');
        });

        connection.end();
    });
};