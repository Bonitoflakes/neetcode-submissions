class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        const sHashMap = new Map();
        const tHashMap = new Map();

        s.split("").forEach((val) => {
            if (sHashMap.has(val)) {
                const existingCount = sHashMap.get(val);
                sHashMap.set(val, existingCount + 1);
            } else {
                sHashMap.set(val, 1);
            }
        });

        t.split("").forEach((val) => {
            if (tHashMap.has(val)) {
                const existingCount = tHashMap.get(val);
                tHashMap.set(val, existingCount + 1);
            } else {
                tHashMap.set(val, 1);
            }
        });

        for (const [key, value] of sHashMap) {
            if (tHashMap.get(key) !== value) return false;
        }

        return true
    }
}
