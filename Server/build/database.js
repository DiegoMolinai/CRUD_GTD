"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'ng_tareas_db',
    password: 'admin',
    waitForConnections: true,
    queueLimit: 0
});
exports.default = pool;
