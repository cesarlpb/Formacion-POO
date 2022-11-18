INSERT INTO `Orders` (`OrderId`, `CustomerId`, `OrderDate`) VALUES ('1000','2', '02-11-2022');
INSERT INTO `Orders` (`CustomerId`, `OrderDate`) VALUES ('4', '05-11-2022');
INSERT INTO `Orders` (`CustomerId`, `OrderDate`) VALUES ('7', '10-11-2022');
INSERT INTO `Orders` (`CustomerId`, `OrderDate`) VALUES ('5', '03-11-2022');

-- UPDATE
INSERT INTO `Orders` (`CustomerId`) VALUES ('11');

-- Después de ALTER TABLE
UPDATE `Orders` SET `EmployeeId` = '10', `ShipperId` = '123' WHERE (`OrderId` = '1000');
UPDATE `Orders` SET `EmployeeId` = '40', `ShipperId` = '345' WHERE (`OrderId` = '1001');
UPDATE `Orders` SET `EmployeeId` = '55', `ShipperId` = '234' WHERE (`OrderId` = '1002');
UPDATE `Orders` SET `EmployeeId` = '33', `ShipperId` = '109' WHERE (`OrderId` = '1003');
UPDATE `Orders` SET `EmployeeId` = '76', `ShipperId` = '451' WHERE (`OrderId` = '1004');

-- UPDATE
INSERT INTO `Orders` (`CustomerId`, `EmployeeId`, `ShipperId`) VALUES ('8', '44', '123');
INSERT INTO `Orders` (`CustomerId`, `EmployeeId`, `ShipperId`) VALUES ('3', '34', '109');
INSERT INTO `Orders` (`CustomerId`, `EmployeeId`, `ShipperId`) VALUES ('1', '13', '123');

-- UPDATE / Creamos coincidencia en EmployeeId
UPDATE `w3schools-sql`.`Orders` SET `EmployeeId` = '10' WHERE (`OrderId` = '1007');
UPDATE `w3schools-sql`.`Orders` SET `EmployeeId` = '10' WHERE (`OrderId` = '1005');
UPDATE `w3schools-sql`.`Orders` SET `EmployeeId` = '33' WHERE (`OrderId` = '1004');
