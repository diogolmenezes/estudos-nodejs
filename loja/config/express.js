var express     = require('express')();
var bodyParser  = require('body-parser');

express.set('view engine', 'ejs');
express.set('views', './app/views');

express.use(bodyParser.urlencoded({ extended: true }));
express.use(bodyParser.json());

module.exports = function() {
    console.log('Loading express configuration...');        
    return express;
};