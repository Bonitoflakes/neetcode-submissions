class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (!Array.isArray(nums)) return [-1, -1];
        if (typeof target !== "number") return [-1, -1];

        const length = nums.length;

        for (let j = 0; j < length; j++) {
            for (let m = 0; m < length; m++) {
                if (j === m) continue;
                if (nums[j] + nums[m] === target) {
                    return [j, m];
                }
            }
        }
    }
}
