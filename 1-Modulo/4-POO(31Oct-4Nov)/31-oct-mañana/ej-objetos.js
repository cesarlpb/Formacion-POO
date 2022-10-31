/* Ejercicios con Objetos en JS */

//ej1(); // Obj alumno y método que promedia notas
//ej2(); // Obj para calcular el precio neto de un producto
//ej3(); // Obj para calcular la densidad de una piedra en kg/m3 y en g/cc
//ej4(); // Obj que representa a una cuenta bancaria
//ej5(); // Obj ficha de entrenamiento
ej6();

// Ej 1 - Obj para guardar notas de alumno y método que promedia notas
    // Propiedades: nombre, apellido, ingles, prog, html (asignaturas)
    // Método: calcular media de las tres asignaturas
function ej1(){
    let alumno = {
        "nombre": "Pepe",
        "apellido": "Valiente",
        "ingles": 7.5,
        "prog": 6.75,
        "html": 8,
        "promediarNotas": function(){
            let ingles = this.ingles; 
            let prog = this.prog;
            let html = this.html;
            let res = (ingles + prog + html) / 3 
            return res.toFixed(2);

            // Alternativa del return sin variables adicionales:
            //return ( (this.ingles + this.prog + this.html) / 3 ).toFixed(2); 
        }
    }
    escribirResultado("Promedio de notas", alumno.promediarNotas())
}

// Ej 2 - Cálculo del precio neto de un producto aplicando descuento
function ej2(){
    let producto = {
        "precio": 200,      // €
        "descuento": 30,    // Esto es un % -> tanto por ciento
        "calcularPrecioNeto": function(){
            let valorDescontado = (this.descuento / 100) * this.precio; // €
            return this.precio - valorDescontado;
        }
    }
    escribirResultado("Calculamos precio neto", producto.calcularPrecioNeto() + " €")
}

// Ej 3 - Objeto piedra que tiene masa y volumen a partir de lo cual de calcula densidad
function ej3(){
    let piedra = {
        "color": "grisáceo",
        "origen": "Islas volcánicas",
        "materiales": ["silicio", "calcio"],
        "masaKg": 1.5,          // kg   
        "masaGr": 1.5 * 1000,
        "volumenCc": 100,
        "volumenM3": 0.001,
        "calcDensidadKgM3": function(){
            // densidad = masa (kg) / volumen (m3)
            return (this.masaKg / this.volumenM3).toFixed(5); // kg/m3
        },
        "calcDensidadGrCc": function(){
            // densidad = masa (gr) / volumen (cc)
            return (this.masaGr / this.volumenCc).toFixed(5); // gr/cc
        }
    }
    // escribirResultado("Densidad en kg/m3:", piedra.calcDensidadKgM3() + " kg/m3");
    escribirResultado("Densidad en gr/cc:", piedra.calcDensidadGrCc() + " g/cc")
}

// Ej 4 - Objeto que emula una cuenta de banco con ingresar() y retirar()
    // consultarSaldo() escribe el saldo actual
function ej4(){
    let cuenta = {
        "balance": 100.00,     // €
        "ingresar": function(cantidad){
            this.balance += cantidad;    // limitamos los decimales a 2
            console.log("Balance actual: " + this.balance)
            return this.balance.toFixed(2) + " €";
        },
        "retirar": function(cantidad){
            if(cantidad > this.balance){
                alert("No se puede retirar esa cantidad");
                return 0;
            } else if(cantidad < 0){
                alert("No se admiten cantidades negativas");
                return 0;
            }
            this.balance -= cantidad;    // limitamos los decimales a 2
            return cantidad.toFixed(2);
        },
        "consultarBalance": function(){
            return this.balance + " €";
        }
    }
    // escribirResultado("Retirar 200 €: ", cuenta.retirar(200));
    // escribirResultado("Retirar -1 €: ", cuenta.retirar(-1));
    // escribirResultado("Retirar 50 €: ", "Balance retirado: " + cuenta.retirar(50) + " €");
    escribirResultado("Ingresamos una cantidad con decimales €: ", cuenta.ingresar(10.12345));
    
}

// Ej 5 - Ficha de entrenamiento
function ej5(){
    let ficha = {
        "nombre": "Pepe",
        "apellido": "Grande",
        "sesiones": 0,      // float de km -> 1.56
        "numSesiones": 0,   // int
        "anotarSesion": function(kms){
            // Deberíamos validar que kms no sea negativo
            if( kms < 0 ){
                let msj = "No se pueden registrar valores negativos";
                alert(msj);
                return msj;
            }
            this.sesiones += kms;   // Guardamos los km de todas sesiones
            this.numSesiones += 1;  // Incrementamos el contador de sesiones
            return this.sesiones + " km"
        },
        "calcMedia": function(){
            // Hay que evitar división por cero
            if( this.sesiones == 0 ){ 
                alert("¡Aún no hay realizado una sesión!"); 
                return "No hay sesiones registradas"
            }
            return (this.sesiones / this.numSesiones).toFixed(2) + " km por sesión";
        }
    }
    // escribirResultado("Anotar -1 km: ", ficha.anotarSesion(-1));    // Debe arrojar alert
    // escribirResultado("Media con 0 sesiones: ", ficha.calcMedia())  // Debe arrojar alert
    escribirResultado("Anotar +10 km: ", ficha.anotarSesion(10));   // Debe retornar '10 km'
    ficha.anotarSesion(20);
    ficha.anotarSesion(70);
    escribirResultado("Calculamos media en ficha de " + ficha.nombre, ficha.calcMedia());     // Debe retornar '10 km por sesión'
}

// Ej 6
function ej6(){
    //
}

// Funciones auxiliares
function escribirResultado(op, res){
    let div = document.getElementById("resultado");
    let descripcion = "";
    let resultado = "";
    // Lo que hemos calculado
    descripcion += "Operación realizada: " + op + "\n\n";
    // Resultado
    resultado += "Resultado:\n\n" + res;
    // Escribimos en el div
    div.innerText = descripcion;
    div.innerText += resultado;
}