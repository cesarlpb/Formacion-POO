/* Funciones */

// Ejemplo: función que calcula el precio final de un producto añadiendo 21% de IVA

// Definimos variables con el objeto donde vamos a colocar el resultado
let ejemplo = document.getElementById("ejemplo");
// Usar o LLAMAR la función calcularPrecioFinal
let precio = calcularPrecioFinal(100);
// Escribir el dato recibido de la fn en el elemento ejemplo
ejemplo.innerText = "El precio calculado es: " + String(precio) + " €.";

/* Ejercicios */
let ejercicio1 = document.getElementById("ejercicio-1");
let array = calcularDesglose(200)
ejercicio1.innerText = array;

/* Funciones */
function calcularPrecioFinal(precioBase){
    // Calculamos IVA como el 21% del parámetro precioBase
    let iva = 21/100 * precioBase;
    // Calculamos el precioFinal como la suma de precioBase más IVA
    let precioFinal = precioBase + iva;
    // Retornamos o devolvemos el precioFinal calculado
    return precioFinal;
}

// Ejercicio -> recibimos cantidad total y calculamos el desglose de precio base e IVA
function calcularDesglose(precioFinal){
    let precioBase = precioFinal / 1.21;
    let iva = precioFinal - precioBase;
    // Ej. limitar los decimales a 2 decimales
    // Ej. cambiar a texto -> formatear la salida
    return [precioBase, iva]
}
// Ejercicio -> función que añada 10% de IVA
// Ejercicio -> función que añada 4% de IVA

// Calculadora