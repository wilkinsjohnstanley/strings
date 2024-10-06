/* Given a string s consisting of words and spaces, 
return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5. */



const lengthOfTheLastWord = function(string){
    let sentence = string
    // .trim()
    // .split(" ") 
    // .filter(word=>word.length>0);
    .split(/\s+/)
    
    console.log("The sentence array itself is: " + sentence)
    let lastWord = sentence.length - 1 
    return sentence[lastWord].length 
}
console.log(lengthOfTheLastWord("Hello World")) // 5
console.log(lengthOfTheLastWord("   fly me   to   the moon  ")) // 4