/* Funciones */

// Ejemplo: función que calcula el precio final de un producto añadiendo 21% de IVA

// Definimos variables con el objeto donde vamos a colocar el resultado
let ejemplo = document.getElementById("ejemplo");
// Usar o LLAMAR la función calcularPrecioFinal
let precio = calcularPrecioFinal(100);
// Escribir el dato recibido de la fn en el elemento ejemplo
ejemplo.innerText = "El precio calculado es: " + String(precio) + " €.";

function calcularPrecioFinal(precioBase){
    // Calculamos IVA como el 21% del parámetro precioBase
    let iva = 21/100 * precioBase;
    // Calculamos el precioFinal como la suma de precioBase más IVA
    let precioFinal = precioBase + iva;
    // Retornamos o devolvemos el precioFinal calculado
    return precioFinal;
}

// Ejercicio -> función que añada 10% de IVA
// Ejercicio -> función que añada 4% de IVA