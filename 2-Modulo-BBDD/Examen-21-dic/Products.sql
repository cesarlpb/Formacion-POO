-- SQL para crear db y tablas del examen
    -- Products y Suppliers
CREATE DATABASE IF NOT EXISTS w3schools
    DEFAULT CHARACTER SET = 'utf8mb4';

CREATE TABLE IF NOT EXISTS w3schools.Products(
    ProductID INT NOT NULL AUTO_INCREMENT,
    ProductName VARCHAR(200) NOT NULL,
    SupplierID INT NOT NULL,
    CategoryID INT NOT NULL,
    Unit VARCHAR(200) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (ProductID)
);

-- Insertamos datos
INSERT INTO w3schools.Products (ProductName, SupplierID, CategoryID, Unit, Price) VALUES
( 'Chais', 1, 1, '10 boxes x 20 bags', 18 ), 
( 'Chang', 1, 1, '24 - 12 oz bottles', 19 ), 
( 'Aniseed Syrup', 1, 2, '12 - 550 ml bottles', 10 ), 
( "Chef Anton's Cajun Seasoning", 2, 2, '48 - 6 oz jars', 22 ),
( "Chef Anton's Gumbo Mix", 2, 2, '36 boxes', 21.35 ),
( "Grandma's Boysenberry Spread", 3, 2, '12 - 8 oz jars', 25 ), 
( "Uncle Bob's Organic Dried Pears", 3, 7, '12 - 1 lb pkgs.', 30 ),
( "Northwoods Cranberry Sauce", 3, 2, "12 - 12 oz jars", 40 ),
( "Mishi Kobe Niku", 4, 6, "18 - 500 g pkgs.", 97 ), 
( "Ikura", 4, 8, "12 - 200 ml jars", 31 );

SELECT * FROM w3schools.Products;