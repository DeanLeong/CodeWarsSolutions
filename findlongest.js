const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);