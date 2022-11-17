CREATE TABLE `w3schools-sql`.`Orders` (
  `OrderId` INT NOT NULL AUTO_INCREMENT,
  `CustomerId` INT NOT NULL,
  `OrderDate` VARCHAR(10) NULL DEFAULT '01-11-2022',
  PRIMARY KEY (`OrderId`));