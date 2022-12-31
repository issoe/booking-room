CREATE DATABASE bookingroom;
USE bookingroom;

CREATE TABLE IF NOT EXISTS _admin
(
  _id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  _fullname VARCHAR(255) NOT NULL,
  _username VARCHAR(255) NOT NULL,
  _password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS _hotel_owner
(
  _id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  _name VARCHAR(255) NOT NULL,
  _email VARCHAR(255) NOT NULL,
  _username VARCHAR(255) NOT NULL,
  _password VARCHAR(255) NOT NULL,
  _phone INT UNIQUE
);

CREATE TABLE IF NOT EXISTS _transport
(
  _id INT NOT NULL PRIMARY KEY,
  _owner_name VARCHAR(255) NOT NULL,
  _type VARCHAR(255) NOT NULL,
  _phone INT NOT NULL,
  _price_per_day INT NOT NULL,
  _status INT NOT NULL,
  _distance INT NOT NULL
);

CREATE TABLE IF NOT EXISTS _customer
(
  _id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  _fullname VARCHAR(255) NOT NULL,
  _address VARCHAR(255) NOT NULL,
  _point INT DEFAULT 0,
  _id_number VARCHAR(255) NOT NULL,
  _phone VARCHAR(255) NOT NULL,
  _email VARCHAR(255) NOT NULL, 
  _username VARCHAR(255) NOT NULL,
  _password VARCHAR(255) NOT NULL
);

CREATE TABLE _hotel
(
  _id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  _address VARCHAR(255) NOT NULL,
  -- Photo INT NOT NULL,
  _name VARCHAR(255) NOT NULL,
  _phone VARCHAR(255) NOT NULL,
  _email VARCHAR(255) NOT NULL,
  _hotel_owner_id INT,
  _admin_id INT,
  FOREIGN KEY (_hotel_owner_id) REFERENCES _hotel_owner(_id),
  FOREIGN KEY (_admin_id) REFERENCES _admin(_id)
);

CREATE TABLE _room
(
  _id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  _room_number VARCHAR(255) NOT NULL,
  _status VARCHAR(100) NOT NULL,
  _price INT NOT NULL,
  _description VARCHAR(255) NOT NULL,
  _hotel_id INT NOT NULL,
  FOREIGN KEY (_hotel_id) REFERENCES _hotel(_id)
);

CREATE TABLE _order
(
  _id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  _booking_date DATE NOT NULL,
  _number_of_customer INT NOT NULL,
  _check_in_date DATE NOT NULL,
  _check_out_date DATE NOT NULL,
  _payment_status VARCHAR(5) NOT NULL,
  _customer_id INT NOT NULL,
  FOREIGN KEY (_customer_id) REFERENCES _customer(_id)
);

CREATE TABLE _belong
(
  _order_id INT NOT NULL,
  _room_id INT NOT NULL,
  PRIMARY KEY (_order_id, _room_id),
  FOREIGN KEY (_order_id) REFERENCES _order(_id),
  FOREIGN KEY (_room_id) REFERENCES _room(_id)
);