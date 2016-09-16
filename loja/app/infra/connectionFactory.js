var mysql = require('mysql');

module.exports = function() {   

    if(!process.env.NODE_ENV)
    {          
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'lojaNode',
        });
    }

    if(process.env.NODE_ENV == 'test')
    {          
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'lojaNode_test',
        });
    }

};