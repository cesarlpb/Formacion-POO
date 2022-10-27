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

// Recibe un número (1, 5, 10, 50, 100, 1000) y 
// devuelve el caracter en numeración romana
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

// Fn que procesa el array del número 
// Recibe array de descomponer(num) -> [1, 9, 8, 9]
// Devuelve string de caracteres
function procesarArray(arr) {
    let char0, char1, char2, char3;
    let str;

    char0 = String(arr[0]); // miles -> 0, 1, 2, 3
    char1 = String(arr[1]); // centenas
    char2 = String(arr[2]); // decenas
    char3 = String(arr[3]); // unidades

    let milRom = simboloRomano(1000)
    let quinientosRom = simboloRomano(500)
    let cienRom = simboloRomano(100)
    let cincuentaRom = simboloRomano(50)
    let diezRom = simboloRomano(10)
    let cincoRom = simboloRomano(5)
    let unoRom = simboloRomano(1)
    
    // -- Repetir para cada char --
    // Si es cero -> nada -> ""
    
    // Miles: 0, 1, 2, 3
    if( char0 == 0 ){ char0 = "" }                                  // ""
    else if( char0 == 1 ){ char0 = milRom }            // M
    else if( char0 == 2 ){ char0 = milRom.repeat(2) }  // MM
    else if( char0 == 3 ){ char0 = milRom.repeat(3) }  // MMM

    // Centenas: 0, 1, ..., 9
    if( char1 == 0 ){ char1 = "" }                                  // ""
    else if( char1 >= 1 & char1 <= 3 ){ char1 = cienRom.repeat(char1) } // C, CC, CCC
    else if( char1 == 4 ){ char1 = cienRom + quinientosRom }       // CD
    else if( char1 == 5 ){ char1 = quinientosRom }                            // D
    else if( char1 >= 6 & char1 <= 8 ){ 
        char1 = quinientosRom + cienRom.repeat(Number(char1) - 5)  // 6 DC, 7 DCC, 8 DCCC 
    } else if ( char1 == 9 ){ char1 = cienRom + milRom }   // 9 CM

    // Decenas: 0, 1 ... 9

    // Unidades: 0, ... 9

    // Si es 1, 5, 10, 50, 100, 500, 1000 -> simboloRomano(num)
    simbolosValidos = [1, 5, 10, 50, 100, 500, 1000]
    
    // Si es cualquier otro valor, ej. 4, 9... 
        // -> lógica para pedir 5 - 1 -> IV o 10 - 1 -> IX
    
    str = char0 + char1 + char2 + char3; 
    return str;
}

//  Descomposición del número en sumandos 
//  Recibe num de entre 1 y 4 digitos, 
//  Devuelve array de 4 dígitos
/*
    Ejemplos:    
    -> 120 -> 100 + 20 -> 1*100 + 2*10
    Calcula los sumandos de un número determinado 
    -> 1, 10, 100, 1000   
*/
function descomponer(num){
    /* Ejemplos de descomposición:
    2022 -> 2*1000 + 2*10 + 2*1 -> [M, C, X, I] -> [2, 0, 2, 2]
    1989 -> [1, 9, 8, 9] 
    147  -> [0, 1, 4, 7]
    65  ->  [0, 0, 6, 5]
    8   ->  [0, 0, 0, 8]
    */

    //         M  C  D  U
    let arr = [0, 0, 0, 0];

    // Abordar casos en los que recibimos 1, 2, o 3 dígitos
        // Usando str.length determinamos si le faltan ceros al num
            // añadimos los ceros a la izq
         
    // Algoritmo
        /* 0. Recibimos número num
         * 1. Cambiamos a tipo string -> String(num)
         * 2. Asignamos a cada posición del array el caracter correspondiente
         *  2.5. Cambiamos el tipo a Number
         */
    let numStr = String(num)
    
    let len = numStr.length // 1, 2, 3, 4
    if( len === 1 )     { numStr = '000' + numStr }
    else if( len === 2) { numStr = '00' + numStr }
    else if( len === 3) { numStr = '0' + numStr }

    // Estas asignaciones funciona cuando son 4 dígitos
    arr[0] = Number(numStr[0])
    arr[1] = Number(numStr[1])
    arr[2] = Number(numStr[2])
    arr[3] = Number(numStr[3])

    return arr;
}