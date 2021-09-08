//Para crear un array:
var frutas = []; 

//Para guardar elementos dentro o inicializarlo
var frutas = ["Manzanas","Bananos","Cerezas","Fresa"];

//para acceder a cada uno de los elementos
frutas[0]; //la numeracion inicia en cero y este devuelve el primer elemento

frutas.length; //longitud del array

console.log(frutas[2]); //Imprime "Cerezas"

frutas.push("Limon"); //Agrega uno elementos al final del array

frutas.pop("Limon"); //elimina y regresa el elemento del array

frutas.unshift("Uvas"); //Agrega un elemento al Inicio del array

frutas.shift();// Elimina el primer elemento del array

frutas.indexOf("Cereza"); //Muestra la posicion del elemento que buscamos
