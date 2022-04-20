/* 
Write the greet() function
- Pass in the name parameter and return a string with the name argument.
- for ex. functionName(parameter){...}
*/
function greet(name) {
  //your code goes down here
  return 'Hello ' + name;
}

//open the browser console to check results
console.log('greet results: ', greet('Dani'));

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = greet;
}
