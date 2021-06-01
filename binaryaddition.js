function addBinary(a,b) {
  let total = a + b
  
 function total2bin(total) {
    return (total >>> 0).toString(2)
  }
  
  return total2bin(total)
}

//https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript