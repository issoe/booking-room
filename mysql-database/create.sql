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

INSERT INTO `bookingroom`.`_customer` (`_fullname`, `_address`, `_point`, `_phone`, `_email`, `_username`, `_password`) VALUES ('Christopher David', '36 Le Duc Tho, My Dinh 2, Nam Tu Liem, Hanoi', '0', '023212312', '001@gmail.com', 'customer', 'customer');

INSERT INTO `bookingroom`.`_order` (`_booking_date`, `_number_of_customer`, `_check_in_date`, `_check_out_date`, `_payment_status`, `_customer_id`) VALUES ('2022-06-11', '5', '2022-06-12', '2022-06-13', '0', '1');

INSERT INTO `bookingroom`.`_hotel_owner` (`_name`, `_email`, `_username`, `_password`) VALUES ('David', 'mail@gmail.com', 'owner', 'owner');

INSERT INTO `bookingroom`.`_hotel` (`_address`, `_name`, `_phone`, `_email`, `_hotel_owner_id`, `_admin_id`) VALUES ('36 Le Duc Tho, My Dinh 2, Nam Tu Liem, Hanoi\n', 'Hyatt Regency West Hanoi	', '0123450', 'Hyatt@mail.com', '1', '1');
INSERT INTO `bookingroom`.`_hotel` (`_address`, `_name`, `_phone`, `_email`, `_hotel_owner_id`, `_admin_id`) VALUES ('No. 20 Phan Chu Trinh, Phan Chi Trinh Ward, Hoan Kiem District, Hanoi\n', 'Hilton Garden Inn	', '0123451', 'hilton@mail.com', '1', '1');
INSERT INTO `bookingroom`.`_hotel` (`_address`, `_name`, `_phone`, `_email`, `_hotel_owner_id`, `_admin_id`) VALUES ('15 Ngo Quyen, Hoan Kiem, Hanoi\n', 'Sofitel Legend Metropole Hà Nội	', '0123452', 'Sofiter@mail.com', '1', '1');
INSERT INTO `bookingroom`.`_hotel` (`_address`, `_name`, `_phone`, `_email`, `_hotel_owner_id`, `_admin_id`) VALUES ('5 Tu Hoa, Tay Ho, Hanoi\n', 'InterContinental Hanoi Westlake	', '0123453', 'MT@mail.com', '1', '1');
INSERT INTO `bookingroom`.`_hotel` (`_address`, `_name`, `_phone`, `_email`, `_hotel_owner_id`, `_admin_id`) VALUES ('66 Phuc La, Ha Dong, Hanoi\n', 'Mường Thanh Grand Xa La	', '0123454', 'Bell@mail.com', '1', '1');
INSERT INTO `bookingroom`.`_hotel` (`_address`, `_name`, `_phone`, `_email`, `_hotel_owner_id`, `_admin_id`) VALUES ('27 Ly Thuong Kiet, Hoan Kiem, Hanoi\n', 'Hoa Binh Hotel	', '0123455', 'HoaBinh@mail.com', '1', '1');
INSERT INTO `bookingroom`.`_hotel` (`_address`, `_name`, `_phone`, `_email`, `_hotel_owner_id`, `_admin_id`) VALUES ('Lam Nghiep Village, Minh Phu Commune, Soc Son District, Hanoi\n', 'Binh An 3 Hotel	', '0123456', 'BA3@mail.com', '1', '1');
INSERT INTO `bookingroom`.`_hotel` (`_address`, `_name`, `_phone`, `_email`, `_hotel_owner_id`, `_admin_id`) VALUES ('Binh An village, Trung Gia commune, Soc Son district, Hanoi\n', 'Binh An 1 Hotel	', '0123457', 'BA1@mail.com', '1', '1');
INSERT INTO `bookingroom`.`_hotel` (`_address`, `_name`, `_phone`, `_email`, `_hotel_owner_id`, `_admin_id`) VALUES ('HH01, To Huu, Ha Dong, Hanoi\n', 'Whyndham Garden Hanoi Hotel	', '0123458', 'Why@mail.com', '1', '1');
INSERT INTO `bookingroom`.`_hotel` (`_address`, `_name`, `_phone`, `_email`, `_hotel_owner_id`, `_admin_id`) VALUES ('23 Ngoc Khanh, Giang Vo, Ba Dinh, Hanoi\n23 Ngoc Khanh, Giang Vo, Ba Dinh, Hanoi\n23 Ngoc Khanh, Giang Vo, Ba Dinh, Hanoi\n23 Ngoc Khanh, Giang Vo, Ba Dinh, Hanoi\n23 Ngoc Khanh, Giang Vo, Ba Dinh, Hanoi\n', 'Lake Side Hotel	', '0123459', 'Lake@mail.com', '1', '1');

INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R001', 'Available', '100', 'A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger.', '1');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R002', 'Available', '200', 'Business centre (with computers, printers, and other office equipment), childcare, conference and event facilities, tennis or basketball courts, gymnasium, restaurants, day spa, and socia', '1');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R003', 'Available', '300', 'Hotel operations vary in size, function, complexity, and cost. Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel fa', '1');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R004', 'Available', '400', 'A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger.', '2');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R005', 'Available', '500', 'Business centre (with computers, printers, and other office equipment), childcare, conference and event facilities, tennis or basketball courts, gymnasium, restaurants, day spa, and socia', '2');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R006', 'Available', '600', 'Hotel operations vary in size, function, complexity, and cost. Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel fa', '2');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R007', 'Available', '700', 'A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger.', '3');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R008', 'Available', '800', 'Business centre (with computers, printers, and other office equipment), childcare, conference and event facilities, tennis or basketball courts, gymnasium, restaurants, day spa, and socia', '3');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R009', 'Available', '900', 'Hotel operations vary in size, function, complexity, and cost. Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel fa', '3');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R010', 'Available', '1000', 'A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger.', '4');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R011', 'Available', '1100', 'Business centre (with computers, printers, and other office equipment), childcare, conference and event facilities, tennis or basketball courts, gymnasium, restaurants, day spa, and socia', '4');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R012', 'Available', '1200', 'Hotel operations vary in size, function, complexity, and cost. Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel fa', '4');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R013', 'Available', '1300', 'A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger.', '5');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R014', 'Available', '1400', 'Business centre (with computers, printers, and other office equipment), childcare, conference and event facilities, tennis or basketball courts, gymnasium, restaurants, day spa, and socia', '5');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R015', 'Available', '1500', 'Hotel operations vary in size, function, complexity, and cost. Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel fa', '5');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R016', 'Available', '1600', 'A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger.', '6');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R017', 'Available', '1700', 'Business centre (with computers, printers, and other office equipment), childcare, conference and event facilities, tennis or basketball courts, gymnasium, restaurants, day spa, and socia', '6');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R018', 'Available', '1800', 'Hotel operations vary in size, function, complexity, and cost. Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel fa', '6');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R019', 'Available', '1900', 'A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger.', '7');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R020', 'Available', '2000', 'Business centre (with computers, printers, and other office equipment), childcare, conference and event facilities, tennis or basketball courts, gymnasium, restaurants, day spa, and socia', '7');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R021', 'Available', '2100', 'Hotel operations vary in size, function, complexity, and cost. Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel fa', '7');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R022', 'Available', '2200', 'A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger.', '8');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R023', 'Available', '2300', 'Business centre (with computers, printers, and other office equipment), childcare, conference and event facilities, tennis or basketball courts, gymnasium, restaurants, day spa, and socia', '8');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R024', 'Available', '2400', 'Hotel operations vary in size, function, complexity, and cost. Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel fa', '8');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R025', 'Available', '2500', 'A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger.', '9');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R026', 'Available', '2600', 'Business centre (with computers, printers, and other office equipment), childcare, conference and event facilities, tennis or basketball courts, gymnasium, restaurants, day spa, and socia', '9');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R027', 'Available', '2700', 'Hotel operations vary in size, function, complexity, and cost. Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel fa', '9');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R028', 'Available', '2800', 'A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger.', '10');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R029', 'Available', '2900', 'Business centre (with computers, printers, and other office equipment), childcare, conference and event facilities, tennis or basketball courts, gymnasium, restaurants, day spa, and socia', '10');
INSERT INTO `bookingroom`.`_room` (`_room_number`, `_status`, `_price`, `_description`, `_hotel_id`) VALUES ('R030', 'Available', '3000', 'Hotel operations vary in size, function, complexity, and cost. Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel fa', '10');
