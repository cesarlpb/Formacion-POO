CREATE TABLE `w3schools-sql`.`Shippers` (
  `ShipperId` INT NOT NULL AUTO_INCREMENT,
  `ShipperName` VARCHAR(100) NOT NULL,
  `Phone` VARCHAR(20) NULL DEFAULT '(+1) 123-456-789' COMMENT 'Tabla de Empresas de Entrega de paquetes',
  PRIMARY KEY (`ShippersId`));
