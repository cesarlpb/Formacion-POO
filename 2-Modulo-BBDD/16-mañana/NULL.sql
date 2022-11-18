/* NULL */

-- Tenemos un usuario con Address como NULL:
SELECT * FROM Customers
WHERE Address IS NULL;

-- Descartamos campos con NULL en Address:
SELECT * FROM Customers
WHERE Address IS NOT NULL;

-- Esto no devuelve NINGUN VALOR nunca:
SELECT * FROM Customers
WHERE Address = NULL;
-- Hay que usar IS