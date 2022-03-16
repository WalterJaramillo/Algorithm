const searchInsert = function(nums,target){
    for(var i=0;i<nums.length;i++){
        if(nums[i] >= target){
            return i;
        }
    }
    return nums.length;
}


console.log(searchInsert([1,3,5,6],2));





//https://rishabh1403.com/posts/coding/leetcode/2020/03/leetcode-search-insert-position