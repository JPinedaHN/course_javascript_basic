/*  Ejemplo del universo, un sistema solar, y un planeta.  */ 


// Scope es igual a, donde buscar por cosas (estás cosas son las variables), el Scope es el alcance que tienen las variables, depende de donde las declaremos y las mandamos llamar si tendremos acceso a ellas o no.

// Tenemos dos tipos de Scope, Scope Global y Scope Local.

// ===============

// Ejemplo de lo que es un Scope Global

var miNombre = "Pedro"; 

function nombre() {
    miNombre = "Juan"; //Se puede acceder a la variable miNombre porque es global
    return miNombre;
}

nombre(); // retorna "Juan"

console.log(miNombre);

// Ejemplo de lo que es un Scope Local, el Scope local pasa al momento de crear una funcion, esto genera un ámbito diferente al global, al cual no se podrá tener acceso desde el ámbito global 

var miNombre = "Pedro"

function nombre() {
    var miApellido = "Picapiedra"; 
    return miNombre + " " + miApellido 
}

nombre();

console.log(miNombre); //Imprime bien miNombre que es "Pedro"
console.log(miApellido); // Obtenemos un error porque miApellido no está definido en el este scope
//sino que fue definido en un scope local dentro de la funcion nombre()


//  Ejemplos de como puede ayuar o crear error el tema del scope. 

// Ejemplo 1, cómo con una funcion podemos cambiar el valor de la variable global
var miNombre = "Pedro"

function nombre(usuario) {
    miNombre = usuario;
    console.log(miNombre); 
}

nombre("Oscar");

console.log(`Hola ${miNombre}, cómo estás?`);


// Ejemplo 2, cómo podemos evitar reescribir el valor de una variable gracias al scope,
var miNombre = "Pedro"

function nombre(usuario) {
    var miNombre = usuario;
    console.log(miNombre); 
}

nombre("Oscar");

console.log(`Hola ${miNombre}, cómo estás?`);

// Ejemplo 3, cómo si creamos un scope local, y mandamos llamar la variable fuera de la funcion, nos puede crear un problema. 

function nombre(usuario) {
    var miNombre = usuario;
    console.log(miNombre); 
}

nombre("Oscar");

console.log(`Hola ${miNombre}, cómo estás?`);