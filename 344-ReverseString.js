/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 
 * This solution for the "Reverse String"
 *  problem uses a two-pointer approach to swap characters in-place, 
 * effectively reversing the string.
 * 
 */
const reverseString = function(s) {
    // Use two pointers to swap characters
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Swap characters at left and right pointers
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};

// Example usage
let s = ["h","e","l","l","o"];
reverseString(s);
console.log(s); // Output: ["o","l","l","e","h"]