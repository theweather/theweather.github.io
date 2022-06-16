# Week 5 Notes

## String Template Literals

### SPLICE - delete items in an array or string; changes original. 

#### At position 2, add new items, and remove 1 item:

  `const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2, 1, "Lemon", "Kiwi");`

### SLICE - pull certain items from an array or string;changes original.

### SPLIT - can be used to turn a string into an array of words, and does not change the original string.

### PUSH - add a value to the end of an array

### POP - remove value from end of an array

### INDEXOF - find what position something is in

## Anonymous Functions

`let add = function (a, b) {
    return a + b;
  }
  setTimeout(function(){console.log('Hey')}, 1000);

  let add = (a,b)=> {
    return a + b;
  }`
### More info [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## PAY ATTENTION TO:
### - Variable Scope!
### - You can pass functions as objects, in arrays, etc!
