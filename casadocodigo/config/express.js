var express     = require('express')();

express.set('view engine', 'ejs');
express.set('views', './app/views');

module.exports = function() {
    console.log('Loading express configuration...');        
    return express;
};