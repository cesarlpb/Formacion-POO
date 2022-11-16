/* MIN y MAX */

-- Buscamos el mínimo del precio en Products
SELECT MIN(Price) 
FROM `w3schools-sql`.Products; -- 1.00 // café para llevar

-- Buscamos el máximo del precio en Products
SELECT MAX(Price) 
FROM `w3schools-sql`.Products; -- 49.99 // árbol de Navidad

SELECT MIN(ProductName) 
FROM `w3schools-sql`.Products; -- Devuelve 'Árbol de Navidad'

SELECT MAX(Price) 
FROM `w3schools-sql`.Products; -- Devuelve 'Tomates'

-- Se puede filtrar con WHERE:
SELECT MIN(Price) 
FROM `w3schools-sql`.Products
WHERE ProductId > 1;