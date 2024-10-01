/**
 * @param {string} s
 * @return {string}
 * 
 * This solution for the "Reverse Vowels of a String" problem 
 * uses a two-pointer approach similar to the "Reverse String" problem, 
 * but only swaps characters that are vowels.
 */
const reverseVowels = function(s) {
    // Convert string to array for easy manipulation
    const arr = s.split('');
    
    // Define a set of vowels (both lowercase and uppercase)
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
    // Use two pointers to find and swap vowels
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Move left pointer until it finds a vowel
        while (left < right && !vowels.has(arr[left])) {
            left++;
        }
        
        // Move right pointer until it finds a vowel
        while (left < right && !vowels.has(arr[right])) {
            right--;
        }
        
        // Swap the vowels
        [arr[left], arr[right]] = [arr[right], arr[left]];
        
        left++;
        right--;
    }
    
    // Convert array back to string and return
    return arr.join('');
};

// Example usage
console.log(reverseVowels("hello")); // Output: "holle"
console.log(reverseVowels("leetcode")); // Output: "leotcede"