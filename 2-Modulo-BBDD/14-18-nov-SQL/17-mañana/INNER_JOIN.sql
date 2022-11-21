/* INNER JOIN */

-- 2 tablas
SELECT Orders.OrderId, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerId=Customers.CustomerId;

-- 3 tablas
SELECT Orders.OrderId, Customers.CustomerName, Customers.CustomerId,Shippers.ShipperName, Shippers.ShipperId
FROM ((Orders
INNER JOIN Customers ON Orders.CustomerId = Customers.CustomerId)
INNER JOIN Shippers ON Orders.ShipperId = Shippers.ShipperId);