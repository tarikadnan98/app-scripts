function deleteEmptyRows() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();
  var headers = values[0];

  var phone1Index = headers.indexOf("Phone1");
  var phone2Index = headers.indexOf("Phone2");
  var phone3Index = headers.indexOf("Phone3");

  // Iterate through each row starting from the last row
  for (var i = values.length - 1; i >= 1; i--) {
    var row = values[i];
    var phone1Value = row[phone1Index];
    var phone2Value = row[phone2Index];
    var phone3Value = row[phone3Index];

    // Check if all phone values are blank
    if (!phone1Value && !phone2Value && !phone3Value) {
      sheet.deleteRow(i + 1);
    }
  }
}