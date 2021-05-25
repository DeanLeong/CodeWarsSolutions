// complete the function
function solution(string) {
  //find the index of the capitol letter
//split at that index

//make the string an array
let array = string.split('')
console.log(array)

//empty array to hold indexes of capitol letters
let capIndex = []

//Use regex to find the capitol letter indexes and push them to the capIndex
for (let i = 0; i < array.length; i++){
  if (array[i].match(/[A-Z]/) != null){
    capIndex.push(i)
  }
}

console.log(capIndex)

//   let newArr = array.slice()
//   let newNewArr = array.split()
//   console.log(newArr)

console.log(array.slice(0, capIndex))
}