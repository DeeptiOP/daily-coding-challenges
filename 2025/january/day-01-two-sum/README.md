# Day 1: Two Sum Problem

**Date**: January 23, 2025  
**Source**: [LeetCode Problem #1](https://leetcode.com/problems/two-sum/)  
**Difficulty**: Easy  
**Topics**: Array, Hash Table

## 📋 Problem Description

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## 💡 Examples

**Example 1:**
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

## 🎯 Approach

### Solution 1: Brute Force
- **Time Complexity**: O(n²)
- **Space Complexity**: O(1)
- Check every pair of numbers to see if they sum to target

### Solution 2: Hash Map (Optimal)
- **Time Complexity**: O(n)
- **Space Complexity**: O(n)
- Use hash map to store complement values
- Single pass through array

## 🧠 Key Insights

1. **Hash Map Pattern**: This problem introduces the classic "complement" pattern using hash maps
2. **Trade-off**: We trade space for time complexity
3. **One-pass Solution**: We can solve in a single iteration by checking if complement exists

## 🔍 What I Learned

- Hash maps are powerful for reducing time complexity in array problems
- The complement approach: `complement = target - current_number`
- JavaScript `Map` vs `Object` for hash table operations

## 📊 Test Results

```
Test 1: ✅ PASS
  Input: nums=[2,7,11,15], target=9
  Expected: [0,1]
  Got: [0,1]

Test 2: ✅ PASS  
  Input: nums=[3,2,4], target=6
  Expected: [1,2]
  Got: [1,2]

Test 3: ✅ PASS
  Input: nums=[3,3], target=6
  Expected: [0,1] 
  Got: [0,1]
```

## 🚀 Next Steps

Tomorrow I'll tackle a problem involving:
- Linked Lists or
- String manipulation or  
- Binary Search

---
*"Every expert was once a beginner. Every pro was once an amateur. Every icon was once an unknown."*
