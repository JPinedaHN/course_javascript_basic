var cars = [];
var flag = 1;

function Car(brand, model, year){
  this.brand = brand;
  this.model = model;
  this.year = year;
}


while( flag ){
  var brand = prompt('Brand:');
  var model = prompt('Model:');
  var year = prompt('Year:');

  cars.push(new Car(brand, model, year));

  flag = Number(prompt("Do you want to continue?: 0 NO / 1 YES"));
}

console.log("Cars:", cars);
