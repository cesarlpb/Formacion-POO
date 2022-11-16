/* INSERT INTO (cols) VALUES (valores) */

-- Lo siguiente FALLA porque no podemos poner NULL en los campos de la tabla Products (tal y como la hemos configurado)
INSERT INTO `w3schools-sql`.Products (ProductName, SupplierId, CategoryId, Unit, Price)
VALUES (NULL, NULL, NULL, NULL, NULL);
-- ^^^ ERROR ^^^

-- Esto también falla porque SupplierId y CategoryId son INT y Price es Decimal
INSERT INTO `w3schools-sql`.Products (ProductName, SupplierId, CategoryId, Unit, Price)
VALUES ("Producto", "", "1", NULL, "0.00");
-- ^^^ ERROR ^^^

-- Este producto de ejemplo si se puede agregar a la tabla Products
INSERT INTO `w3schools-sql`.Products (ProductName, SupplierId, CategoryId, Unit, Price)
VALUES ("Producto ABC", 123, 345, "Algo unitario", 1.23);

-- Customers -> hemos colocado CustomerName como NOT NULL (NN) 
    ALTER TABLE `w3schools-sql`.`Customers` 
    CHANGE COLUMN `ContactName` `ContactName` VARCHAR(100) NOT NULL ,
    CHANGE COLUMN `Address` `Address` VARCHAR(200) NULL ,
    CHANGE COLUMN `City` `City` VARCHAR(50) NULL ,
    CHANGE COLUMN `PostalCode` `PostalCode` VARCHAR(50) NULL ,
    CHANGE COLUMN `Country` `Country` VARCHAR(50) NULL ;
    -- ^^^Ejecutar esto antes de continuar^^^

    -- Esto tira error porque CustomerName no puede ser NULL:
    INSERT INTO `w3schools-sql`.Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
    VALUES (NULL,NULL,NULL,NULL,NULL, NULL);
    -- ^^^ ERROR ^^^
-- Esto introduce un usuario "Pepito"
INSERT INTO `w3schools-sql`.Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ("Pepito",NULL,NULL,NULL,NULL, NULL);

-- Quitamos ContactName para que salga valor por defecto ""
INSERT INTO `w3schools-sql`.Customers (CustomerName, Address, City, PostalCode, Country)
VALUES ("Pepito",NULL,NULL,NULL, NULL);

/* Para el ejemplo siguiente añadimos una columna ROL a la tabla Customers que tiene por defecto el valor de "Usuario" */
ALTER TABLE `w3schools-sql`.`Customers` 
ADD COLUMN `Rol` VARCHAR(20) NULL DEFAULT 'Usuario' AFTER `Country`;
-- ^^^ Ejecutar antes de seguir ^^^

INSERT INTO `w3schools-sql`.Customers (CustomerName, Address, City, PostalCode, Country)
VALUES ("Juanito",NULL,NULL,NULL, NULL);

-- Revertimos cambios de tabla para que no admita NULLS salvo en ROL con valor por defecto
ALTER TABLE `w3schools-sql`.`Customers` 
CHANGE COLUMN `ContactName` `ContactName` VARCHAR(100) NOT NULL ,
CHANGE COLUMN `Address` `Address` VARCHAR(200) NOT NULL ,
CHANGE COLUMN `City` `City` VARCHAR(50) NOT NULL ,
CHANGE COLUMN `PostalCode` `PostalCode` VARCHAR(50) NOT NULL ,
CHANGE COLUMN `Country` `Country` VARCHAR(50) NOT NULL ;
-- ^^^Ejecutar esto para continuar ^^^

-- Ahora falla lo siguiente porque ya no se admiten NULLs:
INSERT INTO `w3schools-sql`.Customers (CustomerName, Address, City, PostalCode, Country)
VALUES ("Juanito",NULL,NULL,NULL, NULL);
-- ^^^ ERROR ^^^

-- Insertamos usuario
INSERT INTO `w3schools-sql`.Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ("Juanito123", "Contacto","Calle 123","Ciudad","12356", "País");

-- Colocamos user con rol Administrador: 
INSERT INTO `w3schools-sql`.Customers (CustomerName, ContactName, Address, City, PostalCode, Country, Rol)
VALUES ("Juanito123", "Contacto","Calle 123","Ciudad","12356", "País", "Administrador");

-- Editamos tabla para que Address tenga valor por defecto

ALTER TABLE `w3schools-sql`.`Customers` 
CHANGE COLUMN `ContactName` `ContactName` VARCHAR(100) NOT NULL ,
CHANGE COLUMN `Address` `Address` VARCHAR(200) NULL DEFAULT 'No hay información' ,
CHANGE COLUMN `City` `City` VARCHAR(50) NOT NULL ,
CHANGE COLUMN `PostalCode` `PostalCode` VARCHAR(50) NOT NULL ,
CHANGE COLUMN `Country` `Country` VARCHAR(50) NOT NULL ;

-- ^^^Ejecutar^^^

/* Quitamos Address y me sale el valor por defecto de la tabla -> "No hay información" */
SELECT * FROM `w3schools-sql`.Customers;INSERT INTO `w3schools-sql`.Customers (CustomerName, ContactName, City, PostalCode, Country)
VALUES ("Juanito345", "Contacto","Ciudad","12356", "País");

-- Editamos tabla para que Addres pueda ser NULL:
ALTER TABLE `w3schools-sql`.`Customers` 
CHANGE COLUMN `Address` `Address` VARCHAR(200) NULL DEFAULT NULL ;
-- ^^^Ejecutar^^^

-- Este usuario se inserta con Addres = NULL
SELECT * FROM `w3schools-sql`.Customers;INSERT INTO `w3schools-sql`.Customers (CustomerName, ContactName, City, PostalCode, Country)
VALUES ("Juanito789", "Contacto","Ciudad","12356", "País");