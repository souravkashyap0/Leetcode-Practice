/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sumMap = new Map();
    for(let i=0;i<nums.length;i++){
        let difference = target - nums[i];
        if(sumMap.has(difference)){
            return  [sumMap.get(difference),i];
        }
        sumMap.set(nums[i],i);
    }
};