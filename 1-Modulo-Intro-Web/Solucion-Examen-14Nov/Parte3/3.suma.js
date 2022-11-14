// Script del ejercicio 3 para sumar del 1 hasta parametro

const suma = (num) => {
    let suma = 0;
    for(let i = 1; i <= num; i++){
        suma += i;
    }
    return suma;
}