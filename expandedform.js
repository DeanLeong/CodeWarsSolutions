function expandedForm(num) {

  //set up variables
  let subNumArr = []
  let numStr = num.toString()
  
  //for loop basic
  for (let n = 0; n < numStr.length; n++){
    
    //variable to make the 0's
    let zeroCount = numStr.length - n - 1
    //x starts at 0
    let x = 0
    //numStr index is subNum
    let subNum = numStr[n]
    
    //if the index is NOT 0
    if(numStr[n] !== '0'){
      //while x is smaller than the zeroCount
      while (x < zeroCount){
      //subNum is subNum plus "0"
      subNum = subNum + '0'
      //iterate x  
      x++
      }
      //push the subNum into the empty array
      subNumArr.push(subNum)
    }
  }
  //return the filled array of strings, joined with " + " between the numbers
  return subNumArr.join(" + ")
}

//https://www.codewars.com/kata/5842df8ccbd22792a4000245