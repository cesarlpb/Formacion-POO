/* Script para practicar el bucle for */
let texto = "Bucle del 0 al 10 con i++:\n";
// Hacer un for de prueba -> contar números enteros
for (let i = 0; i <= 10; i++){
    texto += String(i) + " "
}
texto += "\nBucle del 0 al 10 con ++i:\n"
for (let i = 0; i <= 10; ++i){
    texto += String(i) + " "
}
texto += "\nBucle con saltos de líneas:\n"
for (let i = 0; i <= 10; i++){
    texto += String(i) + "\n"
}
texto += "\nBucle con tabulador:\n"
for (let i = 0; i <= 10; i++){
    texto += String(i) + "\t"
}
// Sumar los enteros del 1 al 100, del 1 al 1000...
let num = 0;
for(let i = 0; i <= 10; i++){
    // console.log(num); -> llega hasta el 45, hace la suma 45 + 10 = 55 pero no la escribe
    num = num + i;              // num += i;
    console.log(num); // Escribe el 55
}
texto += "\nSuma del 1 al 10: " + num
// Escribir 10 <p>...</p> con un bucle
let html = "";
for(let i = 0; i < 10; i++){
    
    // html += "<p>"
    // html += "Texto:"
    // ...
    // html += "</p>"

    html += "<p>Texto: " + i + "</p>"
}
// Escribir números pares del 1 al 100
    // Escribir números impares del 1 al 100
let pares = "Pares del 1 al 100: ";
let impares = "Impares del 1 al 100: ";

    for(let i = 2; i <= 100; i +=2 ){
        pares += i + " ";
    }
    for(let i = 1; i <= 100; i +=2 ){
        impares += i + " ";
    }
// Divisores de un número
/* num = 20
 * for(1...20; i++){
     if( 20 % i == 0 ){
         escribo divisor
     }
 }
 */
let divisores = "Divisores: ";
let maxNum = 1000000000; // con este número el bucle tarda unos pocos segundos

for(let i = 1; i <= maxNum; i++ ){
    if( maxNum % i == 0 ){
        divisores += i + " "
    }
}

document.getElementById("myDiv").innerText = texto
document.getElementById("myDiv2").innerHTML = html
document.getElementById("myDiv3").innerText = pares
document.getElementById("myDiv4").innerText = impares
document.getElementById("divisores").innerText = divisores