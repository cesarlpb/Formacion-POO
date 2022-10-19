// JS
// Escribimos mensaje en consola
console.log("Hola desde script.js")
/**********************************/

// document.getElementById -> innerHTML y innerText

// Encontramos elemento con id "p1" y cambiamos el texto
document.getElementById("p1").innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint esse, culpa illum quasi officia quas magni molestias aspernatur porro."
// Encontramos elemento con id "p2" y cambiamos el HTML interno
document.getElementById("p2").innerHTML = "<strong>Texto en negritas: </strong> Más texto"

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

/**********************************/
console.log("Final del script")