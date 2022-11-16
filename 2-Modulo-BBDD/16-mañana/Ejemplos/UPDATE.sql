/* UPDATE */

-- Editamos una entrada con Address NULL:
UPDATE `w3schools-sql`.Customers
SET Address = 'Calle s/n'
WHERE CustomerId = 14;

-- Editamos una entrada
UPDATE `w3schools-sql`.Customers
SET Address = 'Calle 123'
WHERE CustomerId = 15;

-- Múltiples columnas

UPDATE `w3schools-sql`.Customers
SET Address = "Calle 345", City = 'Otra ciudad'
WHERE CustomerId = 15;

-- Actualizamos todos los registros de la tabla (CUIDADO):
UPDATE `w3schools-sql`.Customers
SET Rol = 'Usuario'
WHERE CustomerId > 0
-- ^^^ CUIDADO ^^^