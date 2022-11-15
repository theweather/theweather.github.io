// Step 1: use slice to find elements in an array
function sliceElements(givenArray) {
  //TODO: return last 3 elements of givenArray
  let sliceArray = givenArray.slice((givenArray.length-3),givenArray.length);
  return sliceArray;
}

// Step 2: use splice to find elements in an array
function spliceElements(givenArray, element1, element2) {
  //TODO: remove the last element of givenArray and add element1 and element2 at that position
  givenArray.splice(givenArray.length-1, 1, element1, element2);
  return givenArray;
}

// Step 3: use splice to find elements in an array
function splitElements(givenString) {
  //TODO: convert givenString into an array of words
  let splitArray = givenString.split(' ');
  return splitArray;
}

//Uncomment these line to see results for step 1
console.log(sliceElements([1, 2, "MIT Certificate", 4, 5])); // should return ["MIT Certificate", 4, 5]
console.log(sliceElements([1, 2, [3, 4], "JavaScript"])); // should return [2, [3, 4], "JavaScript"]

//Uncomment these line to see results for Step 2
let arr = [1, 2, "MIT Certificate", 4, 5];
console.log(spliceElements(arr, "JavaScript", 101)); // should return [1, 2, "MIT Certificate", 4, "JavaScript", 101]

//Uncomment these line to see results for Step 3
var str = "MIT Certificate loves JavaScript";
console.log(splitElements(str)); // should return ["MIT", "Certificate", "loves", "JavaScript"]

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { sliceElements, spliceElements, splitElements };
}
