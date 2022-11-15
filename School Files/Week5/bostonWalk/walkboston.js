function renderBoston(boston, container) {
    var person = boston.data;
    const len = boston.data.length;
    var eatRich = [];
    var rich = 0;
    var richList = [];
    var richest = 0;
    var richestName = '';
    var html = '';
    for (let i = 0; i < len; i++) {
      if (person[i][11] < 100000) {
        continue;
      }
      else if (person[i][11] >= 100000) {
        html += '<li class="post">' +
          '<h2>' + person[i][8] + '</h2>' +
          '<h3>' + person[i][11] + '</h3>'
        if (person[i][11]>richest) {
          richest = person[i][11];
          richestName = person[i][8]
          console.log(i + ' - ' + richestName + ' ' + 'richest: ' + richest);
          richList.push([person[i][8],person[i][11]]);
          rich++;
        }
      }
      else{
        rich++;
        continue
      }
    }
    console.log('richList: ' + richList);
    console.log('Rich: ' + rich);
    console.log('Richest: ' + richest);
    container.innerHTML = '<ul id = "person">' + html + '</ul>';
  }
  renderBoston(boston, document.getElementById('container'));
