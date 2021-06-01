//My not completely working solution
function addBinary(a, b) {
  let total = a + b
  
 function total2bin(total) {
    return (total >>> 0).toString(2)
  }
  
  return total2bin(total)
}

//working solution
function addBinary(a,b){
  return (a+b).toString(2)
}

//my own solution was breaking for some reason.
//toString(2) takes base 10 numbers and converts them to binary basically
//numbers 2-10 can be added to toString() to make different conversions

//https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript