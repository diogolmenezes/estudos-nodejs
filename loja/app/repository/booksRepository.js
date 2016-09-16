BooksRepository = function(connection) {
    this._connection = connection;
};

BooksRepository.prototype.list = function(callback) {
    this._connection.query('select * from books', callback);
};

BooksRepository.prototype.insert = function(book, callback) {
    this._connection.query("insert into books set ?", book, callback);
}

module.exports = function(){    
    return BooksRepository;
};