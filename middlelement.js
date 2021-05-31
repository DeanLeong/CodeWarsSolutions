var gimme = function (inputArray) {
  // Implement this function
  //sort the array to find the middle
  //grab the value of the middle sorted array
  //then use that value to return indexOf that number in the original array
  
  console.log(inputArray)
  
  let sorted = inputArray.slice().sort(function(a, b) {
    return a - b
  })
  console.log(sorted)
  
  let value = sorted[1]
  console.log(value + " this is value")
  
  console.log(inputArray)
  
  let ans = inputArray.indexOf(value)
  console.log(ans + " this is ans") 
  
  return ans
  
};

//the interesting part of this algo was adding .slice in the sort so that inputArray was not being sorted because sort() was 
//changing the orginal array even though it was being set to a variable.