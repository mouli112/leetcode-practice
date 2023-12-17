var minOperations = function (nums) {
    var count = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            count += nums[i - 1] - nums[i] + 1;
            nums[i] = nums[i - 1] + 1;
        }
    }
    return count;
}
let nums = [1,1,1];
minOperations(nums);