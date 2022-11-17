-- Hacemos RIGHT JOIN sobre Orders y nos salen las 5 entradas de la tabla Orders (no aparecen NULLS):
SELECT `w3schools-sql`.Customers.CustomerId, `w3schools-sql`.Customers.CustomerName, `w3schools-sql`.Orders.OrderId
FROM `w3schools-sql`.Customers
RIGHT JOIN `w3schools-sql`.Orders ON `w3schools-sql`.Customers.CustomerId = `w3schools-sql`.Orders.CustomerId
ORDER BY `w3schools-sql`.Customers.CustomerId ASC; -- Como no existe el Customer 11 hay una fila con NULL

-- RIGHT JOIN con EmployeeId:
SELECT `w3schools-sql`.Orders.OrderId, `w3schools-sql`.Employees.LastName, `w3schools-sql`.Employees.FirstName, `w3schools-sql`.Employees.EmployeeId
FROM `w3schools-sql`.Orders
RIGHT JOIN `w3schools-sql`.Employees ON `w3schools-sql`.Orders.EmployeeId = `w3schools-sql`.Employees.EmployeeId
ORDER BY `w3schools-sql`.Orders.OrderId ASC;

-- Ejemplo de filtrado en rango para EmployeeId:
SELECT `w3schools-sql`.Orders.OrderId, `w3schools-sql`.Employees.LastName, `w3schools-sql`.Employees.FirstName, `w3schools-sql`.Employees.EmployeeId
FROM `w3schools-sql`.Orders
RIGHT JOIN `w3schools-sql`.Employees ON `w3schools-sql`.Orders.EmployeeId = `w3schools-sql`.Employees.EmployeeId
WHERE `w3schools-sql`.Employees.EmployeeId BETWEEN 33 AND 55
ORDER BY `w3schools-sql`.Orders.OrderId ASC;