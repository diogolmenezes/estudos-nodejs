# Express 

Framework web para o nodeJs http://expressjs.com/pt-br/

`npm install express --save`

# Express Load ou Consign

Auto-Load de arquivos para o express https://github.com/jarradseers/express-load

`npm install express-load --save`

O projeto evoluiou para o Consign => https://www.npmjs.com/package/consign

# EJS

Linguagem de template client-side. Engine de view http://www.embeddedjs.com/

`npm install ejs --save`


# Body-Parser

Faz o parse do body do request do express (request.body) https://github.com/expressjs/body-parser

`npm install body-parser --save`

# Express Validator

Validação de dados https://github.com/ctavan/express-validator

`npm install express-validator --save`

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

# Mocha (Testes)

Framework para testes https://mochajs.org/

`npm install mocha --save-dev`

Rodando: 

`node node_modules/mocha/bin/mocha`

# Supertest 

Assertions para teste HTTP  https://github.com/visionmedia/supertest

`npm install supertest --save-dev`

# Database Cleaner

Limpeza de banco para testes https://github.com/emerleite/node-database-cleaner

`npm install database-cleaner --save-dev`

# WebSocket Socket.io

Websockets http://socket.io/

`npm install socket.io --save`

