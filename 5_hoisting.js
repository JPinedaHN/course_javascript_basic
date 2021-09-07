var miNombre; //Declaración

miNombre = "Pedro"; // Inicialización

//Estos son los dos pasos de las variables

//que pasaría si primero uso la variable y después la declaro?

console.log(miNombre);

var miNombre = "Pedro";

//Este proceso retorna un UNDEFINED, no retorna un Error
//Esto pasa porque la variable se declara primero pero no le asigna valor, le asigna un undefined

//este sería su equivalente cuando el JIT Compiler lo revisa

var miNombre = undefined;

console.log(miNombre);

miNombre = "Pedro";

//El Hoisting también pasa con las funciones

hey();

function hey(){
  console.log('Esto es la funcion');
}
//Esto funciona sin errores porque el hoisting hace que la declaración de la función esté al inicio
//y cuando en la primera linea lo mandamos a llamar, este ya sabe que la función existe
