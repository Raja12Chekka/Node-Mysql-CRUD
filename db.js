const mysql = require ('mysql2/promise');

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'employee_db',
});



module.exports = mysqlPool;
