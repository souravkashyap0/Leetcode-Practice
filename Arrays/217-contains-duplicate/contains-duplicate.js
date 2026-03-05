/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let containsDuplicateSet =  new Set();
    for(let i=0;i<nums.length;i++){
        if(containsDuplicateSet.has(nums[i])){
            return true;
        }
        containsDuplicateSet.add(nums[i]);
    }
     return false;

};