var http = require('http');

var conf = {
    hostname: 'localhost',
    port: 3000,
    path: '/books',
    headers: {
        'Accept': 'application/json' 
    }
} ;


http.get(conf, function(response) {
    response.on('data', function(body) {
        console.log('Corpo =>' + body);
    });
});