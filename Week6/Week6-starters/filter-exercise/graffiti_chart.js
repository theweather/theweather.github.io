//  dataset is a two dimensional array 
//  the inner format is [zipCode, numberOfReports, style]
//  the first position is used for  
//  for column names and point labels
// -------------------------------------
var dataset = [['zip', 'reports', { role: 'annotation' }]];


//  build dataset
// -------------------------------------
function generateDataset(points){
  var datapoint = [];
  var index = 1;
  var length = points.length;
  for (var i=0; i<length; i++){
      var p = points[i];
      var point = [p.zip, p.reports, p.reports];
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
    title: 'What zip code has the most graffiti reports?',
    subtitle: 'exploration graffiti reports',
    'chartArea': {'width': '75%', 'height': '95%'}
  };

  var target = document.getElementById('chart_div');
  var chart = new google.visualization.BarChart(target);
  chart.draw(data, options);
}
