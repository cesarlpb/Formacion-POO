console.log("Ejercicio 2")
console.log("-----------")

let a = Number(prompt("Introduce primer operando:"))
let b = Number(prompt("Introduce segundo operando:"))

/* Suma */ 
let suma = document.getElementById("suma") // <p id="suma"  class="inline">Suma: </p>
let resultado = a + b
console.log("Suma:" + resultado)
suma.innerText += resultado // 'Suma:'      + 36        ---> 'Suma:36'
//          suma.innerText = suma.innerText + resultado

/* Desglose de los pasos para la suma */
// let str = suma.innerText // 'Suma:'
// resultado = a + b        // 36
// let newStr = str + resultado // 'Suma:36'
// suma.innerText = newStr  // 'Suma:36'
/***********************/

/* Resta */ 
let resta = document.getElementById("resta") // <p id="resta" class="inline">Resta: </p>
// a = Number(prompt("Introduce primer operando:"))
// b = Number(prompt("Introduce segundo operando:"))
resultado = a - b
console.log("Resta:" + resultado)
resta.innerText += resultado

let prod = document.getElementById("prod") // <p id="prod"  class="inline">Producto: </p>
// a = Number(prompt("Introduce primer operando:"))
// b = Number(prompt("Introduce segundo operando:"))
resultado = a * b
console.log("Prod:" + resultado)
prod.innerText += resultado

let divi = document.getElementById("divi") // <p id="divi"  class="inline">División: </p>
// a = Number(prompt("Introduce primer operando:"))
// b = Number(prompt("Introduce segundo operando:"))
resultado = a / b
console.log("División:" + resultado)
divi.innerText += resultado
