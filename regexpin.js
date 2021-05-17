function validatePIN (pin) {
  //return true or false
  
  const numbers = /^[0-9]+$/
  
 if (pin.match(numbers)){
    if (pin.length === 4){
      return true
    } else if (pin.length === 6){
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132