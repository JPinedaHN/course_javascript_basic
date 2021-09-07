var PIEDRA = "PIEDRA";
var PAPEL = "PAPEL";
var TIJERA = 'TIJERA';

function compare(user, cpu){
  if(user == PIEDRA && cpu == TIJERA){
    console.log(`GANASTE ${user} gana a ${cpu}`);
  } else if(user == PAPEL && cpu == PIEDRA){
    console.log(`GANASTE ${user} gana a ${cpu}`);
  } else if(user == TIJERA && cpu == PAPEL){
    console.log(`GANASTE ${user} gana a ${cpu}`);
  } else if(user == cpu){
    console.log(`${user} empata a ${cpu}, intenta de nuevo`);
  } else {
    console.log(`PERDISTE, ${cpu} GANA a ${user}`);
  }
}

compare("TIJERA", "PAPEL"); // GANASTE TIJERA gana a PAPEL
compare("PAPEL", "PIEDRA"); // GANASTE PAPEL gana a PIEDRA
compare("TIJERA", "PIEDRA"); // PERDISTE, PIEDRA GANA a TIJERA
compare("PIEDRA", "PAPEL"); // PERDISTE, PAPEL GANA a PIEDRA
compare("PIEDRA", "PIEDRA"); // PIEDRA empata a PIEDRA, intenta de nuevo
