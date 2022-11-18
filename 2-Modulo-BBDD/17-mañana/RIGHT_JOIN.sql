-- Hacemos RIGHT JOIN sobre Orders y nos salen las 5 entradas de la tabla Orders (no aparecen NULLS):
SELECT Customers.CustomerId, Customers.CustomerName, Orders.OrderId
FROM Customers
RIGHT JOIN Orders ON Customers.CustomerId = Orders.CustomerId
ORDER BY Customers.CustomerId ASC; -- Como no existe el Customer 11 hay una fila con NULL

-- RIGHT JOIN con EmployeeId:
SELECT Orders.OrderId, Employees.LastName, Employees.FirstName, Employees.EmployeeId
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeId = Employees.EmployeeId
ORDER BY Orders.OrderId ASC;

-- Ejemplo de filtrado en rango para EmployeeId:
SELECT Orders.OrderId, Employees.LastName, Employees.FirstName, Employees.EmployeeId
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeId = Employees.EmployeeId
WHERE Employees.EmployeeId BETWEEN 33 AND 55
ORDER BY Orders.OrderId ASC;