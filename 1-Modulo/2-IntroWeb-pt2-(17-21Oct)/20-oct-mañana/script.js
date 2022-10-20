// Ejercicio 1 - 20 oct

// Ejemplo de if y else

let esDia20 = false // cambiar el valor a true o false y ver el resultado
console.log("Antes del bucle if")
if (esDia20 == true) {
    console.log("Es dia 20!");
} else {
    console.log("No es día 20 :(")
}
console.log("Después del bucle if")

/**********************
 * a. Pedir un dato al usuario y comprobar si es mayor de edad 
 ***********************/

let edad = Number(prompt("Ingresa tu edad:")) // devuelve número o NaN
let mensajeA;
if( edad > 18 ) {
    // Lo que ejecutamos en caso de true
    console.log("Bienvenido a la página!")
    mensajeA = "Bienvenido a la página!"
} else if (edad == 18 ) {
    // (Opcional) Podemos usar >= en el if anterior
    console.log("Acabas de cumplir 18. Enhorabuena!")
    mensajeA = "Acabas de cumplir 18. Enhorabuena!"
} 
else if ( edad < 18 ){
    // Lo que ejecutamos en caso de false
    console.warn("No puedes acceder por ser menor de edad") // probad también console.error()
    mensajeA = "No puedes acceder por ser menor de edad"
} else {
    // NaN
    console.log("Vaya, hemos recibido NaN :(")
    // Volvemos a pedir la edad (opcional)
    edad = Number(prompt("Necesitamos un valor numérico. Ingresa tu edad:"))
    // Recibimos el dato y SALIMOS del bucle
    // No se escribe ninguno de los mensajes anteriores
    // No se valida este valor recibido -> esto podría causar problemas
    mensajeA = "Gracias!"
}

let a = document.getElementById("sol-a")    // </div id="sol-a"></div>
a.innerText = mensajeA;

/**********************
 * b. Comprobar qué día es y sacar un mensajeA personalizado en cada caso
 ***********************/

let dia = prompt("Escribe el día de la semana:")    // recibimos texto
let mensajeB

// Alternativa:
// dia = dia.toLowerCase()  // Podemos manipular el string para que sea en minúsculas
// Solo habría que comprobar condición en minúsculas

// Modificamos este código para comprobar días con minúscula
if( dia == 'Lunes' || dia == 'lunes' ) {
    console.log("Los lunes son lo mejor!")
    mensajeB = "Los lunes son lo mejor!"
} else if ( dia == 'Martes' || dia == 'martes' ) {
    console.log("Buh, martes")
    mensajeB = "Buh, martes"
} else if ( dia == 'Miércoles' || dia == 'miércoles' ) {
    console.log("Un día más cerca del viernes...")
    mensajeB = "Un día más cerca del viernes..."
} else if ( dia == 'Jueves' || dia == 'jueves' ){
    console.log("Ya casi es viernes!")
    mensajeB = "Ya casi es viernes!"
} else if ( dia == 'Viernes' || dia == 'viernes' ){
    console.log("Por fin es viernes!!!")
    mensajeB = "Por fin es viernes!!!"
} else if ( dia == 'Sábado' || dia =='sábado' ) {
    console.log("zzz...")
    mensajeB = "zzz..."
} else if ( dia == 'Domingo' || dia == 'domingo' ){
    console.log("Es domingo!")
    mensajeB = "Es domingo!"
} else { 
    // Este mensaje aparece en caso de cualquier falta ortográfica
    console.log("Eso no es un día válido.")
}

let b = document.getElementById("sol-b")
b.innerText = mensajeB;

/**********************
 * c. Pedir dos datos para realizar una división -> comprobar que el divisor (segundo número en a / b sería la b) no es cero 
 ***********************/

// a / 0 // Infinity -> no es número

let dividendo = Number(prompt("Ingresa el dividendo:"))
let divisor = Number(prompt("Ingresa el divisor:"))
let mensajeC
let resultado

if ( divisor == 0 ){
    // Explicamos por qué no se puede realizar esta operación
    mensajeC = "No podemos dividir por cero. Acaba mal."
    console.log(mensajeC)
} else {
    // Realizamos la operación
    resultado = dividendo / divisor
    mensajeC = resultado
    console.log(mensajeC)
}

let c = document.getElementById("divi")
c.innerText = mensajeC
