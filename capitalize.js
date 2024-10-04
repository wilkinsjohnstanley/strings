function capitlize(str){
    const words = str.split(' ')
    const result = []
    for(let word of words){
        console.log("word[0].toUpperCase() = ", word[0].toUpperCase())
        console.log("word.slice(1) = ", word.slice(1))
        result.push(word[0].toUpperCase()+word.slice(1))
    }
    return result.join(' ')
}
console.log(capitlize("the mitochondria is the powerhouse of the cell"))