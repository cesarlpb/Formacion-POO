/* ALIAS */

-- Creamos alias y ordenamos DESC
SELECT Examen AS Nota FROM `w3schools-sql`.Students
ORDER BY Nota DESC;

-- Ordenamos ASC por ALIAS Nota:
SELECT Examen AS Nota FROM `w3schools-sql`.Students
ORDER BY Nota ASC;