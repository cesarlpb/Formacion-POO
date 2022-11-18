CREATE TABLE `Categories` (
  `CategoryId` INT NOT NULL AUTO_INCREMENT,
  `CategoryName` VARCHAR(50) NOT NULL,
  `Description` VARCHAR(200) NULL DEFAULT 'Descripción' COMMENT 'Tabla de Categorías de Productos',
  PRIMARY KEY (`CategoryId`));