const reverse = function(x){
    let result = 0;
    let last_digit = 0;

    while(x){
        last_digit = x % 10
        result = (result * 10) + last_digit
        x = x / 10 | 0
    }
    return result
}
console.log(reverse(12));