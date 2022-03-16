const unicos = function(arreglo){
    newArray = [];
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] !== arreglo[i+1]){
            newArray.push(arreglo[i]);
        }
    }
    return newArray;
}

arreglo=[0,1,1,2,2,3,4,5,5,6,7,7,8,9,9,9];

console.log(arreglo.length) // 16 es la longitud
console.log(arreglo.length -1 )   //
console.log(unicos(arreglo))

/*
length siempre sera mas grande que el index por que indice comienza en 0 la longitud 1
el indice del ultimo elemento de el arreglo sera la longitud, restada en 1

*/ 