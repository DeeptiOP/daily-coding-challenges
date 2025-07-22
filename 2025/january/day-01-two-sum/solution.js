/**
 * Two Sum Problem - LeetCode #1
 * 
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Solution 1: Brute Force - O(n²) time, O(1) space
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// Solution 2: Hash Map - O(n) time, O(n) space
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}

// Test cases
console.log("=== Two Sum Problem Tests ===");

const testCases = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
];

testCases.forEach((test, index) => {
    const result = twoSum(test.nums, test.target);
    const passed = JSON.stringify(result) === JSON.stringify(test.expected);
    
    console.log(`Test ${index + 1}: ${passed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`  Input: nums=[${test.nums}], target=${test.target}`);
    console.log(`  Expected: [${test.expected}]`);
    console.log(`  Got: [${result}]`);
    console.log('');
});

// Export for testing
if (typeof module !== 'undefined') {
    module.exports = { twoSum, twoSumBruteForce };
}
