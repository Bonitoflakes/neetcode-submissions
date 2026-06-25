class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numsMap = new Map();
        let hasDuplicate = false;
        nums.forEach((val, idx) => {
            if (numsMap.has(val)) {
                hasDuplicate = true;
            } else {
                numsMap.set(val, 0);
            }
        });
        return hasDuplicate;
    }
}
