/* BETWEEN */

-- Editamos tabla Students con col Fecha

SELECT * FROM `w3schools-sql`.Students
WHERE Fecha BETWEEN '01-11-2022' AND '05-11-2022';

-- Podemos separar las condiciones de esta forma: 
SELECT * FROM `w3schools-sql`.Students
WHERE 
    Fecha BETWEEN '01-11-2022' AND '05-11-2022' 
    AND Examen > 7;

-- También podemos ordenar y limitar el resultado del query:

SELECT * FROM `w3schools-sql`.Students
WHERE 
    Fecha BETWEEN '01-11-2022' AND '05-11-2022' 
    AND Examen > 7
    ORDER BY Fecha DESC
    LIMIT 1;