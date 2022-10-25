/* Funciones */

// Ejemplo: función que calcula el precio final de un producto añadiendo 21% de IVA

let variableGlobal = "Texto en línea 5";
let variableGlobal2 = "Texto en línea 6"

// Definimos variables con el objeto donde vamos a colocar el resultado
let ejemplo = document.getElementById("ejemplo");
let ejemplo2 = document.getElementById("ejemplo2");
// Usar o LLAMAR la función calcularPrecioFinal
let precio = calcularPrecioFinal(100); 
// Escribir el dato recibido de la fn en el elemento ejemplo
ejemplo.innerText = "El precio calculado es: " + String(precio) + " €.";
ejemplo2.innerText = calcularPrecioFinal2(200)

/* Ejercicios */
// Escribimos el desglose de precios
let ejercicio1 = document.getElementById("ejercicio-1");
let resultado = calcularDesglose(100)
ejercicio1.innerText = resultado;

// Escribimos variable global
// Variable Global 
modificarVariableGlobal()
console.log(variableGlobal)
// Variable Global 2
modificarVariableGlobal2()
console.log(variableGlobal2)

/* Funciones */

// Input o entrada: precioBase
// Función que calcula el 21% del IVA y lo suma al precioBase. 
// Output o salida: precioFinal
function calcularPrecioFinal(precioBase){
    // Calculamos IVA como el 21% del parámetro precioBase
    let iva = 21/100 * precioBase;
    // Calculamos el precioFinal como la suma de precioBase más IVA
    let precioFinal = precioBase + iva;
    // Retornamos o devolvemos el precioFinal calculado
    return precioFinal;
}

/* Función para practicar scope o ámbito */
function modificarVariableGlobal(){
    variableGlobal = "Nuevo texto desde función en línea 39"
}
/* Función para practicar scope o ámbito */
function modificarVariableGlobal2(){
    let variableGlobal2;
    variableGlobal2 = "Nuevo texto desde función en línea 45"
}

function calcularPrecioFinal2(precioBase){
    // Calculamos IVA como el 21% del parámetro precioBase
    let iva = 21/100 * precioBase;
    // Calculamos el precioFinal como la suma de precioBase más IVA
    let precioFinal = precioBase + iva;
    // Retornamos o devolvemos el precioFinal calculado
    let salidaFormateada = "El precio calculado es: " + String(precioFinal) + " €.";
    return salidaFormateada;
}

// Ejercicio -> recibimos cantidad total y calculamos el desglose de precio base e IVA
function calcularDesglose(precioFinal){
    let precioBase = precioFinal / 1.21;
    let iva = precioFinal - precioBase;
    
    // Ej. limitar los decimales a 2 decimales
    // Modificamos y asignamos valor con 2 decimales a precioBase
    // precioBase = precioBase.toFixed(2)
    // iva = iva.toFixed(2)

    // Ej. cambiar a texto -> formatear la salida
    let linea1 = "Desglose\n"
    let linea2 = "Precio base: " + String(precioBase.toFixed(2)) + " €\n"
    let linea3 = "IVA: " + String(iva.toFixed(2)) + " €"
    let texto = linea1 + linea2 + linea3
    return texto
}
