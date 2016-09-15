# Express 

Framework web para o nodeJs http://expressjs.com/pt-br/

`npm install express --save`

# EJS

Linguagem de template client-side. Engine de view http://www.embeddedjs.com/

`npm install ejs --save`

# Nodemon

Lib para dar relload automatico, detectando mudanças e reiniciando o servidor http://nodemon.io/

`npm install -g nodemon`

Após instalar basta rodar o projeto com o comando nodemon ao invés de node app.js

# Driver Mysql 

Driver de Mysql para nodejs https://github.com/mysqljs/mysql

`npm install mysql --save`

```
    var mysql = require('mysql');
    var con   = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodigo'
    }); 

    con.query('select * from livros', function(err, result) {
        ...
    });

    con.end();
```