function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  //series of if elses === pretty much
  
  if (Date.parse(currentDate) <= Date.parse(expirationDate) && enteredCode === correctCode){
  return true
  } else {
    return false
  }
}

//https://www.codewars.com/kata/539de388a540db7fec000642