drop database if exists mrphotography;
create database mrphotography;
use mrphotography;


-- -----------------------------------------------------
-- Table Photos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Wedding (
  id_pho INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR (256) NOT NULL,
  thumb VARCHAR(256) NOT NULL,
  description VARCHAR(512) NULL,
  position INT(11) NOT NULL,
  stars TINYINT(1) UNSIGNED NOT NULL ,
  comment VARCHAR(500),
  createdDate DATETIME NOT NULL,
);
CREATE TABLE IF NOT EXISTS Babyshower (
  id_pho INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR (256) NOT NULL,
  thumb VARCHAR(256) NOT NULL,
  description VARCHAR(512) NULL,
  position INT(11) NOT NULL,
  stars TINYINT(1) UNSIGNED NOT NULL ,
  comment VARCHAR(500),
  createdDate DATETIME NOT NULL,
);
CREATE TABLE IF NOT EXISTS Birthday (
  id_pho INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR (256) NOT NULL,
  thumb VARCHAR(256) NOT NULL,
  description VARCHAR(512) NULL,
  position INT(11) NOT NULL,
  stars TINYINT(1) UNSIGNED NOT NULL ,
  comment VARCHAR(500),
  createdDate DATETIME NOT NULL,
);
CREATE TABLE IF NOT EXISTS Engagement (
  id_pho INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR (256) NOT NULL,
  thumb VARCHAR(256) NOT NULL,
  description VARCHAR(512) NULL,
  position INT(11) NOT NULL,
  stars TINYINT(1) UNSIGNED NOT NULL ,
  comment VARCHAR(500),
  createdDate DATETIME NOT NULL,
);
CREATE TABLE IF NOT EXISTS Graduation (
  id_pho INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR (256) NOT NULL,
  thumb VARCHAR(256) NOT NULL,
  description VARCHAR(512) NULL,
  position INT(11) NOT NULL,
  stars TINYINT(1) UNSIGNED NOT NULL ,
  comment VARCHAR(500),
  createdDate DATETIME NOT NULL,
);
CREATE TABLE IF NOT EXISTS Nature (
  id_pho INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR (256) NOT NULL,
  thumb VARCHAR(256) NOT NULL,
  description VARCHAR(512) NULL,
  position INT(11) NOT NULL,
  stars TINYINT(1) UNSIGNED NOT NULL ,
  comment VARCHAR(500),
  createdDate DATETIME NOT NULL,
);