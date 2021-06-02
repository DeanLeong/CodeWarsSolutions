"use strict";

function flattenAndSort(array) {
  //flattens the arrays with .concat and .apply
  //there is a higher order function created to do this which is .flat() but it is not browser supported yet.
  //from what I understand the .apply part is applying the concat?
  let flatArr = [].concat.apply([], array)
  
  //sort function that correctly sorts numbers applied to flatArr
  flatArr.sort(function (a, b) {return a - b})
  
  //return the flatArr
  return flatArr;
}


//below is the fastest solution. similar to what I did but in one line.
function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}