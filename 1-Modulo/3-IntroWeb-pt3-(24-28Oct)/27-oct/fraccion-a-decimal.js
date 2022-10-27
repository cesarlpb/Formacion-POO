/* Script para convertir fracciones en números decimales */

function convertir(){
    let numerador = document.getElementById("myInputA").valueAsNumber;
    let denominador = document.getElementById("myInputB").valueAsNumber;
    let resultado = numerador / denominador
    document.getElementById("resultados").innerText = String(resultado)
}