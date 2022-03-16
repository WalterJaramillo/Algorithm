//https://rishabh1403.com/posts/coding/leetcode/2019/12/leetcode-solution-of-palindrome-number-in-javascript

var isPolindrome = function(x){
    return x == x.toString().split('').reverse().join('');
};

console.log(isPolindrome(22));

/* 
toString() para convertir el número en una cadena
split() para convertir la cadena en una matriz de caracteres
reverse() para invertir la matriz
join() para unir la matriz de nuevo a una cadena
*/ 