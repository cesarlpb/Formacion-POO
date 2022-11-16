-- Tabla Students

CREATE TABLE `w3schools-sql`.`Students` (
  `StudentsId` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(50) NULL DEFAULT 'Alumno',
  `Examen` DECIMAL(3,2) NULL DEFAULT 1,
  PRIMARY KEY (`StudentsId`));
