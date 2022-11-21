-- ANY
  -- ANY y SOME son equivalentes
  -- VS Code no me resalta SOME

SELECT ProductName
FROM Products
WHERE ProductId = ANY
  (SELECT ProductId
  FROM OrderDetails
  WHERE Quantity = 3);

-- SOME
SELECT ProductName
FROM Products
WHERE ProductId = SOME
  (SELECT ProductId
  FROM OrderDetails
  WHERE Quantity = 3);