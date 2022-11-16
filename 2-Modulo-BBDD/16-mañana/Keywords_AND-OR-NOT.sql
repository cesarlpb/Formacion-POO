/* Ejemplos con Keywords AND, OR, NOT */

/* Realizamos el ejercicio con estos datos */ 
INSERT INTO `w3schools-sql`.`Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Leche semidesnatada', '1', '1', 'bricks 1L x 6', '3.55');
INSERT INTO `w3schools-sql`.`Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Cápsulas café x10', '2', '3', 'Caja x10 cápsulas', '4.78');
INSERT INTO `w3schools-sql`.`Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Árbol de navidad', '5', '99', 'Unidad x1', '49.99');
INSERT INTO `w3schools-sql`.`Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Ratón inalámbrico Corsair', '7', '48', 'Caja de x1 ratón con cargador', '19.99');
INSERT INTO `w3schools-sql`.`Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Tomates', '1', '1', 'Malla de 1kg', '1.99');
INSERT INTO `w3schools-sql`.`Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Café para llevar', '1', '2', '1 café para llevar', '1.00');

-- AND -> Todas las condiciones deben ser verdaderas para que veamos el resultado

SELECT * FROM `w3schools-sql`.Products WHERE Price > 1.99 AND Price < 49.99;    -- Excluimos extremos
SELECT * FROM `w3schools-sql`.Products WHERE Price >= 1.99 AND Price <= 49.99;  -- Incluimos extremos de 1.99 y 49.99

SELECT * FROM `w3schools-sql`.Products WHERE Price > 1.99 AND ProductName LIKE '%cafe%';                    -- Precio > 1.99 y Nombre Producto contiene "cafe"
SELECT * FROM `w3schools-sql`.Products WHERE Price > 1.99 AND ProductName LIKE '%cafe%' AND Price < 4.99;   -- 1 resultado
SELECT * FROM `w3schools-sql`.Products WHERE Price > 1.99 AND ProductName LIKE '%cafe%' AND Price < 4.78;   -- No hay resultado

SELECT * FROM `w3schools-sql`.Products WHERE Price > 1.99 AND ProductName LIKE 'Tomate%' AND Price < 10.00;     -- No hay resultado
SELECT * FROM `w3schools-sql`.Products WHERE Price >= 1.99 AND ProductName LIKE 'Tomate%' AND Price < 10.00;    -- 1 resultado

-- OR -> Al menos una condición debe ser verdadera para ver el resultado

SELECT Price FROM `w3schools-sql`.Products WHERE Price > 1.00 OR ProductName LIKE 'Tomate%';   -- Varios resultados
SELECT * FROM `w3schools-sql`.Products WHERE ProductName LIKE '%cafe%' OR ProductName LIKE 'Tomate%';   -- 3 resultados, 2 de café y 1 de Tomate

SELECT * FROM `w3schools-sql`.Products WHERE Price > 1.00 OR ProductName LIKE '%cafe%';     -- Salen todos
SELECT * FROM `w3schools-sql`.Products WHERE Price > 19.00 OR ProductName LIKE '%cafe%';    -- Salen los de Price > 19 y los dos de café

SELECT * FROM `w3schools-sql`.Products WHERE Price < 19.99 OR ProductName LIKE 'Tomate%' OR Price = 49.99; -- No sale el Price = 19.99
SELECT * FROM `w3schools-sql`.Products WHERE Price < 19.99 OR Price > 10 OR ProductName LIKE 'Tomate%' OR Price = 49.99;    -- Salen todos


-- NOT -> Cambia de valor Verdadero / Falso una condición

SELECT * FROM `w3schools-sql`.Products WHERE ProductName NOT LIKE 'Tomate%';    -- Sale todo lo que NO contiene "Tomate"
SELECT * FROM `w3schools-sql`.Products WHERE ProductName NOT LIKE '%cafe%';     -- Sale todo lo que NO contiene "cafe"
SELECT * FROM `w3schools-sql`.Products WHERE NOT Price > 19.99;     -- Incluye el 19.99
SELECT * FROM `w3schools-sql`.Products WHERE NOT Price >= 19.99;    -- Excluye el 19.99
SELECT * FROM `w3schools-sql`.Products WHERE NOT Price > 19.99 AND NOT Price < 5;   -- Solo sale el 19.99