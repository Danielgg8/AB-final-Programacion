CREATE DATABASE IF NOT EXISTS formulario;

USE formulario;

CREATE TABLE IF NOT EXISTS contacto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefono VARCHAR(15),
    asunto VARCHAR(255) NOT NULL,
    mensaje TEXT NOT NULL
);

select * from contacto;