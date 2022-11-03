// Script para hacer ejercicios de bucle While

// 1. Imprimir lista de números de 0 o 1 a N (número introducido por usuario)
function ej1(){
    let el = document.getElementById("ej-1-resultados");
    let n = document.getElementById("input-1").valueAsNumber;
    let i = 0;
    let res = "";
    while( i < n ){
        res += i + ", ";
        i++;
    }
    res = res.slice(0,-2) // para quitar el último ", "
    el.innerText = res;
}
// 2. Se pide número en rango y se sigue pidiendo hasta recibirlo
function ej2(){
    // Solución con IF
    let el = document.getElementById("ej-2-resultados");
    let num = document.getElementById("input-2").valueAsNumber;
    let i = 0;
    let rango = 10;
    let res = "";
    if(num < rango){
        res = "Número en rango"
    } else {
        res = "Número no está en rango"
    }
    el.innerText = res;

    // Solución con WHILE
    
    // let rango = 10;
    // let num = 11;
    // while(num > rango){
    //     num = Number(prompt("Ingresa un número menor que 10"))
    // }
}
// 3. Se pregunta si continuamos programa -> n o N cierran bucle

// 4. Determinar si el número introducido por usuario es primo
    // Número primo = divisible por si mismo y 1

// 5. Pide una contraseña y si:
    // Coincide -> Acceso concedido
    // No coincide -> 3 intentos
    // Después, mensaje de alerta