class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const map = new Map();

        s.split("").forEach((letter) => {
            const val = map.get(letter);
            val ? map.set(letter, val + 1) : map.set(letter, 1);
        });

        t.split("").forEach((letter) => {
            const val = map.get(letter);
            val ? map.set(letter, val - 1) : map.set(letter, 1);
        });

        return Array.from(map.values()).every((count) => count === 0);
    }
}
