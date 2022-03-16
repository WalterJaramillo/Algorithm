const operaciones = function(n1,n2){
    let suma = n1 + n2
    let resta = n1 - n2
    let mult = n1 * n2
    let div = n1 / n2
    let mod = n1 % n2
    console.log('La suma es:'+ suma);
    console.log('La resta es:'+ resta);
    console.log('La multiplicación es:'+ mult);
    console.log('La división es:'+ div);
    console.log('La división es:'+ mod);
}

var n1 = parseInt(prompt("Indique primer numero"))
var n2 = parseInt(prompt("Indique segundo numero"))

console.log(operaciones(n1,n2));