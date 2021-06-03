function isSortedAndHow(array) {
  //make booleans for ascending and decending and then write out an if else?
  
  console.log(array + " original array")
  
  let ascending = array.slice().sort(function(a, b) {return a-b})
  console.log(ascending + " ascending array")
  
  let descending = array.slice().sort(function(a, b) {return b-a})
  console.log(descending + " descending array")
  
  
  if (array === ascending){
    return 'yes, ascending'
  } else if (array === descending){
    return 'yes, descending'
  } else {
    return 'no'
  }
}

//I have no clue why this is not passing the tests.
//the ascending and decending arrays are made by copying the original arr
//this means the original is not being manipulated
//the console logs are showing the correct info

//https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript