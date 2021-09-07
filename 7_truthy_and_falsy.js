//Ejemplos en los que Boolean devuelve Falso:
Boolean(); //False
Boolean(0); //False
Boolean(null); //False
Boolean(NaN); //False
Boolean(undefined); //False
Boolean(false); //False
Boolean(""); //False

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también
Boolean(true); 