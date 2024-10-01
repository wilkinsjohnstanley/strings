/**
 * @param {string} s
 * @return {number}
 * 
 * This solution for the "Roman to Integer" problem 
 * works by iterating through the Roman numeral string 
 * and comparing each symbol's value with the next one. 
 * If the current symbol represents a smaller value than the next one, 
 * we subtract it; otherwise, we add it to the result.
 * 
 */
const romanToInt = function(s) {
    // Define a map of Roman numeral symbols to their integer values
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;
    
    // Iterate through the Roman numeral string
    for (let i = 0; i < s.length; i++) {
        // Get the current symbol's value
        const currentValue = romanValues[s[i]];
        
        // Get the next symbol's value (if it exists)
        const nextValue = i + 1 < s.length ? romanValues[s[i + 1]] : 0;
        
        // If the current value is less than the next value, subtract it
        // Otherwise, add it to the result
        if (currentValue < nextValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }
    
    return result;
};

// Example usage
console.log(romanToInt("MCMXCIV")); // Output: 1994