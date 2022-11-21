-- Hacemos LEFT JOIN de Customers y Orders usando CustomerId

SELECT Customers.CustomerId, Customers.CustomerName, Orders.OrderId
FROM Customers
LEFT JOIN Orders ON Customers.CustomerId = Orders.CustomerId
ORDER BY Customers.CustomerName DESC;