-- IFNULL
    -- Aplica valor por defecto si el dato es NULL

-- Sin IFNULL()
SELECT ProductName, UnitPrice * (UnitsInStock + UnitsOnOrder) AS Resultado
FROM ProductsForOrders;
-- Con IFNULL()
SELECT ProductName, UnitPrice * (UnitsInStock + IFNULL(UnitsOnOrder, 0)) AS Resultado
FROM ProductsForOrders;

-- Con COALESCE()
SELECT ProductName, UnitPrice * (UnitsInStock + COALESCE(UnitsOnOrder, 0)) AS Resultado
FROM ProductsForOrders;