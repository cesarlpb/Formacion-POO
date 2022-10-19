console.log("Ejercicio 2")
console.log("-----------")

/* Suma */ 
let suma = document.getElementById("suma") // <p id="suma"  class="inline">Suma: </p>
let a = Number(prompt("Introduce primer operando:"))
let b = Number(prompt("Introduce segundo operando:"))
let resultado = a + b
console.log("Suma:" + resultado)
suma.innerText += resultado

/* Resta */ 
let resta = document.getElementById("resta") // <p id="resta" class="inline">Resta: </p>

resultado = a + b
let prod = document.getElementById("prod") // <p id="prod"  class="inline">Producto: </p>

resultado = a + b
let divi = document.getElementById("divi") // <p id="divi"  class="inline">División: </p>

resultado = a + b