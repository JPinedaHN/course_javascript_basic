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


