/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let  twoSumMap = new Map();
    for(let i =0;i<nums.length;i++){
        let diff = target - nums[i];
        if(twoSumMap.has(diff)){
            return [twoSumMap.get(diff),i];
        }
        twoSumMap.set(nums[i],i);
    }
    
};