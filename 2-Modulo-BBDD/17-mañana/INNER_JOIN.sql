/* INNER JOIN */

-- 2 tablas
SELECT `w3schools-sql`.Orders.OrderId, `w3schools-sql`.Customers.CustomerName, Orders.OrderDate
FROM `w3schools-sql`.Orders
INNER JOIN `w3schools-sql`.Customers ON `w3schools-sql`.Orders.CustomerId=`w3schools-sql`.Customers.CustomerId;

-- 3 tablas
SELECT `w3schools-sql`.Orders.OrderId, `w3schools-sql`.Customers.CustomerName, `w3schools-sql`.Customers.CustomerId,`w3schools-sql`.Shippers.ShipperName, `w3schools-sql`.Shippers.ShipperId
FROM ((`w3schools-sql`.Orders
INNER JOIN `w3schools-sql`.Customers ON `w3schools-sql`.Orders.CustomerId = `w3schools-sql`.Customers.CustomerId)
INNER JOIN `w3schools-sql`.Shippers ON `w3schools-sql`.Orders.ShipperId = `w3schools-sql`.Shippers.ShipperId);