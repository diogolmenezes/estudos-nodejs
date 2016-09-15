BooksRepository = function(connection) {
    this._connection = connection;
};

BooksRepository.prototype.list = function(callback) {
    this._connection.query('select * from books', callback);
};

module.exports = function(){    
    return BooksRepository;
};