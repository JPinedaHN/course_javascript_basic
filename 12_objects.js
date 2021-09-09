//declaración
var objeto = {};

//Los objetos tiene una palabra clave y un valor, siempre en par

var carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  annio: 2020
}

//puedo acceder a los valores de las palabras claves asi
carro.annio; //que es 2020
carro.marca; // Toyota
carro.modelo; // Corolla

//Los objetos pueden tener propiedades como funciones
var carro = {
  marca: 'Toyota',
  modelo:'Corolla',
  annio: 2020,
  detalleAuto: function(){
    console.log(`Auto: ${this.marca} ${this.modelo} ${this.annio}`);
  }
}

//y puedo ejecutarla:
carro.detalleAuto();

//El this para aclarar, hace referencia al mismo objeto donde esta ejecutandose la linea


//Funcion Constructora
//Como el constructor de otros lenguajes,creamos una función que cree las propiedades
//del objeto asi esto resulta en un objeto con propiedades definidas
function auto(marca, modelo, annio){
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

//esto genera una instancia de la función constructura, que es un objeto a partir del objeto inicial
var autoNuevo = new auto("Mazda","3",2021);
var autoNuevo2 = new auto("Tesla","Model 3", 2021);
var autoNuevo3 = new auto("Toyota","Corolla", 2015);