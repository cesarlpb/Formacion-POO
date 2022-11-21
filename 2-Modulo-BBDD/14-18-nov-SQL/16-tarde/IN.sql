/* IN */

-- Busca match de la lista en paréntesis:
SELECT * FROM Students
WHERE Nombre IN ('Mari', 'Mario', 'Ana');

-- Descartamos valores de la lista:
SELECT * FROM Students
WHERE Nombre NOT IN ('Mari', 'Mario', 'Ana');

-- SELECT dentro de IN:
SELECT * FROM Students
WHERE Nombre IN (SELECT Nombre FROM Students WHERE StudentsId > 1); -- El SELECT dentro del IN debe tener 1 col