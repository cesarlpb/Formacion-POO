-- CASE - WHEN - THEN - ELSE
    -- Retorna NULL si no tiene ELSE
SELECT Quantity,
CASE WHEN Quantity > 2 THEN 'Cantidad es 3 o 4'
WHEN Quantity = 2 THEN 'Cantidad es 2'
ELSE 'La cantidad es menor que 2'
END AS Resultado
FROM OrderDetails;