DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
devoured boolean,
PRIMARY KEY (id)
);

INSERT INTO burgers (name, devoured) VALUES ("Cali Burger", False);
INSERT INTO burgers (name, devoured) VALUES ("Bacon Cheeseburger", False);
INSERT INTO burgers (name, devoured) VALUES ("Classic Burger", False);