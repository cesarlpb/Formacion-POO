/* Ejercicios de SELECT */

/* db -> w3schools-sql */ 
/* Tabla -> Customers */

/* General */
SELECT COUNT(DISTINCT PostalCode) FROM `w3schools-sql`.Customers;

/* Firefox - usa MS Access */
SELECT COUNT(*)
FROM (SELECT DISTINCT PostalCode FROM `w3schools-sql`.Customers)
AS MiAlias;