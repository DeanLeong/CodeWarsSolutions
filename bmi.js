function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2)
  
  //console.log(bmi)
  
  if (bmi <= 18.5){
    return "Underweight"
  } else if (bmi <= 25){
    return "Normal"
  } else if (bmi <= 30){
    return "Overweight"
  } else {
    return "Obese"
  }
  
  //return "";
}

//https://www.codewars.com/kata/57a429e253ba3381850000fb