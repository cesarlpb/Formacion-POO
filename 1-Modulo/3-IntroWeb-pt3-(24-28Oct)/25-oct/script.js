/* Programa para probar ejemplos de operadores (aritméticos), 
asignación (aritméticos) y tipos de datos en JS 
*/ 

let operadores = document.getElementById("operadores");
let asignacion = document.getElementById("asignacion");
let tipos = document.getElementById("tipos");

/* Operadores:
+ - * / 

%
**

++ --

*/

let opCombTexto = "Operación Combinada \n 10 +  22 / 2  + ( 5*7 ) + 2**3 - 20" 
let opComb = 10 +  22 / 2  + ( 5*7 ) + 2**3 - 20

// para salto de línea cambiar ": " por "\n"

// Alternativa con HTML: 

let operadoresHtml = document.getElementById("operadoresHtml")
operadoresHtml.innerHTML = "<p style='border:1px solid black; padding: 10px;'>" + opCombTexto + ": " + String(opComb) + "</p>"

operadores.innerText = opCombTexto + ": " + String(opComb)

/* Asignación con operadores aritméticos:
+= -= *= /=

%=
**=

*/
let contador = 0;
asignacion.innerText = contador;
// Creamos un botón que incrementa un contador al hacer clic
// Implementamos o definimos incrementar()
function incrementar(){
    ++contador;
    asignacion.innerText = contador;
}
// Creamos el botón que decrementa el contados al hacer clic
// Implementamos o definimos decrementar()
function decrementar(){
    --contador;
    asignacion.innerText = contador;
}

tipos.innerText = "tipos"