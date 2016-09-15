var dbConnection = require('../infra/connection');

module.exports = function (app) { 
    app.get('/produtos', function(request, response) {    
        connection = dbConnection();

        connection.query('', function(err, results) {
            if(err)
                console.log(err);
            response.render('products/index', { products: results });
        });

        connection.end();        
    });
};