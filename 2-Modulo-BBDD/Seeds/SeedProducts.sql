INSERT INTO `Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Leche semidesnatada', '1', '1', 'bricks 1L x 6', '3.55');
INSERT INTO `Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Cápsulas café x10', '2', '3', 'Caja x10 cápsulas', '4.78');
INSERT INTO `Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Árbol de navidad', '5', '99', 'Unidad x1', '49.99');
INSERT INTO `Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Ratón inalámbrico Corsair', '7', '48', 'Caja de x1 ratón con cargador', '19.99');
INSERT INTO `Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Tomates', '1', '1', 'Malla de 1kg', '1.99');
INSERT INTO `Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Café para llevar', '1', '2', '1 café para llevar', '1.00');

-- UPDATE
UPDATE `Products` SET `CategoryId` = '2' WHERE (`ProductId` = '5');
UPDATE `Products` SET `CategoryId` = '3' WHERE (`ProductId` = '6');
UPDATE `Products` SET `CategoryId` = '4' WHERE (`ProductId` = '3');
UPDATE `Products` SET `CategoryId` = '4' WHERE (`ProductId` = '9');
UPDATE `Products` SET `CategoryId` = '4' WHERE (`ProductId` = '10');
UPDATE `Products` SET `CategoryId` = '5' WHERE (`ProductId` = '4');
UPDATE `Products` SET `ProductName` = 'Ordenador 13\'\'', `SupplierId` = '2', `CategoryId` = '5', `Unit` = 'Ordenador de 13 pulgadas' WHERE (`ProductId` = '8');
