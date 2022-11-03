// Script para hacer ejercicios de bucle While

// 1. Imprimir lista de números de 0 o 1 a N (número introducido por usuario)
function ej1(){
    let el = document.getElementById("ej-1-resultados");
    let n = document.getElementById("input-1").valueAsNumber;
    let i = 0;
    let res = "";
    while( i < n ){
        res += i + " ";
        i++;
    }
    el.innerText = res;
}
// 2. Se pide número en rango y se sigue pidiendo hasta recibirlo

// 3. Se pregunta si continuamos programa -> n o N cierran bucle

// 4. Determinar si el número introducido por usuario es primo
    // Número primo = divisible por si mismo y 1

// 5. Pide una contraseña y si:
    // Coincide -> Acceso concedido
    // No coincide -> 3 intentos
    // Después, mensaje de alerta