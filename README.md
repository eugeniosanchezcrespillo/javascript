# Javascript
Curso de javascript

# Arrays (estructura simple para guardar información)
**Crear:**

const dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sábado","Domingo"]

const dias = new Array("Lunes","Martes","Miercoles","Jueves","Viernes","Sábado","Domingo")

**Recorrer e imprimir:**

for (let i = 0; i<dias.length; i++)

  console.log(dias[i])

# Objetos (Estructura compleja para guardar información)
**Crear:**

let persona = {
  nombre: "Eugenio",
  apellido: "Sanchez"
}

**Recorrer e imprimir:**

for (let llave in persona){
  console.log(`${llave}: ${persona[llave]}`)
}

# Funciones sin y con parámetros (Tarea repetitiva que definimos una vez y podemos utilizar varias veces)
**Crear y ejecutar:**

function hola(){
  console.log("Hola");
}

function saluda(nombre){
  console.log("Hola",nombre);
}

hola()
saluda()

# Funciones con retorno
**Crear y ejecutar:**

function suma(a,b){
  return a+b
}

sumado = (a,b) => a+b

let resultado = suma(3,4)

let resultado2 = sumado(3,4)

console.log("El resultado tiene que ser 7:", resultado)

console.log("El resultado también tiene que ser 7:", resultado2)

# Recursos
**Roadmap:** https://roadmap.sh/javascript 

**Editor online:** https://codepen.io/
