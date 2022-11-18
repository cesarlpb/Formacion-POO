/* MIN y MAX */

-- Buscamos el mínimo del precio en Products
SELECT MIN(Price) 
FROM Products; -- 1.00 // café para llevar

-- Buscamos el máximo del precio en Products
SELECT MAX(Price) 
FROM Products; -- 49.99 // árbol de Navidad

SELECT MIN(ProductName) 
FROM Products; -- Devuelve 'Árbol de Navidad'

SELECT MAX(Price) 
FROM Products; -- Devuelve 'Tomates'

-- Se puede filtrar con WHERE:
SELECT MIN(Price) 
FROM Products
WHERE ProductId > 1;