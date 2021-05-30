/**
 * get an array and put it in the table in the html page
 * @param {*} fromJson an array of the table
 */
function showTable44(fromJson) {
  const tableBody = document.querySelector('table > tbody');
  fromJson.slice().reverse().forEach(el => {
    const row = tableBody.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(0);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.textContent = el[0].split("!")[0];
    cell2.textContent = el[0].split("!")[1];
    cell3.textContent = el[1];
    cell4.textContent = el[2];
  });
}
/**
 * what happen when upload in clicked
 */
function myFunction() {
  window.scrollTo({
    top: 700,
    behavior: 'smooth'
  });
  var algoChoose = document.getElementById("algo").value;
  var withoutPath = document.getElementById("CSVwithoutPath");
  var withPath = document.getElementById("CSVwithPath");
  //document.getElementById("demo").innerHTML = "The choosen algo is: var = " + algoChoose + " path1: " + withoutPath + " path2: " + withPath;
  var form = new FormData();
  form.append("model_type", "hybrid");
  form.append("anomaly_csv", withPath.files[0]);
  form.append("learn_csv", withoutPath.files[0]);

  var settings = {
    "url": "http://localhost:8080/detect?model_type=" + document.getElementById('algo').value,
    "method": "POST",
    "timeout": 0,
    "processData": false,
    "mimeType": "multipart/form-data",
    "contentType": false,
    "data": form
  };

  $.ajax(settings).done(function (response) {
      console.log(response);
      var someData = JSON.parse(response);
      var fromJson = [];

      for (var i in someData) {
        var item = someData[i];
        fromJson.push([i, item.start_time, item.end_time]);

      }
      myChartFunc();
      document.getElementById('demoHide').style.display = 'block';
      document.getElementById('tableDiv').style.display = 'block';
      showTable44(fromJson);
    })
    .fail(function (xhr) {
      alert('Error: ' + xhr.responseText);
    })

}
/**
 * This function sending selection to view in chart
 * @param {*} attri1 this is one attribute
 * @param {*} attri2 this is the second attribute
 */
function selectionTochart(attri1, attri2) {}

/**
 * This function is creating a chart
 */

function myChartFunc() {
  var data = [{
    type: "line",
    dataPoints: [{
        x: 1,
        y: 450
      },
      {
        x: 2,
        y: 414
      },
      {
        x: 3,
        y: 520
      },
      {
        x: 4,
        y: 460
      },
      {
        x: 5,
        y: 450
      }
    ]
  }];
  var x = "x name";
  var y = "y name";
  renderChart(data, x, y);
}


/**
 * get an array and put in in the chart in the html page
 * @param {*} chartData an array that of the chart
 */
function renderChart(chartData, x, y) {
  var chart = new CanvasJS.Chart(document.getElementById('chartContainer'), {
    theme: "light2", //"light1", "dark1", "dark2"
    title: {
      text: "Line chart representing the anomalies: ",
      fontSize: 22,
      fontFamily: "arial",
      fontWeight: "lighter",
      horizontalAlign: "left"
    },
    axisY: {
      title: y,
      //includeZero: false,			
      gridThickness: 0.5
    },
    axisX: {
      title: x,
      //includeZero: false,			
      gridThickness: 0.5
    },
    data: chartData
  });
  chart.render();
}
