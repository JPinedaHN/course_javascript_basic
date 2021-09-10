//PUSH
//Array iniciak
let numArray = [1,2,3,4];

//function
function newNum(){
  //agrego elementos
  numArray.push(6,7);
  //Reviso el array ahora que tiene los numeros agregados
  console.log(numArray)
}

newNum();


//Otro ejemplo
//Array Inicial
let txtArray = ["Ana","Juan","Diego","Lautaro"];

//function
function addCharacters(){
  //agrego elementos
  txtArray.push("Chris","Maria");
  //Revisamos el nuevo array que tiene los numeros agregados
  console.log(txtArray);
}

addCharacters();

//SHIFT
let array = [1,2,3,4];
console.log(array);

let shifArray = array.shift();
console.log(array);

//POP
ley array = [1,2,3,4,5];
console.log(array);

let popArray = array.pop();
console.log(array);
console.log(popArray);
