/* Script para convertir fracciones en números decimales */

function convertir(){
    let numerador = document.getElementById("myInputA").valueAsNumber;
    let denominador = document.getElementById("myInputB").valueAsNumber;

    /* Excluimos el caso de dividir por cero */
    if( denominador === 0 ){ 
        alert("No se puede dividir por cero.\n¡Acaba mal!" )
        return ""
    }

    let decimales = document.getElementById("decimales").options.selectedIndex;
    let resultado = numerador / denominador
    
    document.getElementById("resultados").innerText = String(resultado.toFixed(decimales))
}