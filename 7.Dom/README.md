# DOM

**getElementByClassName**: retorna todas las clases

HTML class="header"

JS let header = document.getElementByClassName('header')


**getElementById**: retorna el primer resultado que encuentra

HTML id="peliculas"

JS let pelis = document.getElementById('peliculas')

**querySelector**: retorna el primer resultado que encuentra

HTML class="movie"

JS let movie = document.querySelector('.movie')

**querySelectorAll**: retorna todos los elementos

HTML id="actress"

JS let actress = document.querySelectorAll('#actress')

**Modificar HTML desde JS**:

HTML <h1>Hola</h1>

JS const header = document.querySelector('h1');

.innerText   //si en CSS no está visible no lo encuentra

.textContent //obtiene el texto Hola

.innerHTML   //obtiene <h1>Hola</h1>

JS document.querySelector('h1').textContent = 'Adios'

