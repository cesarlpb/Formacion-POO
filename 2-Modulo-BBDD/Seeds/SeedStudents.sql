-- Datos para tabla Students

INSERT INTO `Students` (`Nombre`, `Examen`) VALUES ('Mari', '7');
INSERT INTO `Students` (`Nombre`, `Examen`) VALUES ('Juan', '5');
INSERT INTO `Students` (`Nombre`, `Examen`) VALUES ('Alfonso', '8');
INSERT INTO `Students` (`Nombre`, `Examen`) VALUES ('Mario', '5');
INSERT INTO `Students` (`Nombre`, `Examen`) VALUES ('Ana', '6');

-- UPDATE
UPDATE `Students` SET `Nombre` = 'Mari' WHERE (`StudentsId` = '1');

-- Añadimos fechas de los exámenes
UPDATE `Students` SET `Fecha` = '02-11-2022' WHERE (`StudentsId` = '2');
UPDATE `Students` SET `Fecha` = '05-11-2022' WHERE (`StudentsId` = '3');
UPDATE `Students` SET `Fecha` = '16-11-2022' WHERE (`StudentsId` = '4');
UPDATE `Students` SET `Fecha` = '11-11-2022' WHERE (`StudentsId` = '5');