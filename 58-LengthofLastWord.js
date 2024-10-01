/**
 * @param {string} s
 * @return {number}
 * 
 * 
 * This solution for the "Length of Last Word" problem
 *  trims the input string, finds the last space, 
 * and then calculates the length of the last word
 *  based on the position of that space.
 * 
 * 
 */
const lengthOfLastWord = function(s) {
    // Trim the string to remove leading and trailing spaces
    s = s.trim();
    
    // Find the index of the last space
    const lastSpaceIndex = s.lastIndexOf(' ');
    
    // If there's no space, the entire string is the last word
    if (lastSpaceIndex === -1) {
        return s.length;
    }
    
    // Return the length of the substring after the last space
    return s.length - lastSpaceIndex - 1;
};

// Example usage
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4