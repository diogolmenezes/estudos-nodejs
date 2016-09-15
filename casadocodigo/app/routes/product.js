module.exports = function (app) { 
    app.get('/produtos', function(request, response) {
        
        var mysql      = require('mysql');        
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo',
        });  

        connection.query('', function(err, results) {

            if(err)
                console.log(err);

            response.render('products/index', { products: results });
        });

        connection.end();        
    });
};