function isIsogram(str){
  //all letters must be original - what function finds repeat letters?
  //if empty = true
  //if else there are repeasts = false
  //else isogram
  
  //make all the characters lower case since it doesn't matter in this case and them make it an array
  let text = str.toLowerCase().split("")
  console.log(text)
  
  //if search returns true that means that there ARE repeats, so the word IS NOT and isogram(return true)
  let search = text.some(function(v,i,a){
    return a.lastIndexOf(v) !=i
  })
  console.log(search)
  
  //if else to swap the result of search
  if (search === false){
    return true
  } else {
    return false
  }
}