// write the function isAnagram
var isAnagram = function(test, original) {
  //make the words an array
  //if test letters matches original letters
  //return true
  //else return false
  
  let testArr = test.toLowerCase().split('').sort().join('')
  let originalArr = original.toLowerCase().split('').sort().join('')
  console.log(testArr, originalArr)
  
  if (testArr.length != originalArr.length){
    return false
  } else if (testArr.length == 0 || originalArr.length == 0) {
    return false
  }else if (testArr === originalArr) {
    return true
  } else {
    return false
  }
}

//https://www.codewars.com/kata/529eef7a9194e0cbc1000255