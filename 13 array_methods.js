var articulos = [
  {nombre: "Bici", costo: 3000},
  {nombre: "TV", costo:2500},
  {nombre: "Libro", costo: 320},
  {nombre: "Celular", costo: 10000},
  {nombre: "Laptop", costo: 20000},
  {nombre: "Teclado", costo: 500},
  {nombre: "Audifonos", costo: 1700},
];

//FILTER
var articulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo <= 500;
})

console.log(articulosFiltrados);

//MAP
var nombreArticulos = articulos.map(function(articulo){
  return articulo.nombre;
})

console.log(nombreArticulos);

//FIND
var encuentraArticulo = articulos.find(function(articulo){
  return articulo.nombre === "Laptop";
})

console.log(encuentraArticulo);

//FOREACH
articulos.forEach(function(articulo){
  console.log(articulo.nombre);
})

//SOME, retorna un verdadero o falso
var articulosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 700;
})

console.log(articulosBaratos);