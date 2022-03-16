
//efecto hoisting variables
console.log(nombre);
var nombre = "Walter"
console.log(nombre);


function saludarA(apellido) {
    console.log(saludo);
    var saludo = 'Hola '+ apellido;
    console.log(saludo);
}

saludarA('Jaramillo')

//efecto hosting functins

saludar('walter');  // el hosting es lo que nos permite ejecuatar una funciona antes de declarala la función se hace arriba
function saludar(nombre){
    console.log('Hola '+ nombre);
}

////////////////////////////////////////////////////////////////////////////////////////////////

//var saludarb;  se eleva su declaración
saludarb('Alan');  
var saludarb = function saludarb(nombre){       //cuando es función de expresión
    console.log('Hola '+ nombre);
}