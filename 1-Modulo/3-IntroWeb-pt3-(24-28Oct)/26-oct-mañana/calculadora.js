/* Calculadora */ 

function calc(){
    let numA = document.getElementById("myInputA")
    let numB = document.getElementById("myInputB")

    // numA = numA.valueAsNumber
    // numB = numB.valueAsNumber

    let res1 = suma(Number(numA.values), Number(numB.value))
    let res2 = resta(Number(numA.value), Number(numB.value))
    let res3 = producto(Number(numA.value), Number(numB.value))
    let res4 = division(Number(numA.value), Number(numB.value))
    let res5 = raizCuadrada(Number(numA.value))
    let res6 = potencia(Number(numA.value), Number(numB.value))
    let res7 = log10(Number(numA.value))

    console.log("Resultados:")
    console.log("Suma: " + res1)
    console.log("Resta: " + res2)
    console.log("Producto: " + res3)
    console.log("División: " + res4)
    console.log("Raíz cuadrada: " + res5)
    console.log("Potencia: " + res6)
    console.log("Logaritmo 10: " + res7)
    
    // Tomar valores del select cuando se llame calc()
    // Llamar a la fn seleccionada
    // Escribir el resultado en textarea

}
// Funciones para operaciones básicas + - * / ** % sqrt() log() 
// Suma
function suma(a, b){
    return a + b;
}
// Resta
function resta(a, b){
    return a - b;
}
// Producto
function producto(a, b){
    return a * b;
}
// División
function division(a, b){
    // Si b (divisor) es cero -> a / 0 da Infinity
    if( b === 0 ){
        alert("No se puede dividir por cero!!!")
        return NaN;
    }
    return a / b;
}
// Raíz cuadrada -> Math.sqrt(num)
function raizCuadrada(num){
    if( num < 0 ){
        alert("No existe la raíz cuadrada de números negativos!!!")
        return NaN;
    }
    return Math.sqrt(num);
}
// Potencia -> Math.pow(base, exponente)
function potencia(base, exponente){
    if( base === 0 & exponente === 0 ){
        alert("0 elevado a 0 es indeterminado!!!")
        return NaN;
    }
    return Math.pow(base, exponente);
}
// Log -> Math.log(num)
function log10(num){
    if( num <= 0 ){
        alert("No existe log para números no positivos!!!")
        return NaN;
    }
    return Math.log10(num);
}
// Botones para realizar cálculos
// inputs para ingresar datos
// Estilos