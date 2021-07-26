function getRealFloor(n) {
  //if else chain
  
  console.log(n)
  
  let floor = 0
  
  if (n === 1) {
    floor = 0
  } else if (n === 0) {
    floor = 0
  } else if (n > 1 && n < 13) {
    floor = n - 1
  } else if (n >= 13) {
    floor = n - 2
  } else {
    floor = n
  }
  
  console.log(floor)
  
  return floor
}