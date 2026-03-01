/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let twoSumMap = new Map();
    for(let i=0;i<nums.length;i++){
    let match = target - nums[i];
    if(twoSumMap.has(match)){
        return [twoSumMap.get(match),i]
    }
     twoSumMap.set(nums[i],i);
    }
};