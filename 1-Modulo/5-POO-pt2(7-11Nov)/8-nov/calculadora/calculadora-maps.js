/* Calculadora */ 

function calc(){
    let numA = document.getElementById("myInputA").valueAsNumber, numB = document.getElementById("myInputB").valueAsNumber; // Number
    let operacionesSel = document.getElementById("operaciones"), res = document.getElementById("resultados") // select y resultados
    let pos = operacionesSel.options.selectedIndex; // índice seleccionado
    
    // Llamar a la fn seleccionada
        // posicion -> 0 es Suma, 1 es Resta ... 6 es Logaritmo 10
    if( pos === 0 )     {  res.innerText = (numA + numB) } 
    else if( pos === 1 ){  res.innerText = (numA - numB) } 
    else if( pos === 2 ){  res.innerText = (numA * numB) } 
    else if( pos === 3 ){  res.innerText = ( () => {if( numB === 0 ){ alert("No se puede dividir por cero"); return NaN;} 
                                                    else { return numA / numB } })(numA, numB) } 
    else if( pos === 4 ){  res.innerText = (() => {if(numA < 0){alert("No se puede calcular la raíz de un número negativo"); return NaN;} 
                                                   else { return Math.sqrt(numA)}})(numA)} 
    else if( pos === 5 ){  res.innerText = (() => {if(numA === 0 || numB === 0){alert("0 elevado a 0 es indeterminado!"); return NaN;} 
                                                   else {return Math.pow(numA, numB)}})(numA, numB)}
    else                {  res.innerText = (() => {if(numA <= 0){alert("No se puede calcular log10 de números no positivos!"); return NaN;} 
                                                   else { return Math.log10(numA)}})(numA)}
}
// Fn para escribir un dato en el textarea
function escribirResultado(num){
    let textarea = document.getElementById("resultados")
    textarea.innerText = String(num)
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