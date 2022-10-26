/* Calculadora */ 

function calc(){
    let numA = document.getElementById("myInputA")
    let numB = document.getElementById("myInputB")
    console.log("Has ingresado estos valores:")
    console.log(numA.value)
    console.log(numB.value)
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