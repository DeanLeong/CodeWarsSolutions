function insurance(age, size, numofdays){
  let ageCharge = age < 25 ? 10 : 0
  let sizeCharge = size === 'economy' ? 0 : (size === 'medium' ? 10 : 15)
  return numofdays < 0 ? 0 : (50 + ageCharge + sizeCharge) * numofdays
}