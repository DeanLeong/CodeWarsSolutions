function getDivisorsCnt(n){
  // todo
//divisors variable set to 0
let divisors = 0
//mod variable is whatever n is
mod = n
//while mod is greater than 0
while (mod > 0){
  //if n modulo mod is strict 0
  if (n % mod === 0){
    //add 1 to the divisors variable
  divisors++
  }
  //minus 1 from mod
  mod--
}
//return the divisor number
return divisors
}

//this function works by first doing the number divided by itself and then iterating minus 1
//for example, if n is 10, it will run 10%10 and add one to divisors bc there is no remainder
//then it will run 10%9 but not add to divisors because there is a remainder
//runs this all the way to 0
//this works but is really slow.

//https://www.codewars.com/kata/542c0f198e077084c0000c2e