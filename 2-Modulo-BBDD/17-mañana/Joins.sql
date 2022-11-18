/* Ejemplos de JOIN */

-- Usamos al columna en común de Customers y Orders para asociar pedidos (orders) a clientes (customers):
SELECT Orders.OrderId, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerId=Customers.CustomerId;