/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let nearbyDuplicateSet = new Set();
    for(let i=0;i<nums.length;++i){
        if(nearbyDuplicateSet.has(nums[i])){
            return true;
        }
        nearbyDuplicateSet.add(nums[i]);
        if(nearbyDuplicateSet.size>k){
            nearbyDuplicateSet.delete(nums[i-k]);
        }
    }
    return false;
};