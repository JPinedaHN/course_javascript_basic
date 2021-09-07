var a = 4 + "7"; // "47"

typeof(a); //Esto es "string"

//Lo que hace JS es interpretar que estamos tratando de CONCATENAR un numero con un string
//por el simbolo "+" y entonces hace que el resultado sea un STRING con valor "47"
//Esto es coerción implícita


var b = 4 * "7"; // 28

typeof(b); // Esto es "number"

//también es una coerción implicita
//JS supone que al usar el "*" intentamos hacer una multiplicación y convierte a number 
//la cadena "7" dejando como resultado 4 de tipo number y 7 de tipo number en multiplicación

/*******************************************/

var a = 200;
var b = String(a); //Convertimos el numero a texto de forma explícita

typeof(b); // Esto es "string"

var c = Number(b); //Convertimos el texto a numero

typeof(c); // Tipo "number"

//Si la conversión a number da error porque no es un numero resulta en NaN, "No a Number"
