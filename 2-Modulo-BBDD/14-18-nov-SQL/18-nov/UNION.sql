-- No admitimos repetición -> 13 resultados
SELECT City FROM Customers
UNION
SELECT City FROM Suppliers
ORDER BY City;

-- Admitimos repetición -> 18 resultados
SELECT City FROM Customers
UNION ALL
SELECT City FROM Suppliers
ORDER BY City;

-- Usando Alias de columna "Tabla Original" para determinar de que tabla procede cada dato:
SELECT 'Customer' AS "Tabla Original", ContactName, City, Country
FROM Customers
UNION
SELECT 'Supplier', ContactName, City, Country
FROM Suppliers;