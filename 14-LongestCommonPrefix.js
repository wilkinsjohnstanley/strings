/**
 * @param {string[]} strs
 * @return {string}
 * 
 * This solution for the "Longest Common Prefix" problem 
 * starts with the first string as the initial prefix 
 * and then iteratively compares it with the other strings, 
 * shortening the prefix as necessary until it finds 
 * the longest common prefix.
 * 
 * 
 */
const longestCommonPrefix = function(strs) {
    // If the input array is empty, return an empty string
    if (strs.length === 0) return "";
    
    // Start with the first string as the prefix
    let prefix = strs[0];
    
    // Iterate through the rest of the strings
    for (let i = 1; i < strs.length; i++) {
        // While the current string doesn't start with the prefix,
        // shorten the prefix by removing the last character
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            // If the prefix becomes empty, there is no common prefix
            if (prefix === "") return "";
        }
    }
    
    return prefix;
};

// Example usage
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"