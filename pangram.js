function isPangram(string){
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let regex = /\s/g;
  
  let lowercase = string.toLowerCase().replace(regex, "")
  
  for (let i = 0; i < alphabet.length; i++){
    if(lowercase.indexOf(alphabet[i]) === -1){
      return false
    }
  }
  return true

//makes an alphabet variable
//regex to make it lowercase
//for loop searches through the alphabet variable and if
//the index of the alphabet character is not present in the lowercase
//it will return false if is there returns true