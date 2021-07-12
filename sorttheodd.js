function sortArray(array) {
  //use the filter function to sort the odd numbers, which are found by the % 2 operation
   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  //return the array with the odd numbers sorted
   return array.map((x) => x % 2 ? odd.shift() : x);
}