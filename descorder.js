function descendingOrder(n){

  return parseInt(n.toString(10).replace(/\D/g, '0').split('').map(Number).sort().reverse().join(''), 0)
    
}
  
//https://www.codewars.com/kata/5467e4d82edf8bbf40000155