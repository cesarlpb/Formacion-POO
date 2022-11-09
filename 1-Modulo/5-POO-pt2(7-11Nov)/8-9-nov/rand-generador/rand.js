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