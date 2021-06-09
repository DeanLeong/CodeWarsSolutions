var maxSequence = function(arr){
  // ...
  //reduce?
  //if else for if the array is only negative
    //includes and the sign higher order
  //how to check if an array is all negative?
  
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  console.log(arr.reduce(reducer))
  
  let hasNegative = arr.some(v => v < 0)
  
  if (arr === []){
    console.log(0)
  } else if (arr.length >= 1){
    console.log(arr.reduce(reducer))
  } else if (arr.length() >= 1 && !hasNegative){
    console.log("testing")
  }
}

//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript