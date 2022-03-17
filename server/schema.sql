DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE usernames (
 id INT NOT NULL AUTO_INCREMENT,
 username VARCHAR(20),
 friend CHAR(1),
 PRIMARY KEY (id)
);

CREATE TABLE roomnames (
  id INT NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(15),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(50),
  username_id INT,
  roomname_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (username_id)
    REFERENCES usernames(id),
  FOREIGN KEY (roomname_id)
    REFERENCES roomnames(id)
);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

