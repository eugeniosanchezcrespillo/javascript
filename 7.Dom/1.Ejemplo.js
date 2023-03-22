//Cambia el texto dentro del H1 del HTML asociado

let texto = document.body.querySelector('h1').textContent;

console.log(texto)
let cambia = prompt("Cambia el texto")

document.body.querySelector('h1').textContent = cambia

