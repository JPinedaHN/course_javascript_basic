var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante){
  console.log(`Hola, ${estudiante}`);
}

//Ciclo FOR
//Declara una varible de control, evalua condición, suma variable de control
for(var i=0; i<estudiantes.length; i++){
  saludarEstudiante(estudiantes[i]);
}

//Ciclo FOR OF
//declara variable como elemento individual de una lista
for(var estudiante of estudiantes){
  saludarEstudiante(estudiante);
}

//While
//Mientras se cumpla la condición repite el ciclo
while(estudiantes.length > 0){
  saludarEstudiante(estudiantes.shift()); //Saca el primero de la lista y lo imprime
}
