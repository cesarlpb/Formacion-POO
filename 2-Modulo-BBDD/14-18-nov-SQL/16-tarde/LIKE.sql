/* LIKE */

/* 

    % simboliza ninguno, uno o varios caracteres 
    _ simboliza un caracter
    Nota: en MS Access se usan otros wildcards

*/

-- Empieza por "a"
SELECT * FROM Students
WHERE Nombre LIKE 'a%';
-- Acaba en "a"
SELECT * FROM Students
WHERE Nombre LIKE '%a';
-- Substring en medio
SELECT * FROM Students
WHERE Nombre LIKE '%ar%';
-- Letra 'a' en la segunda posición:
SELECT * FROM Students
WHERE Nombre LIKE '_a%';
-- Empieza en A y tiene 3 caracteres máximo -> 'Ana'
SELECT * FROM Students
WHERE Nombre LIKE 'A__';
-- Empieza en A y acaba en a -> 'Ana'
SELECT * FROM Students
WHERE Nombre LIKE 'a%a';

-- Podemos usar COUNT o cualquier otro filtro con WHERE / LIKE
SELECT COUNT(Nombre) 
FROM Students
WHERE Nombre LIKE 'a%a';

-- Descartamos un patrón con NOT:
SELECT * FROM Students
WHERE Nombre NOT LIKE 'M%';