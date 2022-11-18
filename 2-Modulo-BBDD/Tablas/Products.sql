CREATE TABLE `Products` (
  `ProductId` INT NOT NULL AUTO_INCREMENT,
  `ProductName` VARCHAR(100) NOT NULL,
  `SupplierId` INT NOT NULL,
  `CategoryId` INT NOT NULL,
  `Unit` VARCHAR(100) NOT NULL,
  `Price` DECIMAL(6,2) NOT NULL,
  PRIMARY KEY (`ProductId`));