DROP DATABASE bookingroom;
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
  _status INT NOT NULL
);

CREATE TABLE IF NOT EXISTS _customer
(
  _id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  _fullname VARCHAR(255) NOT NULL,
  _address VARCHAR(255) NOT NULL,
  _point INT DEFAULT 0,
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


INSERT INTO `bookingroom`.`_admin` (`_fullname`, `_username`, `_password`) VALUES ('admin', 'admin', 'admin');

INSERT INTO `bookingroom`.`_customer` (`_fullname`, `_address`, `_point`, `_phone`, `_email`, `_username`, `_password`) VALUES ('Christopher David', '36 Le Duc Tho, My Dinh 2, Nam Tu Liem, Hanoi', '0', '023212312', '001@gmail.com', 'kh001', '1');

INSERT INTO `bookingroom`.`_order` (`_booking_date`, `_number_of_customer`, `_check_in_date`, `_check_out_date`, `_payment_status`, `_customer_id`) VALUES ('2022-06-11', '5', '2022-06-12', '2022-06-13', '0', '1');

INSERT INTO `bookingroom`.`_hotel_owner` (`_name`, `_email`, `_username`, `_password`) VALUES ('David', 'mail@gmail.com', 'owner', 'owner');
