function removeUrlAnchor(url){
  // TODO: complete
  //make the url string an array
  //if the array .includes(#)
    //function that removes from the # index on - splice(indexof(anchor))
    //join the array
  //else join the array return the url
  
  //turns the string into an array with each individual character as an element
  let array = url.split('')
  
  //searches the array to see if it has a #
  //if it does, grab the index of the #, sets it to anchorLoc variable
  //array.length changes the array's length so set it to the anchorLoc
  //return the shortened array
  //if there is no # then just return the url
  if (array.includes('#')){
    let anchorLoc = array.indexOf('#')
   
    array.length = anchorLoc
    
    return array.join('')
  } else {
    return url
  }
}

//the fast way would be to use split targeting the # as the separator with no limit
// function removeUrlAnchor(url){
//   return url.split('#')[0];
// }