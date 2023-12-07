function deleteNonMobilePhones() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();
  var headers = values[0];

  var phone1TypeIndex = headers.indexOf("Phone1 Type");
  var phone1Index = headers.indexOf("Phone1");
  var phone2TypeIndex = headers.indexOf("Phone2 Type");
  var phone2Index = headers.indexOf("Phone2");
  var phone3TypeIndex = headers.indexOf("Phone3 Type");
  var phone3Index = headers.indexOf("Phone3");

  // Iterate through each row starting from the second row
  for (var i = 1; i < values.length; i++) {
    var row = values[i];

    // Check Phone1Type and delete Phone1 if it's not "Mobile"
    if (phone1TypeIndex > -1 && phone1Index > -1 && row[phone1TypeIndex] !== "Mobile") {
      sheet.getRange(i + 1, phone1Index + 1).clearContent(); // Clear Phone1 value
      sheet.getRange(i + 1, phone1TypeIndex + 1).clearContent(); // Clear Phone1Type value
    }

    // Check Phone2Type and delete Phone2 if it's not "Mobile"
    if (phone2TypeIndex > -1 && phone2Index > -1 && row[phone2TypeIndex] !== "Mobile") {
      sheet.getRange(i + 1, phone2Index + 1).clearContent(); // Clear Phone2 value
      sheet.getRange(i + 1, phone2TypeIndex + 1).clearContent(); // Clear Phone2Type value
    }

    // Check Phone3Type and delete Phone3 if it's not "Mobile"
    if (phone3TypeIndex > -1 && phone3Index > -1 && row[phone3TypeIndex] !== "Mobile") {
      sheet.getRange(i + 1, phone3Index + 1).clearContent(); // Clear Phone3 value
      sheet.getRange(i + 1, phone3TypeIndex + 1).clearContent(); // Clear Phone3Type value
    }
  }
}
