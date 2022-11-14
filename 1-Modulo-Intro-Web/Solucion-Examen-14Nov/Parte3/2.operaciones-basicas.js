// Funciones que retornan los resultados de operaciones básicas + - * /

const suma = (a = 1, b = 2) => { return a + b; }

const resta = function (a, b){
    return a - b;
}

function producto(a = 1, b = 1){
    return a * b;
}
const prod = producto()

const division = (a,b) => a / b;