-- Hacemos LEFT JOIN de Customers y Orders usando CustomerId

SELECT `w3schools-sql`.Customers.CustomerId, `w3schools-sql`.Customers.CustomerName, `w3schools-sql`.Orders.OrderId
FROM `w3schools-sql`.Customers
LEFT JOIN `w3schools-sql`.Orders ON `w3schools-sql`.Customers.CustomerId = `w3schools-sql`.Orders.CustomerId
ORDER BY `w3schools-sql`.Customers.CustomerName DESC;