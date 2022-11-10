/* Script para generar lista de preguntas (num) del 1 al 53 
*  - Escribimos resultado en consola
*  - Aceptamos param para calcular N preguntas
*/

// Genera n rands
function generarRands(n){
    let arr = [];
    for(let i = 1; i <= n; i++){
        let num = Math.random()*53
        num = Math.round(num)
        arr.push(num)
    }
    return arr;
}
// Recibe segundo param para acotar máximo
function generarRands2(n, max){
    let arr = [];
    for(let i = 1; i<=n; i++){
        arr.push(Math.floor(Math.random()*max))
    }
    return arr;
}
// Sin que se puedan repetir datos, sin Set -> con bucle for y sin arr.contains()
function generarRandsSinSet(n, max){
    let arr = [], num = 0, contador = 0; estaEnArray = false;
    while( contador < n ){
        num = Math.round(Math.random()*max);
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === num){ estaEnArray = true;}
        }
        if(!estaEnArray){ 
            arr.push(num); 
            contador++; 
        }
        estaEnArray = false;
    }
    return arr;
}
// Sin Set y usando arr.includes()
function generarRandsSinSet2(n, max){
    let arr = [], num = 0, contador = 0;
    while( contador < n ){
        num = Math.ceil(Math.random()*max);
        if(arr.includes(num) == false){ 
            arr.push(num); 
            contador++; 
        }
    }
    return arr;
}
function generarRandsConSet(n, max){
    let set = new Set(), contador = 0;
    while( contador < n ){
        num = Math.ceil(Math.random()*max);
        set.add(num);
        if(set.size > contador){ contador++; }
    }
    return Array.from(set);
}
// Versión de generarRandConSet() usando arrow y ternario
const fun = (n, max) => {
    let set = new Set(), contador = 0;
    while( contador < n ){
        set.add(Math.ceil(Math.random()*max));
        set.size > contador ? contador++ : null;
    }
    return Array.from(set);
}
// Notas y promedios
const notas = fun(20, 10);
// Ej: función para promediar notas -> recibe arr y calcula num
function promediarNotas(arr){
    //
    return nota;
}
    // promedio de notas con pesos -> pasamos notas y pesos (dos arr) -> salida: nota
// Ej: recibe segundo param para colocar (1, 2) decimales -> string