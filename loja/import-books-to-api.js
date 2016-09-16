var http = require('http');

var conf = {
    hostname: 'localhost',
    port: 3000,
    path: '/books/new',
    method: 'POST',
    headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
    }
} ;

var client = http.request(conf, function(response) {
    response.on('data', function(body) {
        console.log('Corpo =>' + body);
    });
});

book = {
    title: 'Livro importado',
    price: 10
};


// enviando o post
client.end(JSON.stringify(book));