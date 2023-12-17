var twoSum = function(nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (obj.hasOwnProperty(diff)) {
            return [obj[diff], i];
        }
        obj[nums[i]] = i;
    }
    return [];
};

let nums = [2, 7, 11, 15], target = 9;
console.log(twoSum(nums, target));
