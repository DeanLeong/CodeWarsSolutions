function howMuchILoveYou(nbPetals) {
  console.log(nbPetals)
  if (nbPetals === 1 || nbPetals % 7 === 0){
    console.log("I love you")
    return 'I love you'
  } else if (nbPetals === 2 || nbPetals % 8 === 0) {
    console.log("a little")
    return 'a little'
  } else if (nbPetals === 3 || nbPetals % 9 === 0){
    console.log("a lot")
    return 'a lot'
  } else if (nbPetals === 4 || nbPetals % 10 === 0){
    console.log("passionately")
    return 'passionately'
  } else if (nbPetals === 5 || nbPetals % 11 === 0){
    console.log("madly")
    return 'madly'
  } else if (nbPetals === 6 || nbPetals % 12 === 0){
    console.log("not at all")
    return 'not at all'
  }
}

// Actual working solution

const phrases = [
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
  'not at all',
]

function howMuchILoveYou(n) {
   return phrases[(n - 1) % phrases.length] 
}

//this works by returning the appropriate object in the phrases list
//according to the math done by phrases list n - 1 modulo the phrases list length