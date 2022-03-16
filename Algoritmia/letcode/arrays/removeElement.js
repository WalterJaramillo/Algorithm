var removeElement = function(nums,val){
    for(var i=0;i<nums.length;i++){
        if(nums[i] === val){
            nums.splice(i,1);
            i--;
        }
    }
    return nums
};

console.log(removeElement([2,1,2,1],2))

