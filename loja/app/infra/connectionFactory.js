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

    if (process.env.NODE_ENV == 'production') {
		var url = process.env.CLEARDB_DATABASE_URL;
		var grupos = url.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?/);
		return mysql.createConnection({
			host:grupos[3],
			user:grupos[1],
			password:grupos[2],
			database:grupos[4]
		});
	}

};