CREATE TABLE `ProductsForOrders` (
  `ProductId` INT NOT NULL AUTO_INCREMENT,
  `ProductName` VARCHAR(100) NOT NULL DEFAULT 'Default Product',
  `UnitPrice` DECIMAL(6,2) NOT NULL DEFAULT 0,
  `UnitsInStock` INT NOT NULL DEFAULT 0,
  `UnitsOnOrder` INT NULL,
  PRIMARY KEY (`ProductId`));
