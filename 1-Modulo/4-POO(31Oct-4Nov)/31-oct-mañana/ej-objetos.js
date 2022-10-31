/* Ejercicios con Objetos en JS */

ej1();

// Ej 1 - Obj para guardar notas de alumno y método que promedia notas
    // Propiedades: nombre, apellido, ingles, prog, html (asignaturas)
    // Método: calcular media de las tres asignaturas

function ej1(){
    let alumno = {
        "nombre": "Pepe",
        "apellido": "Valiente",
        "ingles": 7.5,
        "prog": 6.75,
        "html": 8,
        "promediarNotas": function(){
            let ingles = this.ingles; 
            let prog = this.prog;
            let html = this.html;
            let res = (ingles + prog + html) / 3 
            return res.toFixed(2); 
        }
    }
    escribirResultado("Promedio de notas", alumno.promediarNotas())
}


// Funciones auxiliares
function escribirResultado(op, res){
    let div = document.getElementById("resultado");
    let descripcion = "";
    let resultado = "";
    // Lo que hemos calculado
    descripcion += "Operación realizada: " + op + "\n";
    // Resultado
    resultado += "Resultado:\n\n" + res;
    // Escribimos en el div
    div.innerText = descripcion;
    div.innerText += resultado;
}