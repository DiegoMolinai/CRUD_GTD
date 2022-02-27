const mysql = require('mysql2/promise');


const pool = mysql.createPool({
    host: '10.244.0.12',
    port: '3306',
    user: 'root',
    database: 'ng_tareas_db',
    password: 'password',
    waitForConnections: true,
    queueLimit: 0
});

export default pool;
