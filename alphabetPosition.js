function alphabetPosition(text) {
  //make an array of the alphabet and tie it in with the text string?
  
  //empty string result
  let result = ""
  
  //for loop to iterate through the text
  for (let i = 0; i < text.length; i++){
    //make it all uppercase
    let code = text.toUpperCase().charCodeAt(i)
    //This manipulates the UTF code to approprately return the 1-16 numbers needed
    if (code > 64 && code < 91) result += (code - 64) + " "
  }
  //return result
  return result.slice(0, result.length - 1)
  
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));