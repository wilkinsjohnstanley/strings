function capitalize(str){
    const words = str.split(' ')
    const result = []
    return words.map(word=>word[0].toUpperCase()+word.slice(1)).join(' ')
}
console.log(capitalize("the mitrochondria is the powerhouse of the cell"))