/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let filterString = ""
    for(let i = 0; i < s.length; i++){           //garantiza recorrer toda la cadena, ira por cada indice empezando en 0
        if(isValidChar(s[i])){
            filterString += s[i]
        }
    }
    
    for(let i = 0, j = filterString.length -1; i <= j; i++, j--){
        if(filterString[i].toLowerCase() !== filterString[j].toLowerCase())
            return false
    }
    return true
};

function isValidChar(char){
    let ascii = char.charCodeAt(0)
    if(ascii > 47 && ascii < 58)
        return true
    if(ascii > 64 && ascii < 91)
        return true
    if(ascii > 96 && ascii < 123)
        return true
    return false
}

//test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); 


/*
1 crear function isValidate(cadena_a_evaluar)
   - crear arreglo que tome datos nuevos
	 -crear for que recorra la cadena para poner los datos validos
		- if(isvalid(char))
		  - arreglonuevo += 
		- else 

	 - crear for que recorra el arreglo modificado de izquierda a derecha y viceversqa
	 	if que pregunte si hay diferencia en los extremos

	 	 verdad   ! ==
	 	 	return falso
	 	 falso
	 	    return true

2 crear function isvalidChar(char){
	
}

*/


