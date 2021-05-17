function count (string) {  

  //if an empty string is being fed just return an empty object
  if (string.length === 0){
    return {};
  } else {
    //spread string
    //reduce executes a reducer function on EACH element of the array.
      //in this case it is grabbing the letters, and counting each instance of the letter
      //then it returns the created object
    var result = [...string].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
    return result // {h: 1, e: 1, l: 2, o: 1}
  }
   
}