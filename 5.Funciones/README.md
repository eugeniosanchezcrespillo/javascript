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

