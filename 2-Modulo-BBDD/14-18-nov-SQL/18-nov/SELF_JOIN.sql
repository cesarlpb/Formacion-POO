/*
SELF JOIN -> La idea es tomar dos copias de la misma tabla y hacer un filtrado con sus propios campos
Tabla A y Tabla B -> son la MISMA tabla
*/

-- Comparación:
    -- Se busca que los ids no coincidan
    -- Se hace coincidencia por City
SELECT A.CustomerId AS CustomerId1, B.CustomerId AS CustomerId2, 
CONCAT_WS(" - ", A.CustomerId, A.ContactName) AS Customer1, 
CONCAT_WS(" - ", B.CustomerId, B.ContactName) AS Customer2,
A.City
FROM Customers A, Customers B
WHERE A.CustomerId <> B.CustomerId
AND A.City = B.City 
ORDER BY A.CustomerId;

-- Agrupamos por CP:
    -- Miramos que los ids no sean iguales
    -- Agrupamos por PostalCode
SELECT A.CustomerId AS Id1, B.CustomerId AS Id2, 
CONCAT_WS(" - ", A.CustomerId, A.CustomerName, A.PostalCode) AS Customer1, 
CONCAT_WS(" - ", B.CustomerId, B.CustomerName, B.PostalCode) AS Customer2,
A.PostalCode
FROM Customers A, Customers B
WHERE A.CustomerId != B.CustomerId
AND A.PostalCode = B.PostalCode
ORDER BY A.PostalCode;

-- Añadimos la condición de que la ciudad de ambos usuarios sea igual
SELECT A.CustomerId AS Id1, B.CustomerId AS Id2, 
CONCAT_WS(" - ", A.CustomerId, A.ContactName, A.PostalCode, A.City) AS Customer1, 
CONCAT_WS(" - ", B.CustomerId, B.ContactName, B.PostalCode, B.City) AS Customer2,
A.PostalCode, A.City
FROM Customers A, Customers B
WHERE 
	A.CustomerId != B.CustomerId 
	AND A.PostalCode = B.PostalCode 
	AND A.City = B.City
ORDER BY A.PostalCode;