/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * 
 * This solution for the "Valid Anagram" problem uses a 
 * frequency map to count the occurrences of each character 
 * in the first string and then 
 * compares it with the second string.
 */
const isAnagram = function(s, t) {
    // If the lengths are different, they can't be anagrams
    if (s.length !== t.length) return false;
    
    // Create a frequency map for characters in s
    const charFrequency = {};
    
    // Count the frequency of each character in s
    for (let char of s) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
    
    // Decrement the frequency for each character in t
    for (let char of t) {
        if (!charFrequency[char]) return false;
        charFrequency[char]--;
    }
    
    // If all frequencies are zero, the strings are anagrams
    return Object.values(charFrequency).every(count => count === 0);
};

// Example usage
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false