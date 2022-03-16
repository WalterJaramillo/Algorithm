var isPalindrome = function(x) {    //22
    const isNegative = x< 0 ? true : false;
      
    if (isNegative){
        return false;
    }
      
    const temporal = x;
    let reversed = 0;
      
    while(x>0){
        reversed = (reversed * 10) + (x%10);  // esta operación toma lo que resta del numero si x es mayor si no deja el mismo numero si es menor a 10
        x = parseInt(x/10);      // esta operación toma el numero de la izquierda, genera un decimal y excluye el de la derecha
    }
      
    return reversed == temporal;
  };

  console.log(isPalindrome(11));




  /*
  1 crear la función isPalindrome
    crear la constante isNegative ternaria
    crear el condicional  que retorna false si se cumple

    crear la variable temporal y la reversed que seran las que se comparar al final

    crear el ciclo mientras
        reversed * 10  + x%10    saca el numero de la derecha  ej: 1234567 toma el 7 el que sobra o se puede ver como el ultimo
        reversed = parasear el numero x/10, para sarca el numero de la izquerda y excluir el de la derecha

    retornar reversed si esl igual a temporarl


    testCase

  */
