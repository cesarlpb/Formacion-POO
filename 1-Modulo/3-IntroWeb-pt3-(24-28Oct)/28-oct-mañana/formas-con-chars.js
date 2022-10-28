/* Formas con caracteres */

let number = solicitarDato();
let char = prompt("Introduce un char:");

// Usamos el número recibido
// trianguloDerecha(number);
cuadrado(number);

// Usamos un char recibido
// trianguloDerechaChar(char, number);
// cuadradoChar(char, number);

// -> Solicitar estos datos
// let base = solicitarDato();
// let altura = solicitarDato();
// rectangulo(base, altura);

// 1. Triángulo inclinado hacia la derecha
/* Ejemplo con n = 3

  *
 **
***

*/
function trianguloDerecha(num){
    //
}

// 2. Dibujamos cuadrado 
/* n = 2 -> f(2)

**
**

*/
function cuadrado(num){
    let texto = "";
    for(let i = 0; i < num; i++){
        texto += "* ".repeat(num);
        texto += "\n";
    }
    escribirSalida(texto, 0);
}
// 3. Extendemos funciones anteriores para recibir n y char
/** f('o', 3)
  
  o
 oo 
ooo

 */
function trianguloDerechaChar(char, num){
    //
}
function cuadradoChar(char, num){
    //
}
// 4. Dibujamos rectángulo -> f(a,b)
/** f(2,3)
 
**
**
**

f(3,2)

***
***

 */
function rectangulo(base, altura){
    //
}

/* Funciones Auxiliares */
// Pide un número positivo y valida que sea > 0 y Number
function solicitarDato(){
    let number = Number(prompt("Introduce un número entero positivo:")) // Si no recibimos número es NaN

    if( isNaN(number) ){ alert("No podemos realizar la iteración") }
    else if ( number < 1 ){ alert("Necesitamos un número positivo") }

    return Math.floor(number); 
}
// Recibe texto y num para colocar por id en el div id="num" el texto
function escribirSalida(contenido, num){
    let div = document.getElementById(num);
    texto = "Ejercicio " + String(num) + ":\n";
    texto += "-------------\n";
    texto += contenido;
    div.innerText = texto;
}