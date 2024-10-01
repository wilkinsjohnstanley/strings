/**
 * @param {string} s
 * @return {boolean}
 * 
 * 
 * This solution for the "Valid Parentheses" problem 
 * uses a stack to keep track of opening brackets and 
 * checks if each closing bracket matches the most recent 
 * opening bracket.
 */
const isValid = function(s) {
    // Create a stack to keep track of opening brackets
    const stack = [];
    
    // Define a map of closing brackets to their corresponding opening brackets
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Iterate through each character in the string
    for (let char of s) {
        // If it's a closing bracket
        if (bracketPairs.hasOwnProperty(char)) {
            // Check if the stack is empty or if the last opening bracket doesn't match
            if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }
    
    // The string is valid if all brackets are closed (stack is empty)
    return stack.length === 0;
};

console.log(isValid("()[]{}")); // Output: true
console.log(isValid("([)]")); // Output: false