function separateLastName() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  sheet.insertColumnAfter(1); // insert new column after column A
  sheet.getRange(1, 2).setValue("OWNER 1 LAST NAME"); // set header for new column
  
  for (var i = 1; i < data.length; i++) {
    var fullName = data[i][0];
    var firstName = data[i][1];
    
    var escapedFirstName = firstName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // escape all special characters in first name
    var lastName = fullName.replace(new RegExp(escapedFirstName + "\\s*"), "");
    
    sheet.getRange(i + 1, 2).setValue(lastName.trim()); // set last name value in new column
  }
}
