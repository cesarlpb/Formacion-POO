-- ANY

SELECT ProductName
FROM Products
WHERE ProductId = ANY
  (SELECT ProductId
  FROM OrderDetails
  WHERE Quantity = 3);
