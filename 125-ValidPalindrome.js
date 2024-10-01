/**
 * @param {string} s
 * @return {boolean}
 * 
 * This solution for the "Valid Palindrome" problem 
 * first preprocesses the string by converting it to lowercase 
 * and removing non-alphanumeric characters. 
 * It then uses two pointers to compare characters from 
 * both ends of the string.
 * 
 * 
 * 
 */
const isPalindrome = function(s) {
    // Convert to lowercase and remove non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Use two pointers to compare characters from both ends
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
};

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false