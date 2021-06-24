function dashatize(num) {
  //get 'em

  //empty array for ints
  let ints = []
  //grabbing each individual number in ints
  let sNumber = num.toString()
  for (let i = 0, len = sNumber.length; i < len; i += 1) {
    ints.push(+sNumber.charAt(i))
  }
  console.log(ints)

  //empty variable for whether or not an int is odd
  let isOdd = ""

  //find out if an int is odd or not
  for (let i = 0; i < ints.length; i++) {
    if (ints[i] % 2) {
      isOdd = false
      console.log(isOdd + " " + ints[i])
    } else {
      isOdd = true
      console.log(isOdd + " " + ints[i])
      ints.splice(ints[i], 0, "-")
    }
  }

  console.log(ints)
  //now how to insert the - in the right place?


}

//https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript