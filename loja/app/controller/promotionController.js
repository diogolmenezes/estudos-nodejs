var booksRepository   = require('../repository/booksRepository')();
var connectionFactory = require('../infra/connectionFactory');

module.exports = function (app) {
    app.get('/promotion', function(request, response) {   
        var connection = connectionFactory();        
        var repository = new booksRepository(connection);        
        
        repository.list(function(err, results) {                                         
            response.render('promotion/form', { books: results });            
        });        

        connection.end();
    });

    app.post('/promotion', function(request, response){
        
        var promotion = request.body
        app.get('io').emit('newPromotion', promotion);
        response.redirect('/promotion'); 
    });
};