/**
 * Reverse Integer Problem - LeetCode #7
 * 
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer 
 * range [-2^31, 2^31 - 1], then return 0.
 * 
 * @param {number} x
 * @return {number}
 */

// Solution 1: String manipulation approach
function reverseString(x) {
    const sign = x < 0 ? -1 : 1;
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
    
    // Check for 32-bit integer overflow
    const INT_MAX = Math.pow(2, 31) - 1;  // 2147483647
    const INT_MIN = -Math.pow(2, 31);     // -2147483648
    
    return (reversed < INT_MIN || reversed > INT_MAX) ? 0 : reversed;
}

// Solution 2: Mathematical approach (no string conversion)
function reverse(x) {
    const INT_MAX = Math.pow(2, 31) - 1;  // 2147483647
    const INT_MIN = -Math.pow(2, 31);     // -2147483648
    
    let result = 0;
    
    while (x !== 0) {
        const digit = x % 10;
        x = Math.trunc(x / 10);  // Remove last digit
        
        // Check for overflow before multiplying
        if (result > Math.trunc(INT_MAX / 10) || 
            (result === Math.trunc(INT_MAX / 10) && digit > 7)) {
            return 0;
        }
        if (result < Math.trunc(INT_MIN / 10) || 
            (result === Math.trunc(INT_MIN / 10) && digit < -8)) {
            return 0;
        }
        
        result = result * 10 + digit;
    }
    
    return result;
}

// Test cases
console.log("=== Reverse Integer Problem Tests ===");

const testCases = [
    { input: 123, expected: 321 },
    { input: -123, expected: -321 },
    { input: 120, expected: 21 },
    { input: 0, expected: 0 },
    { input: 1534236469, expected: 0 },  // Overflow case
    { input: -2147483648, expected: 0 }  // Overflow case
];

testCases.forEach((test, index) => {
    const resultMath = reverse(test.input);
    const resultString = reverseString(test.input);
    const passed = resultMath === test.expected && resultString === test.expected;
    
    console.log(`Test ${index + 1}: ${passed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`  Input: ${test.input}`);
    console.log(`  Expected: ${test.expected}`);
    console.log(`  Math approach: ${resultMath}`);
    console.log(`  String approach: ${resultString}`);
    console.log('');
});

// Performance comparison
console.log("=== Performance Notes ===");
console.log("Mathematical approach:");
console.log("  ✅ No string conversion overhead");
console.log("  ✅ More memory efficient");
console.log("  ✅ Handles overflow check during computation");
console.log("");
console.log("String approach:");
console.log("  ⚠️  String conversion overhead");
console.log("  ✅ Easier to understand and implement");
console.log("  ⚠️  Overflow check after computation");

// Export for testing
if (typeof module !== 'undefined') {
    module.exports = { reverse, reverseString };
}
