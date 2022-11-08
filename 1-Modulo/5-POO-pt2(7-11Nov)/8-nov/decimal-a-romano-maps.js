// Script para convertir números decimales a romanos - editado con maps

function convertir(){
    // Leemos el campo del input y llamamos a convertir()
    let numDecimal = document.getElementById("myInputA").valueAsNumber, resultados = document.getElementById("resultados");
    let esNumDecimalValido = false, msj1 = "Debes ingresar un número positivo", msj2 = "No podemos representar este número.\nIngresa un número inferior a 4000.";

    // Validamos que num esté entre 1 y 3999
        // Para evitar que salga NaN ponemos un valor por defecto para el input
    numDecimal < 1 ? alert(msj1) : numDecimal > 3999 ? alert(msj2) : esNumDecimalValido = true
    
    // Recibe número decimal entero
    /*
     * 1. Descomponer con descomponer(num) -> arr
     * 2. procesarArray(arr) 
     * 3. Escribir el string en div
     */
    // Equivalencia con símbolos en numeración romana
    // Ordenación y eliminación de símbolos no necesarios -> procesarArray()

    return esNumDecimalValido ? ( resultados.innerText = procesarArray(descomponer(numDecimal)) ) : resultados.innerText = "" // 1234 -> [1, 2, 3, 4] -> "M CC XXX IV"
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

function calcularChar(num, unidad) {
    // op ternario
        // num -> 0-9 // miles -> 0-3
        // unidad -> 1, 10, 100, 1000 
    return char;    // 7*1 -> VII, 5*10 -> L, 4*100 -> CD, 2*1000 -> MM
}

// Fn que procesa el array del número 
// Recibe array de descomponer(num) -> [1, 9, 8, 9]
// Devuelve string de caracteres
function procesarArray(arr) {
    let [char0, char1, char2, char3] = [...arr]; // char0 -> miles | char1 -> centenas | char2 -> decenas | char3 -> unidades

    // 4. Rehacer con map -> prescindimos de simboloRomano() ---> map
    let map = new Map( Object.entries( {1:"I", 5:"V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M"} ) )
    // let milesMap = new Map( Object.entries( {0:"", 1:"M", 2: "MM", 3: "MMM"} ) )

    // -- Repetir para cada char --
    // Si es cero -> nada -> ""
    
// Miles: 0, 1, 2, 3
    // Opcion A: milesMap y operador ternario
    // milesMap.has(char0) ? char0 = milesMap.get(char0) : char0 = "";
// Opción B: map y repeat(char0)
char0 = (char0 >= 0 && char0 <= 3) ? map.get('1000').repeat(char0) : "" // -> "", "M", "MM", "MMM"

// Centenas: 0, 1, ..., 9
char1 = (char1 >= 0 && char1 <= 3) ? map.get('100').repeat(char1) :     // "", "C", "CC", "CCC"
        (char1 == 4 ) ? map.get('100') + map.get('500') :               // "CD"
        (char1 >= 5 && char1 <= 8) ? map.get('500') + map.get('100').repeat(Number(char1) - 5) : // "D", "DC", "DCC", "DCCC"
        (char1 == 9) ? map.get('100') + map.get('1000') : ""    // "CM"

// Decenas: 0, 1 ... 9
char2 = (char2 >= 0 && char2 <= 3) ? map.get('10').repeat(char2) :     // "", "X", "XX", "XXX"
        (char2 == 4 ) ? map.get('10') + map.get('50') :                // "XL"
        (char2 >= 5 && char2 <= 8) ? map.get('50') + map.get('10').repeat(Number(char2) - 5) : // "L", "LX", "LXX", "LXXX"
        (char2 == 9) ? map.get('10') + map.get('100') : ""              // "XC"
    
// Unidades: 0, ... 9
char3 = (char3 >= 0 && char3 <= 3) ? map.get('1').repeat(char3) :     // "", "I", "II", "III"
        (char3 == 4 ) ? map.get('1') + map.get('5') :                // "IV"
        (char3 >= 5 && char3 <= 8) ? map.get('5') + map.get('1').repeat(Number(char3) - 5) : // "V", "VI", "VII", "VIII"
        (char3 == 9) ? map.get('1') + map.get('10') : ""              // "IX"    
    
    // Si es cualquier otro valor, ej. 4, 9... 
        // -> lógica para pedir 5 - 1 -> IV o 10 - 1 -> IX
    
    return char0 + char1 + char2 + char3; // str como concatenación de estos chars
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
    arr[0] = numStr[0]
    arr[1] = numStr[1]
    arr[2] = numStr[2]
    arr[3] = numStr[3]

    return arr; // 1. retornar string ?
}