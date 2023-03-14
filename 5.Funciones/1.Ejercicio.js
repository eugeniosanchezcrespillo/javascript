//Donat un array de pel·lícules nominades als Óscars
//
//b) Crea una funció que tengui un paràmetre array d'entrada i 
//   retorni un array nou idèntic
//
//   Executa aquesta funció amb l'array oscars i guarda el resultat
//   en un nou array i imprimeix-lo per pantalla


const oscars=['Everything Everywhere All at Once','Top Gun','Ellas hablan']

function copia_array(entrada){
  //Cream array nou salida
  let salida = []
  for (let i = 0; i < entrada.length; i++)
    salida[i]=entrada[i]
 
  return salida
}

let nous_oscars = []
nous_oscars = copia_array(oscars)
console.log(nous_oscars)

