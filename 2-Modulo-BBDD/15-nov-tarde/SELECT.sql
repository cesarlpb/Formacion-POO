/* Ejercicios de SELECT */

/* db -> w3schools-sql */ 
/* Tabla -> Customers */

/* General */
SELECT COUNT(DISTINCT PostalCode) FROM Customers;

/* Firefox - usa MS Access */
SELECT COUNT(*)
FROM (SELECT DISTINCT PostalCode FROM Customers)
AS MiAlias;