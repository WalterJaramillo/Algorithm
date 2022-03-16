var removeDuplicates = function(nums){

    
    let j = 0
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[j]){
            j++       //cuenta los numeros diferentes          
            let temp = nums[i]  
            nums[i] = nums[j]     //intercambiamos   [1,2,1] 
            nums[j] = temp   
        }
    }
    return j + 1    //devolvemos 2 de una longitud de dos que en realidad suman 1
}

nums = [1,1,2]
console.log(removeDuplicates(nums))

/*
var removeDuplicates = function(nums){

    //[1,2,1]
    let j = 0
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[j]){
            j++
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
        }
    }
    return j + 1
}

nums = [1,1,2,2,3]
console.log(removeDuplicates(nums)) */



var removeDuplicates = function(nums){

    let j = 0
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[j]){
            j++  
            //console.log(j)                       
            let temp = nums[i]          //2
            nums[i] = nums[j]
            nums[j] = temp
        }
    }
    return j + 1
}

nums = [1,1,2]              // empieza desde cero importante para entender
console.log(removeDuplicates(nums))


 