class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (!Array.isArray(nums)) return [-1, -1];
        if (typeof target !== "number") return [-1, -1];

        const lookupTable = new Map();
        let difference;
        let alreadyExists;
        for (let i = 0; i < nums.length; i++) {
            let value = nums[i];
            difference = target - value;
            alreadyExists = lookupTable.get(difference);
            if (alreadyExists !== undefined) {
                return [alreadyExists, i];
            } else {
                lookupTable.set(value, i);
            }
        }
    }
}
