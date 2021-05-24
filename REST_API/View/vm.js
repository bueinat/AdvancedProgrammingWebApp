function myFunction() {
    document.getElementById('demoHide').style.display='block';
    var algoChoose = document.getElementById("algo").value; 
    var withoutPath = document.getElementById("CSVwithoutPath");
    var withPath = document.getElementById("CSVwithPath");
    document.getElementById("demo").innerHTML = "The choosen algo is: var = " + algoChoose + " path1: " + withoutPath + " path2: " + withPath;
    var form = new FormData();
    form.append("model_type", "hybrid");
    form.append("anomaly_csv", withoutPath.files[0]);
    form.append("learn_csv", withPath.files[0]);
  
   var settings = {
      "url": "http://localhost:8080/detect",
      "method": "POST",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
   };
  
   $.ajax(settings).done(function (response) {
     console.log(response);
     var json =JSON.parse(response);
     console.log(json);
    });
  
  }


  
 // Builds the HTML Table out of json.
// function buildHtmlTable(selector) {
//   console.log(json);
//   var columns = addAllColumnHeaders(json, selector);

//   for (var i = 0; i < json.length; i++) {
//     var row$ = $('<tr/>');
//     for (var colIndex = 0; colIndex < columns.length; colIndex++) {
//       var cellValue = json[i][columns[colIndex]];
//       if (cellValue == null) cellValue = "";
//       row$.append($('<td/>').html(cellValue));
//     }
//     $(selector).append(row$);
//   }
// }

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.
// function addAllColumnHeaders(json, selector) {
//   var columnSet = [];
//   var headerTr$ = $('<tr/>');

//   for (var i = 0; i < json
//     .length; i++) {
//     var rowHash = json
//     [i];
//     for (var key in rowHash) {
//       if ($.inArray(key, columnSet) == -1) {
//         columnSet.push(key);
//         headerTr$.append($('<th/>').html(key));
//       }
//     }
//   }
//   $(selector).append(headerTr$);

//   return columnSet;
// }

