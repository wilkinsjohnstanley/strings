/* Given a string s consisting of words and spaces, 
return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5. */
const lengthOfTheLastWord = function(string){
    let sentence = string
    .trim()
    .split(" ") //a sentence would be the string split on a space
    
    //console.log(sentence)
    let lastWord = sentence.length - 1
    return sentence[lastWord].length
    //console.log(lastWord)

}
console.log(lengthOfTheLastWord("   fly me   to   the moon  "))