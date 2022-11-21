/* EXISTS */

SELECT SupplierId, SupplierName
FROM Suppliers
WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierId = Suppliers.SupplierId AND Price > 10);

SELECT SupplierId, SupplierName
FROM Suppliers
WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierId = Suppliers.SupplierId AND Price = 19.99);