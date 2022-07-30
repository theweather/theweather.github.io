function greet(name){
  if (name === null) {
    return 'Hello there!'
  }
  else if (typeof name !== 'object') {
    let result = name.toString().toUpperCase();
    if (name === result) {
      console.log(typeof name);
      return 'HELLO, ' + name + '!'
    }
    else {
      console.log(typeof name);
      return 'Hello, ' + name
    };
  }
  else if (typeof name === 'object') {
    console.log(typeof name);
    let namelist = '';
    for (let i = 0; i <name.length; i++){
      namelist = namelist + ', ' + name[i];
      }
    return 'Hello' + namelist
  }
  else {
    console.log(typeof name);
    return 'Something\'s wrong, Doris.'
  }
};



console.log(greet('Elizabeth'));
console.log(greet(null));
console.log(greet('BARNABY'));
console.log(greet('Barnabas'));
console.log(greet(['Elphaba','Galinda']));
console.log(greet(['Belle','Splendid','Gordon','Jane','Vivian','Bri','Kyrial']));
console.log(typeof name);