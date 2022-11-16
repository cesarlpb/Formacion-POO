/* ORDER BY */

/* Tabla Products */ 
INSERT INTO `w3schools-sql`.`Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Leche semidesnatada', '1', '1', 'bricks 1L x 6', '3.55');
INSERT INTO `w3schools-sql`.`Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Cápsulas café x10', '2', '3', 'Caja x10 cápsulas', '4.78');
INSERT INTO `w3schools-sql`.`Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Árbol de navidad', '5', '99', 'Unidad x1', '49.99');
INSERT INTO `w3schools-sql`.`Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Ratón inalámbrico Corsair', '7', '48', 'Caja de x1 ratón con cargador', '19.99');
INSERT INTO `w3schools-sql`.`Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Tomates', '1', '1', 'Malla de 1kg', '1.99');
INSERT INTO `w3schools-sql`.`Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Café para llevar', '1', '2', '1 café para llevar', '1.00');

/* Tabla Customers */
INSERT INTO `w3schools-sql`.`Customers` (`CustomerName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country`) VALUES ('María', 'Juanito Pérez', 'Calle 123 s/n ', 'Madrid', '28001', 'España');
INSERT INTO `w3schools-sql`.`Customers` (`CustomerName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country`) VALUES ('Pepito', 'Mario Martínez', 'Av. de la Programación 098', 'Buenos Aires', '6660', 'Argentina');
INSERT INTO `w3schools-sql`.`Customers` (`CustomerName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country`) VALUES ('Alfonso', 'María Santiago', 'C/ De La Fuente 345', 'Toledo', '45660', 'España');
INSERT INTO `w3schools-sql`.`Customers` (`CustomerName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country`) VALUES ('Mark', 'John Smith', '1253 Crummit Lane', 'Omaha', '68137', 'Estados Unidos');
INSERT INTO `w3schools-sql`.`Customers` (`CustomerName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country`) VALUES ('Andrea', 'Jose Cuervo', 'CIRC JUAN PABLO II NO. 1755 Int. NO. 5', 'Puebla', '72410', 'México');
INSERT INTO `w3schools-sql`.`Customers` (`CustomerName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country`) VALUES ('Alfonso', 'María Santiago', 'C/ De La Fuente 345', 'Toledo', '45660', 'España');
INSERT INTO `w3schools-sql`.`Customers` (`CustomerName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country`) VALUES ('Mark', 'John Smith', '1253 Crummit Lane', 'Omaha', '68137', 'Estados Unidos');
INSERT INTO `w3schools-sql`.`Customers` (`CustomerName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country`) VALUES ('Andrea', 'Jose Cuervo', 'CIRC JUAN PABLO II NO. 1755 Int. NO. 5', 'Puebla', '72410', 'México');

-- Ejemplos de ORDER BY -> ASC para ascendente y DESC para descendente

    -- Ordenamos por Precio, por defecto ASC 
    SELECT * FROM `w3schools-sql`.Products ORDER BY Price;
    -- Ordenamos por Nombre de Cliente DESC
    SELECT * FROM `w3schools-sql`.Customers ORDER BY CustomerName DESC;

    -- Los queries pueden ser multilínea para leerlos mejor. Ordenamos por Price ASC
    SELECT * FROM `w3schools-sql`.Products 
    ORDER BY Price ASC;  
    -- Ordenamos por Price DESC
    SELECT * FROM `w3schools-sql`.Products 
    ORDER BY Price DESC;

    -- Pedimos producto que contenga "cafe" y sea del proveedor 1 ordenado ASC
    SELECT * FROM `w3schools-sql`.Products 
    WHERE ProductName LIKE '%cafe%' AND SupplierId = 1
    ORDER BY Price ASC;

    -- Pedimos producto que contiene 'cafe' y no cuesta más de 10€
    SELECT * FROM `w3schools-sql`.Products 
    WHERE ProductName LIKE '%cafe%' AND Price < 10
    ORDER BY Price ASC;

    -- Mismo query pero ordenado descendente
    SELECT * FROM `w3schools-sql`.Products 
    WHERE ProductName LIKE '%cafe%' AND Price < 10
    ORDER BY Price DESC;

    -- Seleccionamos entradas NO REPETIDAS y ordenamos alfabéticamente
    SELECT DISTINCT CustomerName, Address, PostalCode, Country FROM `w3schools-sql`.Customers 
    ORDER BY CustomerName ASC;

    -- Seleccionamos entradas NO REPETIDAS y ordenamos al revés
    SELECT DISTINCT CustomerName, Address, PostalCode, Country FROM `w3schools-sql`.Customers 
    ORDER BY CustomerName DESC;

    -- Filtramos los nombres que EMPIEZAN por A/a -> Nota: no es case sensitive asi que vale A o a en filtro y en resultados
    SELECT DISTINCT CustomerName, Address, PostalCode, Country FROM `w3schools-sql`.Customers 
    WHERE CustomerName LIKE 'A%'
    ORDER BY CustomerName ASC;

    -- Filtramos además por país en listado
    SELECT DISTINCT CustomerName, Address, PostalCode, Country FROM `w3schools-sql`.Customers 
    WHERE CustomerName LIKE 'a%' AND Country IN ('España', 'Argentina', 'Venezuela')
    ORDER BY CustomerName ASC;

    -- Nota: el filtro es flexible ante México o Mexico o méxico o mexico -> salen dos resultados
    SELECT DISTINCT CustomerName, Address, PostalCode, Country FROM `w3schools-sql`.Customers 
    WHERE CustomerName LIKE 'a%' AND Country IN ('España', 'Argentina', 'Venezuela', 'Mexico')
    ORDER BY CustomerName ASC;

    -- Solo podemos ordenar el resultado usando una de las columnas que está en el query
    SELECT DISTINCT CustomerName, ContactName, Address, PostalCode, Country FROM `w3schools-sql`.Customers 
    WHERE CustomerName LIKE 'a%' AND Country IN ('España', 'Argentina', 'Venezuela', 'Mexico')
    ORDER BY ContactName DESC;

    -- Lo siguiente arroja ERROR:
    SELECT DISTINCT CustomerName, Address, PostalCode, Country FROM `w3schools-sql`.Customers 
    WHERE CustomerName LIKE 'a%' AND Country IN ('España', 'Argentina', 'Venezuela', 'Mexico')
    ORDER BY ContactName DESC;
    -- ^^^ ERROR ^^^ 

    -- También se puede ordenar por más de una columna (multisort) -> tiene PRIORIDAD la primera columna
    SELECT DISTINCT CustomerName, ContactName, Address, PostalCode, Country FROM `w3schools-sql`.Customers 
    WHERE CustomerName LIKE 'a%' AND Country IN ('España', 'Argentina', 'Venezuela', 'Mexico')
    ORDER BY PostalCode DESC, ContactName ASC;