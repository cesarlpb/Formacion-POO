-- Agrupamos por país y filtramos los que tienen más de 5 repeticiones:
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 1;

-- Ordenamos por el contador de Ids y por el País:
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 1
ORDER BY COUNT(CustomerID) ASC, Country DESC;

-- Hacemos INNER JOIN entre dos tablas buscando match en EmployeeId
    -- Y colocamos Alias para formatear el nombre completo como "Full Name"
    -- Filtramos los que tienen más de una orden
SELECT  Employees.EmployeeId, 
		CONCAT_WS(", ", Employees.FirstName, Employees.LastName) AS "Full Name", 
		COUNT(Orders.OrderId) AS NumberOfOrders
FROM (Orders
INNER JOIN Employees ON Orders.EmployeeId = Employees.EmployeeId)
GROUP BY Orders.EmployeeId
HAVING COUNT(Orders.OrderId) > 1;

-- Añadimos ORDER BY NumberOfOrders:
SELECT  Employees.EmployeeId, 
		CONCAT_WS(", ", Employees.FirstName, Employees.LastName) AS "Full Name", 
		COUNT(Orders.OrderId) AS NumberOfOrders
FROM (Orders
INNER JOIN Employees ON Orders.EmployeeId = Employees.EmployeeId)
GROUP BY Orders.EmployeeId
HAVING COUNT(Orders.OrderId) > 1
ORDER BY NumberOfOrders DESC;