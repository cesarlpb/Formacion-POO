/* Script para generar lista de preguntas (num) del 1 al 53 
*  - Escribimos resultado en consola
*  - Aceptamos param para calcular N preguntas
*/

function generarRands(n){
    let arr = [];
    for(let i = 1; i <= n; i++){
        let num = Math.random()*53
        num = Math.round(num)
        arr.push(num)
    }
    return arr;
}
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

// Ej: vamos a cambiar esta función a arrow