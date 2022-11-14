// Calculadora
let calculadora = document.getElementById("calculadora");
let sumaEl = document.getElementById("suma");
let restaEl = document.getElementById("resta");
let productoEl = document.getElementById("producto");
let divisionEl = document.getElementById("division");

calculadora.innerText += "Resultados:"

sumaEl.innerText += String(suma(10, 20));
restaEl.innerText += String(resta(50, 10));
productoEl.innerText += String(producto(11, 12));
divisionEl.innerText += String(division(100, 50));

// + - * /

function suma(a, b){
    // Se espera que a y b sean números
    let resultado = a + b;
    return resultado;
}
function resta(a, b){
    let resultado = a - b;
    return resultado;
}
function producto(a, b){
    let resultado = a * b;
    return resultado;
}
function division(a, b){
    // No se puede dividir por cero -> considerar ese caso
    let resultado = a / b;
    return resultado;
}

// Ejercicio -> colocamos cada resultado en su caja (div)