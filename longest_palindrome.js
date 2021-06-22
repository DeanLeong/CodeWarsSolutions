longestPalindrome=function(s){
  //takes care of the empty string edge case
  if (!s) return 0
  
  //one loop to iterate through the string from end to beginning
  for (let c = s.length; c > 0; c--) {
    //another loop to iterate through from beginning to end
    for (let i = 0; i <= s.length - c; i++){
      //this finds the substring by checking the i and c substrings and if they are palindromes, return c's length
      let check = s.substr(i, c);
      if (check === check.split("").reverse().join("")) return c
    }
  }
}