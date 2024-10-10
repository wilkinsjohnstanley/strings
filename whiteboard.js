//isPalindrom except you are allowed to remove one character and then check if it's a palindrome again.

function isPalindrome(s){
    //Helper function to check if substring is a palindrome
    function isPalindromeSubstring(left, right){
        while (left < right){
            if (s[left]!==s[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    //Remove non-alphanumeriic characters and convert them to lowercase just in case
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = s.length - 1

    while (left < right ){

        if(s[left]!==s[right]){

       
        //Try removing character at left or right
        return isPalindromeSubstring(left + 1, right) || isPalindromeSubstring(left, right - 1);
    }
    left++
    right--
    }
    return true;
}




// Test cases
console.log(isPalindrome("abca")); // true (remove 'c')
console.log(isPalindrome("abc")); // false
console.log(isPalindrome("raceacar")); // true (remove 'a')
console.log(isPalindrome("abcda")); // false





