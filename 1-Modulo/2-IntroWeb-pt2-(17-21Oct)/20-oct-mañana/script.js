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
- Comprobar qué día es y sacar un mensaje personalizado en cada caso
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