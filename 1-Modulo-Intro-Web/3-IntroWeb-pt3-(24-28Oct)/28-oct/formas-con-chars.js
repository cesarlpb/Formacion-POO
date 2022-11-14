/* Formas con caracteres */

// let number = solicitarDato();
// let char = prompt("Introduce un char:");

// Usamos el número recibido
// trianguloDerecha(number); // Completado
// cuadrado(number);         // Completado

// Usamos un char recibido
//trianguloDerechaChar(char, number);    // Completado
// cuadradoChar(char, number);           // Completado

// -> Solicitar estos datos
let filas = solicitarDato();
let columnas = solicitarDato();

// rectangulo(filas, columnas);         // Completado

rectanguloConBorde(filas, columnas);

// 1. Triángulo inclinado hacia la derecha
/* Ejemplo con n = 3

  *
 **
***

*/
function trianguloDerecha(num){
    let texto = "";
    let espacios = 0;
    
    for(let i = 1; i <= num; i++){
        espacios = num - i;
        texto += ' '.repeat(espacios); 
        texto += "*".repeat(i) + "\n";
    }

    let el = document.getElementById("0");
    el.style.textAlign = "right";
    
    escribirSalida(texto.slice(0,-1), 0); // Quitamos el último salto de línea (opcional)
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
    let texto = "";
    for(let i = 1; i <= num; i++){
        texto += "-".repeat(num-i) + char.repeat(i) + "\n";
    }
    // Si usamos espacios con " " el alineado nos lo pone a la izq por defecto
    escribirSalida(texto, 0)
}
function cuadradoChar(char, num){
    let texto = "\n";
    for(let i = 1; i <= num; i++){
        char += " "; // opcional - mejor espaciado
        texto += char.repeat(num) + "\n";
    }
    escribirSalida(texto, 0)
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
function rectangulo(filas, columnas){
    let texto = "";
    for(let i = 1; i <= filas; i++){
        texto += "* ".repeat(columnas) + "\n";
    }
    escribirSalida(texto, 0);
}

/**
Cuadrados o rectángulos con borde

Ej: f(1,1) : -

    f(1,n) : - - - - - ... n ... - - -

    f(n,1) : 
            -
            -
            -
            -
            ...
            n veces
            - 
            - 
            -

    f(2,2) : 
            - -
            - -
    f(3,3) :
            - - -
            - * -
            - - -
    f(3,5) : 
            - - - - -
            - * * * -
            - - - - -
    f(4,6) : 
            - - - - - -
            - * * * * -
            - * * * * -
            - - - - - -

    Forma más general: f(filas, columnas, charInt, charExt)
* 
*/
function rectanguloConBorde(filas, columnas){
    let texto = "\n";
    
    let charInt = "o ";
    let charExt = "x ";
    let char = "";

    for(let i = 1; i <= filas; i++){
        for(let j = 1; j<= columnas; j++){
            if( j == 1 || j == columnas){ char = charExt; }
            else if( i == 1 || i == filas ){ char = charExt; }
            else { char = charInt; }
            texto += char;
        }
        texto += "\n"
    }

    // Cambiamos estilo del div para que se aprecie mejor la salida (opcional)
    let el = document.getElementById("0");
    el.style.lineHeight = '0.8em';
    //
    escribirSalida(texto, 0);
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