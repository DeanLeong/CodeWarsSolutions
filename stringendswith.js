function solution(str, ending){
  // TODO: complete
  //make an array of the last x number of characters depending on ending.length
  //if that array .match() the ending return true
  //if not return false
  //loop to push the ends to a new arr
  //make a trash arr that pushes the beginning into with unshift?
  
  //get the length of the ending
  let endLength = ending.length
  
  //by subtracting the ending and the total length, get the length of the elements to get rid of in the beginning
  let num = ending.length - str.length
  //use math.abs in case the number is negative, as abs gives the total value
  let absNum = Math.abs(num)
  
  //make an array of the string
  let newArr = str.split("")
  //empty endArr
  let endArr = []
  //empty trashArr
  let trashArr = []

  //for loop that pushes the beginning of the newArr to a trash array. This keeps the needed ending in its original array, in the original order.
  for (i = 0; i < absNum; i++){
    trashArr.push(newArr.shift())
  }
  
  //make the ending a string again
  let endStr = newArr.join('')
  
  //if the endStr is exactly the same as the ending, return true and if not return false
  if (endStr === ending){
    return true
  } else {
    return false
  }
}

//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript