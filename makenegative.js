function makeNegative(num) {
  // if else chain
  //if number is more than 0 return the negative
  //else return the original number
  
  if (num > 0){
    return -Math.abs(num)
  } else {
    return num
  }
}