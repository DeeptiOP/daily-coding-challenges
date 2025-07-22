"""
Two Sum Problem - LeetCode #1

Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

Time Complexity: O(n)
Space Complexity: O(n)
"""

from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        """
        Hash map approach - optimal solution
        """
        num_map = {}  # value -> index
        
        for i, num in enumerate(nums):
            complement = target - num
            
            if complement in num_map:
                return [num_map[complement], i]
            
            num_map[num] = i
        
        return []
    
    def twoSumBruteForce(self, nums: List[int], target: int) -> List[int]:
        """
        Brute force approach - O(n²) solution
        """
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
        
        return []


def test_solutions():
    """Test both solutions with various test cases"""
    solution = Solution()
    
    test_cases = [
        ([2, 7, 11, 15], 9, [0, 1]),
        ([3, 2, 4], 6, [1, 2]),
        ([3, 3], 6, [0, 1]),
        ([1, 2, 3, 4, 5], 9, [3, 4]),
        ([-1, -2, -3, -4, -5], -8, [2, 4])
    ]
    
    print("=== Two Sum Problem Tests (Python) ===\n")
    
    for i, (nums, target, expected) in enumerate(test_cases, 1):
        # Test optimal solution
        result_optimal = solution.twoSum(nums, target)
        passed_optimal = result_optimal == expected
        
        # Test brute force solution  
        result_brute = solution.twoSumBruteForce(nums, target)
        passed_brute = result_brute == expected
        
        print(f"Test {i}:")
        print(f"  Input: nums={nums}, target={target}")
        print(f"  Expected: {expected}")
        print(f"  Optimal:    {result_optimal} {'✅' if passed_optimal else '❌'}")
        print(f"  Brute Force: {result_brute} {'✅' if passed_brute else '❌'}")
        print()


if __name__ == "__main__":
    test_solutions()
    
    # Demonstrate usage
    solution = Solution()
    nums = [2, 7, 11, 15]
    target = 9
    result = solution.twoSum(nums, target)
    print(f"twoSum({nums}, {target}) = {result}")
