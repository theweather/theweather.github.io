/* 
Write your first function
- Open the functions-01 folder,
- In add.js, complete the body of the function between the comments
- Make sure to return the sum of x and y
*/
function add(x, y) {
  //your code goes down here
  return x + y;
}

//open the browser console to check results
console.log('add results: ', add(3, 2));

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = add;
}
