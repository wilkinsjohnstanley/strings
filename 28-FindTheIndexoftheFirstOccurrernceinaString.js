/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 
 * This solution for the 
 * "Find the Index of the First Occurrence in a String" 
 * problem iterates through the haystack string 
 * and checks for a substring match with the needle at each position.
 * 
 * 
 * 
 */
// const strStr = function(haystack, needle) {
//     // If the needle is empty, return 0
//     if (needle === "") return 0;
    
//     // Iterate through the haystack
//     for (let i = 0; i <= haystack.length - needle.length; i++) {
//         // Check if the substring starting at index i matches the needle
//         if (haystack.substring(i, i + needle.length) === needle) {
//             return i;
//         }
//     }
    
//     // If no match is found, return -1
//     return -1;
// };
var strStr = function(haystack, needle) {

    first = haystack.indexOf(needle)
  

    
    return first;
   
      }  

// Example usage
console.log(strStr("hello", "ll")); // Output: 2
console.log(strStr("aaaaa", "bba")); // Output: -1