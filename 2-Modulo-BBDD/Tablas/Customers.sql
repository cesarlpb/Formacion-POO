/* db -> w3schools-sql */
/* Tabla -> Customers */
CREATE TABLE `Customers` (
  `CustomerID` INT NOT NULL AUTO_INCREMENT,
  `CustomerName` VARCHAR(50) NOT NULL,
  `ContactName` VARCHAR(100) NOT NULL,
  `Address` VARCHAR(200) NOT NULL,
  `City` VARCHAR(50) NOT NULL,
  `PostalCode` VARCHAR(50) NOT NULL,
  `Country` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`CustomerID`));