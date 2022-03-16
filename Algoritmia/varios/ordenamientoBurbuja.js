

function Burbuja() {
    var lista = [5, 4];   //longitud 2
 //              0  1    //indice 0 al 1
    var n, j, i, aux;
    n = lista.length;     //2               
    console.log(lista); // Mostramos, por consola, la lista desordenada
    // Algoritmo de burbuja
    for (i = 1; i < n; i++) {             //visita cada casilla  
        for (j = 0; j < (n - i); j++) {      // (el ultimo elemento) si se pone n.length seria dar una vuelta innecesaria
            if (lista[j] > lista[j + 1]) {
                aux = lista[j];              //guarda el numero mayor
                lista[j] = lista[j + 1];     //pasa el menor a la izquierda
                lista[j + 1] = aux;          //pasa el mayor a la derecha
            }
        }
    }

    console.log(lista); // Mostramos, por consola, la lista ya ordenada
};

console.log(Burbuja());


/*var burbuja = function(){
    var lista = [22,7,6,9]
    var i,j,aux, n
    n = lista.length

    for(i = 1; i < lista.length; i ++){
        for(j = 0; j < lista.length - i; j++){
            if(lista[j] > lista[j + 1]){   
                aux = lista[j]
                lista[j] = lista[j + 1]
                lista[j + 1] = aux
            }   
        }
    }
    console.log(lista);
}
console.log(burbuja());*/