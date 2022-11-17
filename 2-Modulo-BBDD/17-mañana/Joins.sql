/* Ejemplos de JOIN */

-- Usamos al columna en común de Customers y Orders para asociar pedidos (orders) a clientes (customers):
SELECT `w3schools-sql`.Orders.OrderId, `w3schools-sql`.Customers.CustomerName, Orders.OrderDate
FROM `w3schools-sql`.Orders
INNER JOIN `w3schools-sql`.Customers ON `w3schools-sql`.Orders.CustomerId=`w3schools-sql`.Customers.CustomerId;