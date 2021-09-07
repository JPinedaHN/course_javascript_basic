//Declarativas

function miFuncion(){
  return 1;
}

//llamamos la funcion, es decir que ejecuta el codigo dentro de ella

//asi se manda a llamar una funcion
miFuncion();

//Expresión
var miFuncion2 = function(){
  return 2;
}

miFuncion2();

//función con parámetros

function sum(a, b){
  console.log(a+b) //Console.log() Imprime en la consola del navegador
}

sum(1,2);

//Otro ejemplo
function saludarEstudiante(estudiante){
  console.log(`Hola ${estudiante}`); //Esto es una plantilla de texto
}

saludarEstudiante("Pedro") // Imprime: Hola Pedro


//una función que retorna un valor

function suma2(a, b) {
  var sum = a + b; // asignamos el valor de la suma de a + b a sum
  return sum; // retornamos el valor que contiene sum
}

suma2(10, 10); //obtenemos el valor de 10 + 10 que es 20

