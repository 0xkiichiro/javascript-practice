function filter_list(l) {
  const arr = [];
  for (let i = 0; i < l.length; i++) {
    typeof l[i] === 'number' && arr.push(l[i]);
  }
  return arr;
}

//best result
// function filter_list(l) {
//   return l.filter(function(v) {return typeof v == 'number'})
// }
