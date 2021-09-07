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

compare("TIJERA", "PAPEL");
compare("PAPEL", "PIEDRA");
compare("TIJERA", "PIEDRA");
compare("PIEDRA", "PAPEL");
compare("PIEDRA", "PIEDRA");
