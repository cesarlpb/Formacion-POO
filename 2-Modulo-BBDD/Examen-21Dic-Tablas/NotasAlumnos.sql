-- Para crear BD (si es necesario) primero se ejecuta este query:
CREATE DATABASE IF NOT EXISTS alumnos
    DEFAULT CHARACTER SET = 'utf8mb4';
-- Para crear tabla NotasAlumnos se ejecuta este query:
CREATE TABLE IF NOT EXISTS alumnos.NotasAlumnos (
    AlumnoId INT NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Apellido VARCHAR(100) NOT NULL,
    Asignatura VARCHAR(100) NOT NULL,
    Examen_1 DECIMAL(4,2) NOT NULL,
    Examen_2 DECIMAL(4,2) NOT NULL,
    TrabajoGrupo DECIMAL(4,2) NOT NULL,
    NotaFinal DECIMAL(4,2) NULL,
    PRIMARY KEY (AlumnoId)
);
-- Para insertar datos en tabla NotasAlumnos se ejecuta este query:
INSERT INTO alumnos.NotasAlumnos (Nombre, Apellido, Asignatura, Examen_1, Examen_2, TrabajoGrupo) VALUES
    ('Juan', 'Martínez', 'Matemáticas', 3, 7, 7),
    ('Maria', 'González', 'Inglés', 4, 7.5, 7.5),
    ('Ana', 'Pérez', 'Matemáticas', 4, 6, 6),
    ('Javier', 'De la Fuente', 'Inglés', 8, 5, 8),
    ('Teresa', 'Saavedra', 'Inglés', 9, 5, 9);

-- Para actualizar datos en tabla NotasAlumnos se ejecuta este query:
UPDATE alumnos.NotasAlumnos SET Asignatura = 'Matemáticas' WHERE Asignatura = 'Matematicas';
-- Para ver todos los datos insertados:
SELECT * FROM alumnos.NotasAlumnos;
-- 4.a Calculamos la NotaFinal de cada alumno:
UPDATE alumnos.NotasAlumnos SET NotaFinal = 0.4 * Examen_1 + 0.4 * Examen_2 + 0.2 * TrabajoGrupo;
-- 4.b Determinamos los alumnos que han aprobado la asignatura:
SELECT Nombre, Apellido, Asignatura FROM alumnos.NotasAlumnos WHERE NotaFinal >= 5;
-- 4.c Determinamos los alumnos que han aprobado la asignatura de Inglés:
SELECT Nombre, Apellido, Asignatura FROM alumnos.NotasAlumnos WHERE NotaFinal >= 5 AND Asignatura LIKE "Inglés";