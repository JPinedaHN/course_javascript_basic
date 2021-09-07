if(true){ // el if revisa la condición dentro de los paréntesis, si es verdadero hace un bloque de código, sino hace otro bloque de código en la sentencia "else"
  console.log("hola"); // Si la condición es verdadera
}else{
  console.log("Soy falso") // Si la condición es falsa
}

//Una condición que necesita ser verificada para más de dos opciones, se puede anidar con un elseif

var edad = 18;

if(edad === 18){
  console.log("Tu primera votación"); //Si la condicion se cumple hace esto
} else if(edad > 18){
  console.log("Puedes votar de nuevo"); // Si no se cumple la primera condicion, evalua la segunda condicion con el else if y si se cumple hace esto
}else{
  console.log("Aun no puedes votar"); // Si ninguna de las condiciones se cumplió salta a esta opción
}

//El operador ternario, sirve para generar el IF y el Else en una sola linea con la siguiente sintaxis

condition ? true : false ;

//Ejemplo

var numero = 1;

var resultado = numero === 1 ? "Soy un uno" : "No soy un uno";

console.log(resultado); // Imprime "Soy un uno"