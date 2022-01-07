CREATE DATABASE ng_tareas_db;

USE ng_tareas_db;

DROP TABLE tareas;

CREATE TABLE tareas(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(180),
    descripcion VARCHAR(255),
    imagen VARCHAR(200),
    creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


DESCRIBE tareas;