// Script para convertir números decimales a romanos

function convertir(){
    // Leemos el campo del input y llamamos a convertir()
    let numDecimal = document.getElementById("myInputA").valueAsNumber; 

    // Validamos que num esté entre 1 y 3999
        // Para evitar que salga NaN ponemos un valor por defecto para el input
    if( numDecimal < 1 ){
        alert("Debes ingresar un número positivo")
        return NaN;
    } else if ( numDecimal > 3999 ){
        alert("No podemos representar este número")
        return NaN;
    }
    
    // Recibe número decimal entero
    
    // Equivalencia con símbolos en numeración romana

    // Ordenación y eliminación de símbolos no necesarios

    document.getElementById("resultados").innerText = numDecimal;
}

function simboloRomano(num) {
    /* 
    1       ->  I 
    5       ->  V
    10      ->  X
    50      ->  L
    100     ->  C
    500     ->  D
    1000    ->  M
    */
    if( num === 1 ) { return "I" } 
    else if ( num === 5 )   { return "V"; } 
    else if ( num === 10 )  { return "X"; } 
    else if ( num === 50 )  { return "L"; }
    else if ( num === 100 ) { return "C"; }
    else if ( num === 500 ) { return "D"; }
    else if ( num === 1000 ){ return "M"; }
    else { return NaN; }
}

// Descomposición del número en sumandos -> 120 -> 100 + 20 -> 1*100 + 2*10
    // Calcula los sumandos de un número determinado -> 1, 10, 100, 1000
    
    /*
    Ejemplos:

    2022 -> 2*1000 + 2*10 + 2*1 -> [M, C, X, I] -> [2, 0, 2, 2]
    1989 -> [1, 9, 8, 9] 
    147  -> [0, 1, 4, 7]
    65  ->  [0, 0, 6, 5]
    8   ->  [0, 0, 0, 8]
    */

function descomponer(num){
    //         M  C  D  U
    let arr = [0, 0, 0, 0];
    // algoritmo
    return arr;
}