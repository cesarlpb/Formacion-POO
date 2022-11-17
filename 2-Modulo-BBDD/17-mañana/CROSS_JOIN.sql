-- Nota: colocad filtros o LIMIT para sacar una cantidad de combinaciones
    -- CROSS JOIN puede devolver muchos resultados!
SELECT `w3schools-sql`.Customers.CustomerName, `w3schools-sql`.Orders.OrderId
FROM `w3schools-sql`.Customers
CROSS JOIN `w3schools-sql`.Orders
WHERE `w3schools-sql`.Orders.OrderId = 1001
LIMIT 10;

-- Limitamos resultado a match entre CustomerId de ambas tablas:
SELECT `w3schools-sql`.Customers.CustomerName, `w3schools-sql`.Orders.OrderId
FROM `w3schools-sql`.Customers
CROSS JOIN `w3schools-sql`.Orders
WHERE `w3schools-sql`.Customers.CustomerId = `w3schools-sql`.Orders.CustomerId
ORDER BY `w3schools-sql`.Customers.CustomerId ASC;

-- Intercambiamos de lugar las tablas
SELECT `w3schools-sql`.Customers.CustomerName, `w3schools-sql`.Orders.OrderId
FROM `w3schools-sql`.Orders
CROSS JOIN `w3schools-sql`.Customers
WHERE `w3schools-sql`.Customers.CustomerId = `w3schools-sql`.Orders.CustomerId
ORDER BY `w3schools-sql`.Customers.CustomerId ASC;