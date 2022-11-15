/*
Instructions
Compare Objects
- Define a function, `compareCities`, that accepts two objects as arguments.

compareCities({ name: 'Dresden' }, { name: 'Dresden' }) // -> true
compareCities({ name: 'Raleigh' }, { name: 'Raleigh', income_pc: 1200000 }) // -> false
*/
function compareCities(c1, c2) {
  if (c1 = c2) {
    return true;
    console.log(true);
  }
  else{
    return false;
    console.log(false);
  }
}

//uncomment next lines to console log results
console.log(compareCities({},{}))
console.log(compareCities({name:'San Jose'},{name:'San Jose'}))
console.log(compareCities({name:'San Jose'},{otherkey:'San Jose'}))

// I feel like this shouldn't have passed, but it did. The third test feels like it should have evaluated to false, but it didn't, and I don't understand why.

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = {
    compareCities,
  };
}
