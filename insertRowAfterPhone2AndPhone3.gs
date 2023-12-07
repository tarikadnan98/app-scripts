function insertRowAfterPhone2AndPhone3() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var newData = [];

  // Add the first (header) row to the new data
  newData.push(data[0]);

  // Loop through the remaining rows, skipping the first row
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var hasPhone2 = row[11] != "";
    var hasPhone3 = row[14] != "";

    newData.push(row);

    if (hasPhone2) {
      // Create a new row with the relevant data for Phone2
      var newRowPhone2 = [
        row[0],  // Full Name
        row[1],  // First Name
        row[2],  // Last Name
        row[3],  // Mail Address
        row[4],  // Property Address
        row[5],  // Property City
        row[6],  // Property State
        row[7],  // Property Zip
        row[11],  // Phone2
        row[12],  // Phone2 Type
        row[13],  // Phone2 Last Seen
        "",  // Phone1
        "",  // Phone1 Type
        "",  // Phone1 Last Seen
        "",  // Phone3
        "",  // Phone3 Type
        ""  // Phone3 Last Seen
      ];
      newData.push(newRowPhone2);
    }

    if (hasPhone3) {
      // Create a new row with the relevant data for Phone3
      var newRowPhone3 = [
        row[0],  // Full Name
        row[1],  // First Name
        row[2],  // Last Name
        row[3],  // Mail Address
        row[4],  // Property Address
        row[5],  // Property City
        row[6],  // Property State
        row[7],  // Property Zip
        row[14],  // Phone3
        row[15],  // Phone3 Type
        row[16],  // Phone3 Last Seen
        "",  // Phone2
        "",  // Phone2 Type
        "",  // Phone2 Last Seen
        "",  // Phone1
        "",  // Phone1 Type
        ""  // Phone1 Last Seen
      ];
      newData.push(newRowPhone3);
    }
  }

  sheet.clearContents();
  sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
}