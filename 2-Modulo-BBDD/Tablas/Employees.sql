CREATE TABLE `Employees` (
  `EmployeeId` INT NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(50) NOT NULL,
  `LastName` VARCHAR(50) NOT NULL,
  `BirthDate` VARCHAR(45) NULL DEFAULT '01-01-2000',
  `Photo` VARCHAR(45) NULL DEFAULT 'profile.jpg',
  `Bio` VARCHAR(500) NULL,
  PRIMARY KEY (`EmployeeId`));
