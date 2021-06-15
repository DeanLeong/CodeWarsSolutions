const binaryArrayToNumber = arr => {
  // turn the array into a number string => int
  // binary conversion
  
  //make the array a string
  const binaryString = arr.join('')
  
  //return the string parsed at radix 2. The 2 radix will return the number in binary
  return parseInt(binaryString, 2)
  
}