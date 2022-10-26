// Script para convertir números decimales a romanos

let numRomano = convertir()
document.getElementById("resultados").innerText = numRomano;
/*
1       ->  I
5       ->  V
10      ->  X
50      ->  L
100     ->  C
500     ->  D
1000    ->  M
*/ 

function convertir(){
    // Leemos el campo del input y llamamos a convertir()
    let numDecimal = document.getElementById("myInputA").valueAsNumber; 
    // Validamos que num esté entre 1 y 3999
    console.log(numDecimal)
    if( numDecimal < 1 ){
        alert("Debes ingresar un número positivo")
        return NaN;
    } else if ( numDecimal > 3999 ){
        alert("No podemos representar este número")
        return NaN;
    }
    
    // Recibe número decimal entero
    
    // Descomposición del número en sumandos -> 120 -> 100 + 20
    
    // Equivalencia con símbolos en numeración romana

    // Ordenación y eliminación de símbolos no necesarios
    return numDecimal;
}