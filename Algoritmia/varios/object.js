const objeto = {1:32,2:34}
console.log(objeto[2]);
//////////////////////////

const persona = {primer:'walter'}
console.log(persona.primer);
//////////////////////////
const vivian = {
    nombre:'vivian',
    apellido:'Gonzales',
    edad:24
}
console.log(vivian.nombre);

/////////////////////////

const walter = {};
walter.name = "Walter"
walter.last = "Jaramillo"
walter.age = 28

console.log(walter.name);
///////////////////////

const elsa = new Object()
elsa.name = "Elsa"
elsa.last = "Cubillos"
elsa.age = 53
console.log(elsa.age);
////////////////////////
const camilo = {
    nombre: "camilo",
    apellido: "sarmiento",
    age: 45
}
let txt = " ";

for(let i in camilo){
    txt += camilo[i]+ " ";
}

console.log(txt)

///////////////////////////////