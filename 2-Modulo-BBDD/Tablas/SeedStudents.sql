-- Datos para tabla Students

INSERT INTO `w3schools-sql`.`Students` (`Nombre`, `Examen`) VALUES ('Mari', '7');
INSERT INTO `w3schools-sql`.`Students` (`Nombre`, `Examen`) VALUES ('Juan', '5');
INSERT INTO `w3schools-sql`.`Students` (`Nombre`, `Examen`) VALUES ('Alfonso', '8');
INSERT INTO `w3schools-sql`.`Students` (`Nombre`, `Examen`) VALUES ('Mario', '5');
INSERT INTO `w3schools-sql`.`Students` (`Nombre`, `Examen`) VALUES ('Ana', '6');

-- UPDATE
UPDATE `w3schools-sql`.`Students` SET `Nombre` = 'Mari' WHERE (`StudentsId` = '1');