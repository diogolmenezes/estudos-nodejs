var booksRepository   = require('../repository/booksRepository')();
var connectionFactory = require('../infra/connectionFactory');

module.exports = function (app) { 
    app.get('/livros', function(request, response) {   
        var connection = connectionFactory();
        
        repository = new booksRepository(connection);        
        repository.list(function(err, results) {
            if(err)
                console.log(err);                    
            response.render('books/index', { books: results });
        });        

        connection.end;
    });

    app.get('/livros/novo', function(request, response) {
        response.render('books/form');
    });

    app.post('/livros/novo', function(request, response) {
        var connection = connectionFactory();
        var repository = new booksRepository(connection);    
        var book       = request.body;

        repository.insert(book, function(err, results) {
            if(err)
                console.log(err);             
            response.redirect('/livros');
        });

        connection.end();
    });
};