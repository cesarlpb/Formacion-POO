CREATE TABLE `OrderDetails` (
  `OrderDetailId` INT NOT NULL AUTO_INCREMENT,
  `OrderId` INT NOT NULL,
  `ProductId` INT NOT NULL,
  `Quantity` INT NULL DEFAULT 1 COMMENT 'Unidades del producto (int)',
  PRIMARY KEY (`OrderDetailId`));
