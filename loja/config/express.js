var expressLib = require('express');
var express    = expressLib();
var bodyParser = require('body-parser');
var validator  = require('express-validator');

express.set('view engine', 'ejs');
express.set('views', './app/views');

express.use(expressLib.static('./app/public'));
express.use(bodyParser.urlencoded({ extended: true }));
express.use(bodyParser.json());
express.use(validator());

module.exports = function() {
    console.log('Loading express configuration...');        
    return express;
};