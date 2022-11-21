/* Ejercicios con WHERE */

/* Filtramos usuarios con el valor 'Argentina' en Country */
SELECT * FROM Customers 
WHERE Country='Argentina';

/* Seleccionando solo algunas columnas */
SELECT CustomerName, Address, PostalCode FROM Customers 
WHERE Country='Argentina';

/* Country = 'España' */
SELECT * FROM Customers 
WHERE Country='España';

