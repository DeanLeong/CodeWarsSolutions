function arrayDiff(a, b) {
  //make a varible that holds the b values and matches them with a?

  //filter creates a new array so it is reassigning a
  //the filter's conditions is val, DOES NOT INCLUDE any val in b
    //makes new array not including duplicates basically
  a = a.filter(val => !b.includes(val))
  console.log(a)
  return a
}