function twoSum(numbers, target) {
  //This solution works by creating a hash table and making key value pairs that are searched through, making it a very fast function

  //creates an object to hold numbers
  let numObject = {}
  
  //basic for loop
  for (let i = 0; i < numbers.length; i++){
    //thisNum is whatever index of numbers the function is on
    let thisNum = numbers[i];
    //the numObject key is i
    numObject[thisNum] = i
  }
  //another basic for loop
  for (var i = 0; i < numbers.length; i++){
    //diff is the target minus the index's number (so diff is whatever number needs to be found to make x + y = target)
    let diff = target - numbers[i]
    //if the diff is in num and the diff is NOT the current index
    if (numObject.hasOwnProperty(diff) && numObject[diff] !== i){
      //return the current index and the diff
      return [i, numObject[diff]]
    }
  }
}

//https://www.codewars.com/kata/52c31f8e6605bcc646000082