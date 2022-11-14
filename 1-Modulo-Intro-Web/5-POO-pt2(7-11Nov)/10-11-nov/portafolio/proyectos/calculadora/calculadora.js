/* Calculadora con ternarios y arrow functions */ 

function calc(){
    let numA = document.getElementById("myInputA").valueAsNumber, numB = document.getElementById("myInputB").valueAsNumber; // Number
    let operacionesSel = document.getElementById("operaciones"), res = document.getElementById("resultados") // select y resultados
    let pos = operacionesSel.options.selectedIndex; // índice seleccionado
    
    // Llamar a la fn seleccionada
        // posicion -> 0 es Suma, 1 es Resta ... 6 es Logaritmo 10

    // Idea: pasar a un Map con llaves Number y keys Funciones -> 0 => a+b // map.get(0)(a,b)
    res.innerText =
    (pos === 0) ? (numA + numB) : 
    (pos === 1) ? (numA - numB) :
    (pos === 2) ? (numA * numB) :
    (pos === 3) ? (() => { return (numB === 0) ? (alert("No se puede dividir por cero"), NaN) : numA / numB })(numA, numB) :
    (pos === 4) ? (() => { return (numA < 0) ? (alert("No se puede calcular la raíz de un número negativo"), NaN) : Math.sqrt(numA)})(numA) :
    (pos === 5) ? (() => { return (numA === 0 || numB === 0) ? (alert("0 elevado a 0 es indeterminado!"), NaN) : Math.pow(numA, numB)})(numA, numB)  
    : (() => { return (numA <= 0) ? (alert("No se puede calcular log10 de números no positivos!"), NaN) : Math.log10(numA)})(numA)
}