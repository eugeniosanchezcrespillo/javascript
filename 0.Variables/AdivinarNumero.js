//Numero entre 0 y 1. Por ejemplo 0.9
let aleatorio = Math.random()

//Multiplicamos por 101. Por ejemplo 0.9 x 101 = 90.9
aleatorio = aleatorio * 101

//Quitamos decimales con la función Math.floor()
aleatorio = Math.floor(aleatorio)
console.log(aleatorio);

//Se podria haber resumido en una linea --> let numero = Math.floor(Math.random() * 101)

//Creamos variable intentos para contar el numero de intentos que llevamos
let intentos = 0
//Creamos variable numero para asignar el prompt que elige el usuario
let numero = 0

while ((intentos<5)){
  numero = prompt("Adivina el numero del 0 al 100, introduce tu predicción:")
  if (numero == aleatorio){
    alert("Has adivinado el numero es el: "+aleatorio)
    break
    
  }else{
    //aumentamos el numero de intentos
    intentos = intentos +1;
    
    if (numero < aleatorio)
      alert("El numero introducido es menor que el aleatorio")
    else if (numero > aleatorio)
      alert("El numero introducido es mayor que el aleatorio")
    
  }
}

if (intentos==5)
  alert("Has perdido!")
