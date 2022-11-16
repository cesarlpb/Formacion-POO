/* Ejercicios con WHERE */

/* Filtramos usuarios con el valor 'Argentina' en Country */
SELECT * FROM `w3schools-sql`.Customers 
WHERE Country='Argentina';

/* Seleccionando solo algunas columnas */
SELECT CustomerName, Address, PostalCode FROM `w3schools-sql`.Customers 
WHERE Country='Argentina';

/* Country = 'España' */
SELECT * FROM `w3schools-sql`.Customers 
WHERE Country='España';

