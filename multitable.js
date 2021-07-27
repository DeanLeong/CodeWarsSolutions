function multiTable(number) {
  return [1,2,3,4,5,6,7,8,9,10].map(item => `${item} * ${number} = ${item*number}`).join('\n');
    
  //maps the array of 1-10 and then creates a string of the multiplecation of item * number, joins them with a new line
  }