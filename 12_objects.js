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
