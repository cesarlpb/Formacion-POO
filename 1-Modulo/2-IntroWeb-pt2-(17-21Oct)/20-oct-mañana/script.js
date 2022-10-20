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

/* 
- Pedir dos datos para realizar una división -> comprobar que el divisor (segundo número en a / b sería la b) no es cero 
a / 0 // Infinity -> no es número
*/

/**********************
 * a. Pedir un dato al usuario y comprobar si es mayor de edad 
 ***********************/

let edad = Number(prompt("Ingresa tu edad:")) // devuelve número o NaN
let mensaje;
if( edad > 18 ) {
    // Lo que ejecutamos en caso de true
    console.log("Bienvenido a la página!")
    mensaje = "Bienvenido a la página!"
} else if (edad == 18 ) {
    // (Opcional) Podemos usar >= en el if anterior
    console.log("Acabas de cumplir 18. Enhorabuena!")
    mensaje = "Acabas de cumplir 18. Enhorabuena!"
} 
else if ( edad < 18 ){
    // Lo que ejecutamos en caso de false
    console.warn("No puedes acceder por ser menor de edad") // probad también console.error()
    mensaje = "No puedes acceder por ser menor de edad"
} else {
    // NaN
    console.log("Vaya, hemos recibido NaN :(")
    // Volvemos a pedir la edad (opcional)
    edad = Number(prompt("Necesitamos un valor numérico. Ingresa tu edad:"))
    // Recibimos el dato y SALIMOS del bucle
    // No se escribe ninguno de los mensajes anteriores
    // No se valida este valor recibido -> esto podría causar problemas
    mensaje = "Gracias!"
}

let a = document.getElementById("sol-a")    // </div id="sol-a"></div>
a.innerText = mensaje;

/**********************
 * b. Comprobar qué día es y sacar un mensaje personalizado en cada caso
 ***********************/

let dia = prompt("Escribe el día de la semana:")    // recibimos texto

// Alternativa:
// dia = dia.toLowerCase()  // Podemos manipular el string para que sea en minúsculas
// Solo habría que comprobar condición en minúsculas

// Modificamos este código para comprobar días con minúscula
if( dia == 'Lunes' || dia == 'lunes' ) {
    console.log("Los lunes son lo mejor!")
} else if ( dia == 'Martes' || dia == 'martes' ) {
    console.log("Buh, martes")
} else if ( dia == 'Miércoles' || dia == 'miércoles' ) {
    console.log("Un día más cerca del viernes...")
} else if ( dia == 'Jueves' || dia == 'jueves' ){
    console.log("Ya casi es viernes!")
} else if ( dia == 'Viernes' || dia == 'viernes' ){
    console.log("Por fin es viernes!!!")
} else if ( dia == 'Sábado' || dia =='sábado' ) {
    console.log("zzz...")
} else if ( dia == 'Domingo' || dia == 'domingo' ){
    console.log("Es domingo!")
} else { 
    // Este mensaje aparece en caso de cualquier falta ortográfica
    console.log("Eso no es un día válido.")
}