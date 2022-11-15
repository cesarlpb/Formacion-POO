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

/* Operadores */

/**/
-- =	Equal	
-- >	Greater than	
-- <	Less than	
-- >=	Greater than or equal	
-- <=	Less than or equal	
-- <>	Not equal. Note: In some versions of SQL this operator may be written as !=	
-- BETWEEN	Between a certain range	
-- LIKE	Search for a pattern	
-- IN	To specify multiple possible values for a column