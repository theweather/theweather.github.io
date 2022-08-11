function addItem() {
  // TODO: add 'item' to the list of TODOs

  //Step 1: identify the value of the myInput element.

  let userInput = document.getElementById('myInput').value;

  //console.log('input is this: ' + userInput);
  //Step 2: Create a text node containing that value

  let nodeInput = document.createTextNode(userInput);

  //Step 3: Create a new li element and append the text node to it

  let listInput = document.createElement('li');
  listInput.appendChild(nodeInput);

  //Step 4: Append the li element to the existing myTODOs element.
  
  let list = document.getElementById('myTODOs');
  list.appendChild(listInput);
};




/*//don't change this line
if (typeof module !== 'undefined') {
  module.exports = addItem;
} */ 
