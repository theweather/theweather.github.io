
//  dataset is a two dimensional array 
//  the inner format is [x, y]
//  the first position is used for  
//  for column names and point labels
// -------------------------------------
var dataset = [['x', 'y']];


//  build dataset
// -------------------------------------
function generateDataset(points){
  var datapoint = [];
  var index = 1;
  var length = points.length;
  for (var i=0; i<length; i++){
      var p = points[i];
      //var point = [p.x, p.y];
      var point = [i, p.salary];
      dataset[index] = point;
      index++;
  }
  return dataset;
}


//  draw graph
// -------------------------------------
google.load("visualization", "1", {packages:["corechart"]});

function drawChart(dataset) {

  var data = google.visualization.arrayToDataTable(dataset);

  var options = {
    title: 'City of Chicago Salaries',
     pointSize: 1,
     curveType: 'function',
     vAxis: {gridlines:{count:20}}
  };

  var target = document.getElementById('chart_div');
  var chart = new google.visualization.ScatterChart(target);
  chart.draw(data, options);
}
