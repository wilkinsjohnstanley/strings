const isAnagram = function(twoWords){
    console.log("Before we do anything, the words look like this: ", twoWords)
    firstWord=twoWords[0].split("").sort().join("")
    secondWord=twoWords[1].split("").sort().join("")
    console.log("After, the words look like this: ", firstWord + "\n " + secondWord)

    if(firstWord===secondWord){
        return true
    } else {
        return false
    }

    
}

console.log(isAnagram(["earth", "heart"])) //true

