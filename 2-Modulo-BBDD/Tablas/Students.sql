-- Tabla Students

CREATE TABLE `w3schools-sql`.`Students` (
  `StudentsId` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(50) NULL DEFAULT 'Alumno',
  `Examen` DECIMAL(3,2) NULL DEFAULT 1,
  PRIMARY KEY (`StudentsId`));

ALTER TABLE `w3schools-sql`.`Students` 
ADD COLUMN `Fecha` VARCHAR(50) NOT NULL DEFAULT '01-11-2022' COMMENT 'Usamos formato de dd-mm-aaaa' AFTER `Examen`;
