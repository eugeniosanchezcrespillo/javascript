//Dado un array de peliculas realiza los siguientes ejercicios
//de la forma más eficiente posible (utiliza map, filter y reduce)

const peliculas = [
	{
		titulo: "El club de la lucha",
		year: 1999 ,
		actores: ["Brad Pit","Edward Norton"],
		oscars: 0,
		presupuesto: 1000, 
	},
	{
		titulo: "Matrix",
		year: 1999,
		actores: ["Keanu Reeves","Laurence Fishburne"],
		oscars: 4,
		presupuesto: 6000, 
	},
	{
		titulo: "Origen",
		year: 2010,
		actores: ["Leonardo Di Caprio",""],
		oscars: 4,
		presupuesto: 60, 
	},
	{
		titulo: "Forrest Gump",
		year: 1994,
		actores: ["Tom Hanks","Rebecca Williams"],
		oscars: 6,
		presupuesto: 10, 
	},
	{
		titulo: "The Blair Witch Project",
		year: 1999,
		actores: ["Heather Donahue","Joshua Leonard"],
		oscars: 0,
		presupuesto: 5, 
	},

];

//a) Obten un array de peliculas con los campos titulo y año que al menos tengan 1 oscar

//b) Obten un array de peliculas con todos los campos que tengan un presupuesto de al menos 100M de dolars

//c) Calcula el numero total de oscars de todo el array de peliculas y muestra el resultado por pantalla

