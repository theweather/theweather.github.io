//Array flattenr activity
// Define a function arrayFlattener with a 2 dimensional array as parameter:
// example of 2 dimensional array: [1,[2,3],4,5]

//Return a new 1 dimensional array like, [1,2,3,4]

//your code here
function arrayFlattener(array1) {
  let array2 = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] instanceof Object) {
      for (let j = 0; j < array1[i].length; j++) {
        array2.push(array1[i][j]);
      }
    }
    else{
      array2.push(array1[i]);
    }
  }
  console.log('array2 ' + array2)
  return array2;
}

//uncomment next line one by one, then check the console for results
console.log(arrayFlattener([1,[2,3],4,5]))

//don't change this line
if (typeof module !== "undefined") {
  module.exports = {
    arrayFlattener,
  };
}
