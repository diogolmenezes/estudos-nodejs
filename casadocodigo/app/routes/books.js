var booksRepository   = require('../repository/booksRepository')();
var connectionFactory = require('../infra/connectionFactory');

module.exports = function (app) { 
    app.get('/livros', function(request, response) {   

        connection = connectionFactory();
        repository = new booksRepository(connection);        

        repository.list(function(err, results) {
            if(err)
                console.log(err);                    
            response.render('books/index', { books: results });
        });        

        connection.end;
    });
};