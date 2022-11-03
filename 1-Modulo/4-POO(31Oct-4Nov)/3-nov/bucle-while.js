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
    function ej3(){
        let el = document.getElementById("ej-3-resultados");
        let bool = true; // implica continuar el programa
        while(bool){
            
            bool = confirm("¿Quieres continuar el programa?");
            console.log(bool);
        }
        el.innerText = "Has terminado el programa.";
    }
// 4. Determinar si el número introducido por usuario es primo
    // Número primo = divisible por si mismo y 1
    function ej4(){
        // Solución con IF
        let el = document.getElementById("ej-4-resultados");
        let num = document.getElementById("input-4").valueAsNumber;
        let i = 2;
        let esPrimo = true; // suponemos sea primo de entrada
        while( i <= Math.floor(num/2) ){
            console.log(i, num % i)
            if( num % i == 0 ){
                esPrimo = false;
                break;
            }
            i++;
        }
        if(esPrimo){
            el.innerText = "Es número primo."
        } else {
            el.innerText = "El número no es primo"
        } 
    }
// 5. Pide una contraseña y si:
    // Coincide -> Acceso concedido
    // No coincide -> 3 intentos
        // Después, mensaje de alerta
    function ej5(){
        let pwd = document.getElementById("input-5a").value;     // contraseña
        let pwd2 = document.getElementById("input-5b").value;     // repetida
        let res = document.getElementById("ej-5-resultados");    
        let i = 0;
        while( pwd != pwd2 && i < 3 ){
            res.innerText = "Las contraseñas no coinciden";
            // Idea 1: usar <dialog> con input type=password
            pwd2 = prompt("Introduce la contraseña repetida:") 
            // Idea 2: Actualizar value en input-5b de pwd2
            i++;
        }
        if(pwd == pwd2){
            res.innerText = "Las contraseñas coinciden."
        } else {
            res.innerText = "Las contraseñas NO coinciden."
        }
    }