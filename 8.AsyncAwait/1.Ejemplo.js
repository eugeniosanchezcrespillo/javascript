//Async await
//
const url = "https://www.imbd.com"

async function getMovies () {
  try {
	const data = await fetch(url);
  	const result = await data.json();
  	console.log(result)
  }catch(error){
     console.log(error)
  }	  

}
