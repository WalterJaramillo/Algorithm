var findFinalValue = function(nums,original){
    for (let i = 0; i < nums.length; i++){
        if(original === nums[i]){
            original *= 2;
            i = -1
        }
    }

    return original;
}

console.log(findFinalValue([8,19,4,2,15,3],2));