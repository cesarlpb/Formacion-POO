/* Script para resolver ejercicios de Array objeto */

// Corresponde al 2 de la lista 
function ej1(){
    let diasSemana = new Array(7);
    let el = document.getElementById("ej-1-resultados")
    // Ejemplo para asignar valores numéricos al arr
    // for(let i = 0; i < diasSemana.length; i++){
    //     diasSemana[i] = i;
    // }
    diasSemana = ["lunes", "mArtes", "Miércoles", 
    "JueVes", "vierNes", "Sábado", "doMingo"];

    for(let i = 0; i < diasSemana.length; i++){
        diasSemana[i] = diasSemana[i].toUpperCase();
    }

    el.innerText = `[${diasSemana}]`
}
function ej2(){
    let el = document.getElementById("ej-2-resultados")
    let numbers = Array(10);
    let imparesArr = [];
    let paresArr = [];
    for(let i = 0; i < numbers.length; i++){
        numbers[i] = Math.floor(Math.random()*100);
        if( numbers[i] % 2 == 0 ){
            paresArr.push(numbers[i]);
        } else {
            imparesArr.push(numbers[i]);
        }
    }
    console.log(numbers, paresArr, imparesArr)
    el.innerText = `Array: ${numbers}
                    Pares: ${paresArr}
                    Impares: ${imparesArr}`
}