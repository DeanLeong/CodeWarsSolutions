function printerError(s) {
  // Good letters a-m
  //get the string length .length() and make it the denomonator
  //count the number of good letters
  //print good letters + denomonator
  //make the string an array


const regex = /[a-m]/g

let match = s.match(regex)


let sArr = s.split('')


let numerator = sArr.length - match.length 
let denomonator = sArr.length


return numerator + "/" + denomonator
}
//https://www.codewars.com/kata/56541980fa08ab47a0000040