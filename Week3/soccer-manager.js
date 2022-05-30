// Soccer manager activity
//Create the function getPlayingStyle, return the team you think it has the best playing style.
function getPlayingStyle(){
  var firstTeam = [3,3,1,3];
  var secondTeam = firstTeam; 
  firstTeam[0] = 4;
  firstTeam[1] = 1;
  firstTeam[2] = 4;
  firstTeam[3] = 1;

  return secondTeam;
}
//Run the code in the console to find out what's the secondTeam final playing style.

/////////////////////////
//your code here

/////////////////////////
//Uncomment this line to see the results in the browser console
console.log("results = " + getPlayingStyle())

/////////////////////////
//don't change the code under this line
if (typeof module !== 'undefined') {
  module.exports = getPlayingStyle;
}
