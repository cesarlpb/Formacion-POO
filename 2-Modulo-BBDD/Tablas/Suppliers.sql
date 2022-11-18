CREATE TABLE `Suppliers` (
  `SupplierId` INT NOT NULL AUTO_INCREMENT,
  `SupplierName` VARCHAR(100) NOT NULL DEFAULT 'Supplier',
  `ContactName` VARCHAR(100) NOT NULL DEFAULT 'Persona de Contacto',
  `Address` VARCHAR(100) NOT NULL DEFAULT 'Default address',
  `City` VARCHAR(30) NOT NULL DEFAULT 'Default city',
  `PostalCode` VARCHAR(20) NOT NULL DEFAULT '00001',
  `Country` VARCHAR(30) NOT NULL DEFAULT 'Default country',
  `Phone` VARCHAR(20) NOT NULL DEFAULT '+1 123 456 789',
  PRIMARY KEY (`SupplierId`));
