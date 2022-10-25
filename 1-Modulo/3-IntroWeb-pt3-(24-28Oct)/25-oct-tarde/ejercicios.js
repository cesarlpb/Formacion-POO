/* Script para resolver los ejercicios planteados */ 
let ejercicio2 = document.getElementById("ejercicio-2");
let ejercicio3 = document.getElementById("ejercicio-3");
let casoGeneral = document.getElementById("caso-general");

let precioBase = 1000;

ejercicio2.innerText = sumarIva10(precioBase)
ejercicio3.innerText = sumarIva4(precioBase)

casoGeneral.innerText += calcularIvaGeneral(100, 21) 
casoGeneral.innerText += "\n"
casoGeneral.innerText += calcularIvaGeneral(100, 4) 
casoGeneral.innerText += "\n"
casoGeneral.innerText += calcularIvaGeneral(100, 10)

// Llamada a fn que escribe un dato en consola
escribirEnConsola();
// Llamada a fn que retorna un texto
retornaAlgunDato();

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

// Función que hace console.log()

function escribirEnConsola(){
    // operaciones
    console.log("Hola, desde escribirEnConsola en ejercicios.js")
}

// Función que retorna algo pero no se usa ese dato
function retornaAlgunDato(){
    // operaciones
    return "salida"
}

// Caso general

// Recibe dos params 
// Inputs: 
// precioBase -> 100 € (precio sin IVA)
// porcentaje -> 21, 4, 10 (imposición aplicable)
// Output: 
// precioFinal -> 121 €, 104 € o 110 € -> precioBase + IVA

function calcularIvaGeneral(precioBase, porcentaje){
    let iva = precioBase * porcentaje / 100;
    let precioFinal = precioBase + iva;
    return precioFinal;
}