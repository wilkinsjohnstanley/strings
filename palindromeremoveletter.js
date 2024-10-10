// let isPalindrome = function (string) {
//     mystring=string.toLowerCase().replace(/[^a-z0-9]/g, '');
//      //initialize a variable that checks if we've done this before
//      let doonce=0
//      //initialize pointers
//      let left = 0
//      let right = mystring.length -1

//      //condition for moving pointers towards each other
//      while ( left < right || doonce===0) {
           
//       if (mystring[left] !== mystring[right]){
//                      mystring[left].pop() // .delete()
//                      doonce++
// } else{
//     return false
// }
//       left++
//       right--
// } return false
// }
// return true



// isPalindrome("abca")
function isPalindrome(s) {
    // Helper function to check if substring is a palindrome
    function isPalindromeSubstring(left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    // Remove non-alphanumeric characters and convert to lowercase
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            // Try removing character at left or right
            return isPalindromeSubstring(left + 1, right) || isPalindromeSubstring(left, right - 1);
        }
        left++;
        right--;
    }

    return true; // It's already a palindrome
}

// Test cases
console.log(isPalindrome("abca")); // true (remove 'c')
console.log(isPalindrome("abc")); // false
console.log(isPalindrome("raceacar")); // true (remove 'a')
console.log(isPalindrome("abcda")); // false