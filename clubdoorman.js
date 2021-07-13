function passTheDoorMan (word){
  //the alphabet as a string
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  //creates letter variable
  let letter;
  //for loop to go through the word
  for (let i = 0; i < word.length; i += 1) {
    //if the current index is the same as the next index
    if (word[i] === word[i + 1]) {
      //letter is that index
      letter = word[i];
    }
  }
  //return the index of that letter in the alphabet (plus 1 b/c starts at 0) times 3
  return (alphabet.indexOf(letter) + 1) * 3
}