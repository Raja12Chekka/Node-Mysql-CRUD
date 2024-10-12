const mysql = require ('mysql2/promise');

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'user123',
    password: 'sample123@ACC',
    database: 'employee_db',
});



module.exports = mysqlPool;