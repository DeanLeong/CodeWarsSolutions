var encryptThis = function(text) {
  // text is a string
  // each word in string is encrypted - turn the string into an array
  // first letter of each word becomes its ASCII code
  // second letter is switched with last letter
  
  //for each word in arr word[0] = ASCII and make the swap split()?
  
  let arr = text.split('')
  //console.log(arr)
  
  arr.forEach(word => {
    //makes the variable ascii = the ascii code of index 1 in the word
    let ascii = word.charCodeAt(0)
    console.log(ascii)
    
    //make each individual word an array so that I can use splice
    let wordArr = word.split()
    console.log(wordArr)
    
    //this should be inserting the ascii at index 0 but it just makes an empty array
    console.log(wordArr.splice(0, 0, ascii))
  })
}

//https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript