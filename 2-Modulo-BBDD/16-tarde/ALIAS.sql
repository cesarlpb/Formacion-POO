/* ALIAS */

-- Creamos alias y ordenamos DESC
SELECT Examen AS Nota FROM Students
ORDER BY Nota DESC;

-- Ordenamos ASC por ALIAS Nota:
SELECT Examen AS Nota FROM Students
ORDER BY Nota ASC;

-- Podemos ordenar por Alias DESC
SELECT Examen AS Nota FROM Students
WHERE Examen > 7
ORDER BY Nota DESC;

-- Podemos ordenar por Alias ASC
SELECT Examen AS NotaExamen FROM Students 
WHERE Examen > 7
ORDER BY Examen ASC;

-- Alias con espacios -> '...' o "..."
SELECT Examen AS "Nota del Examen" FROM Students
ORDER BY Examen DESC;

-- Usamos CONCAT_WS() para formatear campos del Alias
SELECT Nombre, Examen, Fecha, CONCAT_WS(', ', Nombre, Examen, Fecha) AS Resumen 
FROM Students
ORDER BY Resumen;

-- Alias de Tabla -> se define DESPUÉS del FROM y podemos:
    -- Acceder a las columnas con notación de obj -> .
    -- Usar WHERE, ORDER BY... con las columnas
SELECT p.ProductName, p.Price FROM Products AS p
WHERE p.Price > 3
ORDER BY p.ProductName;

-- Combinamos Alias de columna con Alias de Tabla
SELECT p.ProductName AS "Nombre de Producto", p.Price AS Precio 
FROM Products AS p
WHERE p.Price > 3
ORDER BY p.ProductName;

-- Podemos tomar datos de más de un tabla en el mismo query:
SELECT p.ProductName AS "Nombre de Producto", p.Price AS Precio, 
FROM Products AS p
WHERE p.Price > 3
ORDER BY p.ProductName;

-- Podemos seleccionar campos de más de una tabla en el mismo query:
SELECT p.ProductName AS "Nombre de Producto", p.Price AS Precio, 
c.CustomerName AS "Nombre de Cliente", CONCAT_WS(", ", c.Address, c.PostalCode, c.City, c.Country) AS Direccion
FROM Products AS p, Customers AS c
ORDER BY Direccion;

-- Podemos usar los filtros que conocemos para reducir la selección:
SELECT p.ProductName AS "Nombre de Producto", p.Price AS Precio, 
c.CustomerName AS "Nombre de Cliente", CONCAT_WS(", ", c.Address, c.PostalCode, c.City, c.Country) AS Direccion
FROM Products AS p, Customers AS c
WHERE c.CustomerName LIKE "M%"
ORDER BY Direccion;