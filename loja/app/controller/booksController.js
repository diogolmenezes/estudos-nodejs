var booksRepository   = require('../repository/booksRepository')();
var connectionFactory = require('../infra/connectionFactory');

module.exports = function (app) { 
    app.get('/books', function(request, response, next) {   
        var connection = connectionFactory();
        
        repository = new booksRepository(connection);        
        
        repository.list(function(err, results) {            
            if(err)
                next(err);         

            response.format({
                html: function() { response.render('books/index', { books: results }); },
                json: function() { response.json(results); }
            });              
        });        

        connection.end;
    });

    app.get('/books/new', function(request, response) {
        response.render('books/form', { validationErrors: {}, book: {} });
    });

    app.post('/books/new', function(request, response, next) {
        
        var book = request.body;

        request.assert('title', 'O Título é obrigatório').notEmpty();
        request.assert('price', 'Formato inválido').isFloat();

        var errors = request.validationErrors();

        if(errors)
        {            
            response.format({
                html: function() { response.status(400).render('books/form', { validationErrors: errors, book: book }); },
                json: function() { response.status(400).json(errors); }
            });
                         
            return;
        }

        var connection = connectionFactory();
        var repository = new booksRepository(connection);   

        repository.insert(book, function(err, results) {
            if(err)
                next(err);             

            response.format({
                html: function() { response.redirect('/books'); },
                json: function() { response.send(200); }
            }); 
        });

        connection.end();
    });
};