function sumTwoSmallestNumbers(numbers) {  
  //sort the array lowest to highest
  //grab index one and two, add them
  
  let sorted = numbers.sort(function(a, b) {return a- b})
  
  return sorted[0] + sorted[1]
}

//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript