-- Contamos cuántos usuarios hay de cada país:
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;

-- Agrupamos por cuenta de países y ordenamos asc:
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) ASC;

-- Agrupamos Shippers por número de pedidos que tienen asignados:
SELECT Shippers.ShipperName,COUNT(Orders.OrderID) AS NumberOfOrders FROM Orders
LEFT JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID
GROUP BY ShipperName;

-- Ordenamos usando el alias NumberOfOrders:
SELECT Shippers.ShipperName,COUNT(Orders.OrderID) AS NumberOfOrders FROM Orders
LEFT JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID
GROUP BY ShipperName
ORDER BY NumberOfOrders DESC;