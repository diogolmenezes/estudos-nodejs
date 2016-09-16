
var express     = require('express')();
var request     = require('supertest')(express);
var booksRoutes = require('../app/controller/booksController')(express);

describe('GET /books', function() {
  it('respond with json', function(done) {
    request
      .get('/books')
      .set('Accept', 'application/json')            
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});


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