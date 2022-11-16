/* DELETE */

-- No existe, no cambia nada, pero NO tira error:
DELETE FROM `w3schools-sql`.Customers
WHERE CustomerId = 123;

-- Si existe lo borra:
DELETE FROM `w3schools-sql`.Customers
WHERE CustomerId = 13;

-- Borrado múltiple (cuidado) con WHERE:
DELETE FROM `w3schools-sql`.Customers
WHERE CustomerId > 10;
-- Si existen ids > 10 va a borrar esas entradas 