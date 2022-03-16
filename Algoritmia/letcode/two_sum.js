var twoSum = function(nums,target){
    indexes = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                indexes.push(i);
                indexes.push(j);
            }
        }
    }
    return indexes;
};

nums = [4,6,7,5];
target = 12;
console.log(twoSum(nums,target));

//con el for externo nos aseguramos de visitar cada casilla