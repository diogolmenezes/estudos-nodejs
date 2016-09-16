var express     = require('../config/express')();
var booksRoutes = require('../app/controller/booksController')(express);
var request     = require('supertest')(express);

beforeEach(function(done) {
  var connection = require('../app/infra/connectionFactory')()
  connection.query('DELETE FROM BOOKS;', function(err, results) {
    done();
  });
  connection.end();
});

describe('GET /books', function() {
  it('respond with json', function(done) {
    request
      .get('/books')
      .set('Accept', 'application/json')            
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /books/new', function() {
  it('respond with html', function(done) {
    console.log(process.env.NODE_ENV)
    request
      .get('/books/new')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('save with invalid data', function(done) {
    request.post('/books/new')
          .send({ title: '', price: '' })
          .expect(400, done);
  });

   it('save with valid data', function(done) {
    request.post('/books/new')
          .send({ title: 'Book', price: 12 })
          .expect(302, done);
  });

});

// Exemplo com o HTTP do node, sem o o MOCHA e supertest
// Check com recursos de request padrão do node
// describe('booksController', function() {
    // var http   = require(http);
    // var assert = require('assert');
    // it('Listagem JSON', function(done) {
        
    //     var conf = {
    //         hostname: 'localhost',
    //         port: 3000,
    //         path: '/books',
    //         headers: {
    //             'Accept': 'application/json' 
    //         }
    //     } ;

    //     http.get(conf, function(response) {
    //         assert.equal(response.statusCode, 200);
    //         assert.equal(response.headers['content-type'], 'application/json; charset=utf-8');                       
    //         done();
    //     });
    // });
//});