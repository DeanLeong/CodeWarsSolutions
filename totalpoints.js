function points(games) {
  //   console.log(games)
    
    let points = 0
    
    games.forEach(game => {
      if (game[0] > game[2]){
        points += 3
      } else if (game[0] < game[2]){
        points += 0
      } else if (game[0] === game[2]){
        points += 1
      }
    })
    return points
}
  
//https://www.codewars.com/kata/5bb904724c47249b10000131