/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let duplicateSet =  new Set();
    for(let i=0;i<nums.length;i++){
        if(duplicateSet.has(nums[i])){
            return true;
        }
        duplicateSet.add(nums[i]);
    }
    return false;
};