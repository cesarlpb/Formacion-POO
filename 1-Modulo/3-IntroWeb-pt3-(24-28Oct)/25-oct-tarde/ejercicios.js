/* Script para resolver los ejercicios planteados */ 
let ejercicio2 = document.getElementById("ejercicio-2");
let ejercicio3 = document.getElementById("ejercicio-3");

let precioBase = 1000;

ejercicio2.innerText = sumarIva10(precioBase)
ejercicio3.innerText = sumarIva4(precioBase)

// Ejercicio -> función que añada 10% de IVA
function sumarIva10(precioBase){
    let iva = precioBase * 10 / 100;
    let precioFinal = precioBase + iva;
    return precioFinal;
}
// Ejercicio -> función que añada 4% de IVA
function sumarIva4(precioBase){
    let iva = precioBase * 4 / 100;
    let precioFinal = precioBase + iva;
    return precioFinal;
}
// Caso general