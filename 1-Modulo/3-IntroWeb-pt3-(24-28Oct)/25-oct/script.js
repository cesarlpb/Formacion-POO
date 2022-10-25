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

/* Tipos de Datos en JS */

let myBoolean = true    // Para condiciones o tipos de dato -> Sí / No
let number = 1000       // Números
let string = "Texto"    // Textos

/* Array o arreglo de números */
let array = [1, 2, 3]   // Colecciones o listas de números. Ej: precios, días, etc.
/* Array o arreglo de textos */
let arrayStr = ["Primer texto", "Segundo", "Tercer Texto"] // Cualquier tipo de texto
/* Array de booleanos */
let arrayBool = [true, false, true] // conjunto de condiciones o valores verdadero o falso

/* Array de diversos tipos - EVITAR HACER ESTO (siempre que sea posible) */
let arrayMixto = [1, "2", false, [1, 2], {"fiesta": "Es una fiesta"}] // No, gracias.
/* No hacer lo de arriba (a menos que no quede otra opción) ^^^^ */ 

let obj = { "campo": "valor", "otro_campo": "Otro Valor", "tercera_key":"asdad" } // Lo vemos en tema Objetos

tipos.innerText = "[" + array + "]"
