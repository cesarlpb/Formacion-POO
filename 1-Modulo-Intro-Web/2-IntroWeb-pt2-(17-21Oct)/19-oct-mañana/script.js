// JS
// Escribimos mensaje en consola
console.log("Hola desde script.js")
/**********************************/

// document.getElementById -> innerHTML y innerText

// Encontramos elemento con id "p1" y cambiamos el texto
document.getElementById("p1").innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint esse, culpa illum quasi officia quas magni molestias aspernatur porro."
// Encontramos elemento con id "p2" y cambiamos el HTML interno
document.getElementById("p2").innerHTML = "<strong>Texto en negritas: </strong> Más texto"

document.getElementById("p3").innerText = "asdf"

// Ejemplo con un div
document.getElementById("div").innerHTML = "<p style='border: 1px solid black; width: 50%; margin: 0 auto;'>Esto es un párrafo.</p>"

// document.write()
// Texto
document.write("Hola, desde script.js")
// HTML
document.write("<h1>Heading 1</h1>")
document.write("<hr>")
document.write("<h1>Título 1</h1><h2>Título 2</h2>")
document.write("<hr>")
document.write("<h1>404</h1><p>No hemos encontrado lo que buscabas...</p><p><a href='#'> Volver</a>")
document.write("<hr>")

// window.alert()
alert("Esto es una notificación")

// console.log()
console.log("Esto es un log")
console.info("Esto es info")
console.warn("Es es un warning")
console.error("Esto es un error")

//window.print()

// Declaraciones (statements) en JS

var x = 1; 
var y = 2; 
document.getElementById("suma").innerText = x + y;

document.getElementById("demo").
innerText = `Esto es una declaración en 

más líneas
más líneas

varias líneas sin etiquetas, solo texto.`;

document.getElementById("demo2").
innerHTML = `<p>Esto es una declaración en 

más líneas
más líneas

varias líneas en etiqueta 'p'.</p>`

document.getElementById("demo3").
innerHTML = `<pre>Esto es una declaración en 

más líneas
más líneas

varias líneas dentro de etiqueta 'pre'.</pre>`

// Variables

let _param = 'parámetro'
let param = 'otro parámetro'
let Param = 'otro parámetro mas'
let $param = 'otro más'

console.log(_param)
console.log(param)
console.log(Param)
console.log($param)

// Ejercicio - Crear elementos y modificar valor con resultados
// de operaciones básicas + - * /
let a = 1;
let b = 3;

// Método 1 -> seleccionamos el, asignamos texto a variable text1
// realizamos operación -> asignamos valor a text1
// Asignamos valor a el1.innerText

let el1 = document.getElementById("sum") // <p id="sum"   class="inline">Suma: </p>
let text1 = el1.innerText                // 'Suma:'
text1 = text1 + (a + b)                  // 'Suma:4'
el1.innerText = text1                    // Asignamos valor a el1

// Método 2 -> Usamos una variable para guardar el resultado
let el2 = document.getElementById("resta")  // <p id="resta" class="inline">Resta: </p>
let resultado2 = el2.innerText + (b - a)      // 'Resta:2'
el2.innerText = resultado2

// Método 3 -> Asignamos el resultado directamente en innerText
let el3 = document.getElementById("prod")   // <p id="prod"  class="inline">Producto: </p>
el3.innerText = el3.innerText + (a * b)     // 'Producto:' + 3

// Método 4 -> += operador de sumar y asignar
document.getElementById("divi").innerText += (b / a)

/**********************************/
console.log("Final del script")