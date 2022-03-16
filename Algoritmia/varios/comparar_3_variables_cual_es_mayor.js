var compararNumeros = function(a,b,c){
    if(a>b){
        if(a>c){
            console.log('a es mayor que b y c');
        }else{
            console.log('c es mayor que b y a');
        }
    }else if(b > c){
        console.log('b es mayor de a y c');
    }else{
        console.log('c es mayor de a y b');
    }
};
console.log(compararNumeros(4,5,3));