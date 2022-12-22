-- Suppliers 

CREATE DATABASE IF NOT EXISTS w3schools
    DEFAULT CHARACTER SET = 'utf8mb4';

CREATE TABLE IF NOT EXISTS w3schools.Suppliers(
    SupplierID INT NOT NULL AUTO_INCREMENT,
    SupplierName VARCHAR(200) NOT NULL,
    ContactName VARCHAR(200) NOT NULL,
    Address VARCHAR(200) NOT NULL,
    City VARCHAR(200) NOT NULL,
    PostalCode VARCHAR(200) NOT NULL,
    Country VARCHAR(200) NOT NULL,
    Phone VARCHAR(200) NOT NULL,
    PRIMARY KEY (SupplierID)
);

-- Insertamos datos
INSERT INTO w3schools.Suppliers (SupplierName, ContactName, Address, City, PostalCode, Country, Phone)
VALUES
( 'Exotic Liquid', 'Charlotte Cooper', '49 Gilbert St.', 'London', 'EC1 4SD', 'UK', '(171) 555-2222' ),
( 'New Orleans Cajun Delights', 'Shelley Burke', 'P.O. Box 78934', 'New Orleans', '70117', 'USA', '(100) 555-4822' ), 
( "Grandma Kelly's Homestead", "Regina Murphy", "707 Oxford Rd.", "Ann Arbor", "48104", "USA", "(313) 555-5735" ),
( 'Tokyo Traders', 'Yoshi Nagase', '9-8 Sekimai Musashino-shi', 'Tokyo','100', 'Japan', '(03) 3555-5011'), 
( "Cooperativa de Quesos 'Las Cabras'", 'Antonio del Valle Saavedra', 'Calle del Rosal 4', 'Oviedo', '33007', 'Spain', '(98) 598 76 54');

SELECT * FROM w3schools.Suppliers;