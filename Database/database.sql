CREATE DATABASE ng_tareas_db;

USE ng_tareas_db;

CREATE TABLE tarea(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(180),
    descripcion VARCHAR(255),
    imagen VARCHAR(200),
    creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE tarea to tareas;

DESCRIBE tareas;