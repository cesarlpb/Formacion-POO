/* Operadores */

/*

=	Equal	
>	Greater than	
<	Less than	
>=	Greater than or equal	
<=	Less than or equal	
<>	Not equal. Note: In some versions of SQL this operator may be written as !=	
BETWEEN	Between a certain range	
LIKE	Search for a pattern	
IN	To specify multiple possible values for a column

*/

-- =	Equal
SELECT * FROM `w3schools-sql`.Products WHERE Price = 1.99;
SELECT * FROM `w3schools-sql`.Products WHERE ProductName = 'Tomates';
SELECT * FROM `w3schools-sql`.Products WHERE ProductId = 0;  -- Pedimos Id = 0 que no existe. Resultado vacío (no tira error)
SELECT * FROM `w3schools-sql`.Products WHERE ProductId = -1; -- Pedimos Id = -1 que no existe. Resultado vacío (no tira error)

-- >	Greater than

SELECT * FROM `w3schools-sql`.Products WHERE Price > 1.99;
SELECT * FROM `w3schools-sql`.Products WHERE ProductId > 1;


-- <	Less than

SELECT * FROM `w3schools-sql`.Products WHERE Price < 19.99;
SELECT * FROM `w3schools-sql`.Products WHERE ProductId < 5;

-- >=	Greater than or equal	

SELECT * FROM `w3schools-sql`.Products WHERE Price >= 19.99;

-- <=	Less than or equal
SELECT * FROM `w3schools-sql`.Products WHERE ProductId <= 5;

-- <>	Not equal. Note: In some versions of SQL this operator may be written as !=	

SELECT * FROM `w3schools-sql`.Products WHERE Price <> 19.99;
SELECT * FROM `w3schools-sql`.Products WHERE Price != 19.99;

-- BETWEEN	Between a certain range	-> normalmente se usa con AND

SELECT * FROM `w3schools-sql`.Products WHERE Price BETWEEN 1.99 AND 19.99;  -- Incluye los extremos
SELECT * FROM `w3schools-sql`.Products WHERE Price BETWEEN 2 AND 19.98;     -- Excluimos extremos

SELECT * FROM `w3schools-sql`.Products WHERE ProductId BETWEEN 2 AND 4;     -- 2, 3, 4

-- LIKE	Search for a pattern	

SELECT ProductName FROM `w3schools-sql`.Products WHERE ProductName LIKE 'T%';       -- Tomates
SELECT ProductName FROM `w3schools-sql`.Products WHERE ProductName LIKE 'Tomat%';   -- Tomates
SELECT ProductName FROM `w3schools-sql`.Products WHERE ProductName LIKE 'Tomate%';  -- Tomates

SELECT ProductName FROM `w3schools-sql`.Products WHERE ProductName LIKE 'Capsula%'; -- Cápsulas café x10
SELECT ProductName FROM `w3schools-sql`.Products WHERE ProductName LIKE '%café%';   -- Cápsulas café x10
SELECT ProductName FROM `w3schools-sql`.Products WHERE ProductName LIKE '%cafe%';   -- Cápsulas café x10

-- IN	To specify multiple possible values for a column

SELECT Unit FROM `w3schools-sql`.Products WHERE Unit IN ('Malla de 1kg', 'Unidad x1');   -- 'Unidad x1' y 'Malla de 1kg'
SELECT ProductId FROM `w3schools-sql`.Products WHERE ProductId IN (1,2,3);               -- 1, 2, 3
SELECT Price FROM `w3schools-sql`.Products WHERE Price IN (19.99, 49.99);                -- 19.99 y 49.99

