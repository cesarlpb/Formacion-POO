/* LIMIT en MySQL */

-- Nota: En SQL Server o MS Access se usa SELECT TOP numero -> SELECT TOP 3
-- En Oracle existe FETCH FIST numero ROWS ONLY... (revisar documentación)

/* MySQL */
-- Limitamos el número de resultados que recibimos
SELECT *
FROM `w3schools-sql`.Customers
WHERE CustomerId > 3
LIMIT 3;

-- Limitamos a 10 (solo tenemos 5 asi que salen esas 5 filas)
SELECT *
FROM `w3schools-sql`.Customers
WHERE CustomerId > 3
LIMIT 10;