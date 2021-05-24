



// //var json = JSON.parse('[{ "name":"John", "age":30, "city":"New York"}]');


// //   $.getJSON("json", function (data) {
// //     var items = [];
// //     $.each(data, function (key, val) {
// //       items.push("<li id='" + key + "'>" + val + "</li>");
// //     });
  
// //     $("<ul/>", {
// //       "class": "my-new-list",
// //       html: items.join("")
// //     }).appendTo("body");
// //   });
 

//  // Builds the HTML Table out of json.
// // function buildHtmlTable(selector) {
// //   console.log(json);
// //   var columns = addAllColumnHeaders(json, selector);

// //   for (var i = 0; i < json.length; i++) {
// //     var row$ = $('<tr/>');
// //     for (var colIndex = 0; colIndex < columns.length; colIndex++) {
// //       var cellValue = json[i][columns[colIndex]];
// //       if (cellValue == null) cellValue = "";
// //       row$.append($('<td/>').html(cellValue));
// //     }
// //     $(selector).append(row$);
// //   }
// // }

// // Adds a header row to the table and returns the set of columns.
// // Need to do union of keys from all records as some records may not contain
// // all records.
// // function addAllColumnHeaders(json, selector) {
// //   var columnSet = [];
// //   var headerTr$ = $('<tr/>');

// //   for (var i = 0; i < json
// //     .length; i++) {
// //     var rowHash = json
// //     [i];
// //     for (var key in rowHash) {
// //       if ($.inArray(key, columnSet) == -1) {
// //         columnSet.push(key);
// //         headerTr$.append($('<th/>').html(key));
// //       }
// //     }
// //   }
// //   $(selector).append(headerTr$);

// //   return columnSet;
// // }


// uploadFile();
// function uploadFile() {
//  var form = new FormData();
//   form.append("model_type", "hybrid");
//   form.append("anomaly_csv", "/C:/Users/noa83/Desktop/CompBioBarIlan/semesterD/WebApplication/AdvancedProgrammingWebApp/REST_API/uploads/anomaly_flight.csv");
//   form.append("learn_csv", "/C:/Users/noa83/Desktop/CompBioBarIlan/semesterD/WebApplication/AdvancedProgrammingWebApp/REST_API/uploads/reg_flight.csv");

// //  var settings = {
// //     "url": "http://localhost:8080/detect",
// //     "method": "POST",
// //     "timeout": 0,
// //     "processData": false,
// //     "mimeType": "multipart/form-data",
// //     "contentType": false,
// //     "data": form
// //  };

//  console.log(77);
//  $.ajax({
//   type: 'POST',
//   url: 'http://localhost:8080/detect',
//   dataType: 'json',                              // <-- add this
// })
// .done(function(result) {
//   console.log(result);
// })
// .fail(function(xhr, status, error) {
//   console.log(error);
// })
// .always(function(data){
// });


// //  $.ajax(settings).done(function (response) {
// //    console.log(response);
// //    console.log(79);
// //    var json2 =JSON.parse(response);
// //    console.log(json2);
// //   });

// }

var dataToBeSent = $("form").serialize();
console.log(104);

$.post("http://localhost:8080/detect", dataToBeSent, function(data, textStatus) {
  console.log(107);

  console.log(data);
  //data contains the JSON object
  //textStatus contains the status: success, error, etc
}, "json");

console.log(114);


console.log(status);