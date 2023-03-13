let arrayinicial = ["Manuel", "Ana", "Ana", "Juan", "Alex", "Juan", "Irene", "Maria"]


function eliminarepetidos(arreglo){
    //creo array resultado
    let resultado = []
    //recorro array
    for (let i=0; i<arreglo.length; i++){
      //True/false si el array resultado no (!) incluye la posición del array arreglo[i] hacemos un push para agregarlo
      if (!resultado.includes(arreglo[i]))
          resultado.push(arreglo[i])
    }
    //retornamos el array resultado
    return resultado
}

//creo variable y asigno la función creada
let arrayfinal = eliminarepetidos(arrayinicial)


//imprimimos
console.log(arrayinicial)
console.log(arrayfinal)
