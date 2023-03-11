//Creamos el objeto people
let people = {
  Maria: 30,
  Ana: 15,
  Luis: 10,
  Pepe: 50,
  Manuel: 60,
  Teresa: 7,
  Daniel: 45,
  Irene: 33,
  Alex: 8
}

//Funcion externa
function imprimepeople(name, age){
  if (age>17)
    console.log(`${name} es mayor de edad`)
  else
    console.log(`${name} es menor de edad`)
}

//Bucle
for (let nombre in people){
  imprimepeople(nombre,people[nombre])
}
