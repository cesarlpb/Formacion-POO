-- Nota: colocad filtros o LIMIT para sacar una cantidad de combinaciones
    -- CROSS JOIN puede devolver muchos resultados!
SELECT Customers.CustomerName, Orders.OrderId
FROM Customers
CROSS JOIN Orders
WHERE Orders.OrderId = 1001
LIMIT 10;

-- Limitamos resultado a match entre CustomerId de ambas tablas:
SELECT Customers.CustomerName, Orders.OrderId
FROM Customers
CROSS JOIN Orders
WHERE Customers.CustomerId = Orders.CustomerId
ORDER BY Customers.CustomerId ASC;

-- Intercambiamos de lugar las tablas
SELECT Customers.CustomerName, Orders.OrderId
FROM Orders
CROSS JOIN Customers
WHERE Customers.CustomerId = Orders.CustomerId
ORDER BY Customers.CustomerId ASC;