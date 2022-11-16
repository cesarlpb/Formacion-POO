/* IN */

-- Busca match de la lista en paréntesis:
SELECT * FROM `w3schools-sql`.Students
WHERE Nombre IN ('Mari', 'Mario', 'Ana');

-- Descartamos valores de la lista:
SELECT * FROM `w3schools-sql`.Students
WHERE Nombre NOT IN ('Mari', 'Mario', 'Ana');

-- SELECT dentro de IN:
SELECT * FROM `w3schools-sql`.Students
WHERE Nombre IN (SELECT Nombre FROM `w3schools-sql`.Students WHERE StudentsId > 1); -- El SELECT dentro del IN debe tener 1 col