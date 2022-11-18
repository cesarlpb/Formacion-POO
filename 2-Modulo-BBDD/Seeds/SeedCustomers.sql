/* db -> w3schools-sql */
/* Tabla -> Customers */
INSERT INTO `Customers` (`CustomerName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country`) VALUES ('María', 'Juanito Pérez', 'Calle 123 s/n ', 'Madrid', '28001', 'España');
INSERT INTO `Customers` (`CustomerName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country`) VALUES ('Pepito', 'Mario Martínez', 'Av. de la Programación 098', 'Buenos Aires', '6660', 'Argentina');
INSERT INTO `Customers` (`CustomerName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country`) VALUES ('Alfonso', 'María Santiago', 'C/ De La Fuente 345', 'Toledo', '45660', 'España');
INSERT INTO `Customers` (`CustomerName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country`) VALUES ('Mark', 'John Smith', '1253 Crummit Lane', 'Omaha', '68137', 'Estados Unidos');
INSERT INTO `Customers` (`CustomerName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country`) VALUES ('Andrea', 'Jose Cuervo', 'CIRC JUAN PABLO II NO. 1755 Int. NO. 5', 'Puebla', '72410', 'México');
/* Valores Duplicados */
INSERT INTO `Customers` (`CustomerName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country`) VALUES ('Alfonso', 'María Santiago', 'C/ De La Fuente 345', 'Toledo', '45660', 'España');
INSERT INTO `Customers` (`CustomerName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country`) VALUES ('Mark', 'John Smith', '1253 Crummit Lane', 'Omaha', '68137', 'Estados Unidos');
INSERT INTO `Customers` (`CustomerName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country`) VALUES ('Andrea', 'Jose Cuervo', 'CIRC JUAN PABLO II NO. 1755 Int. NO. 5', 'Puebla', '72410', 'México');

-- UPDATE ContactName
UPDATE `Customers` SET `ContactName` = 'Jose Mota' WHERE (`CustomerId` = '8');
UPDATE `Customers` SET `ContactName` = 'John Stewart' WHERE (`CustomerId` = '7');
UPDATE `Customers` SET `ContactName` = 'María Villa' WHERE (`CustomerId` = '6');

-- UPDATE CP
UPDATE `Customers` SET `PostalCode` = '28001' WHERE (`CustomerId` = '6');
UPDATE `Customers` SET `PostalCode` = '28002' WHERE (`CustomerId` = '3');
UPDATE `Customers` SET `PostalCode` = '68138' WHERE (`CustomerId` = '7');
