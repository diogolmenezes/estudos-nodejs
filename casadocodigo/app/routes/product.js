var dbConnection = require('../infra/connection');

module.exports = function (app) { 
    app.get('/produtos', function(request, response) {    
        connection = dbConnection();

        connection.query('select * from books', function(err, results) {
            if(err)
                console.log(err);
            
            console.log('Books =>', results);

            response.render('products/index',{ products: results });
        });

        connection.end();        
    });
};