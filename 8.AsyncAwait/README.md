# Async

**Promise**: fulfilled / rejected / pending

const p = new Promise ( (resolve, reject) => {
  
  let condicion = true
 
  if (condicion) resolve("OK")
  else reject("NOT OK")

})

p.then( resultado => console.log(resultado) )
p.catch( error => console.log(error) )

**Promise.all([])**: varias funciones al mismo tiempo


**Try / Catch**: El codigo se prueba y en caso de error no detiene la ejecución

primera ejecución
try / catch
sigue ejecución

**Async / Await**: Async función padre / Await espera la funcion hija

async function descargarPadre(){
  try {
        const descargado = await descargarHijo();
        //solo ejecuto si ok
  } catch (error) {
       //si error descargarHijo()
  }
}



