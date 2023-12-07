function deleteRowsWithFirstandLastNameBlanksAndDuplicates() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();

  var uniqueRows = [values[0]]; // Preserve the header row
  var duplicateRows = [];

  // Iterate through each row
  for (var i = 1; i < values.length; i++) {
    var currentRow = values[i];
    var firstName = currentRow[0];
    var lastName = currentRow[1];

    // Check if both "First Name" and "Last Name" are blank
    if (!firstName && !lastName) {
      duplicateRows.push(i + 1); // Add 1 to account for header row
    } else {
      var isDuplicate = false;

      // Check if the current row is a duplicate
      for (var j = i + 1; j < values.length; j++) {
        var compareRow = values[j];

        if (isEqual(currentRow, compareRow)) {
          isDuplicate = true;
          break;
        }
      }

      // Add the row to the appropriate list
      if (isDuplicate) {
        duplicateRows.push(i + 1); // Add 1 to account for header row
      } else {
        uniqueRows.push(currentRow);
      }
    }
  }

  // Delete duplicate rows and rows with blank "First Name" and "Last Name"
  for (var k = duplicateRows.length - 1; k >= 0; k--) {
    sheet.deleteRow(duplicateRows[k]);
  }

  // Clear the sheet and rewrite the unique rows
  sheet.clearContents();
  sheet.getRange(1, 1, uniqueRows.length, uniqueRows[0].length).setValues(uniqueRows);
}

function isEqual(row1, row2) {
  if (row1.length !== row2.length) {
    return false;
  }

  for (var i = 0; i < row1.length; i++) {
    if (row1[i] !== row2[i]) {
      return false;
    }
  }

  return true;
}
