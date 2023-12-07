function groupAndSort() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getRange(2, 1, sheet.getLastRow()-1, 10).getValues(); // assumes data starts from row 2 and there are 10 columns in total
  var sortedData = data.sort(function(a, b){
    if(a[5] === b[5]){
      return a[6] - b[6];
    } else {
      return a[5] - b[5];
    }
  });
	//In this updated code, we are assuming that the "Lot Acreage" column is in column F and the "Property Zip Code" column is in column G. Therefore, we're using a[5] to refer to the "Lot Acreage" column (F is the 6th column, and we start counting from 0), and a[6] to refer to the "Property Zip Code" column (G is the 7th column).

	//Please note that the output will be written back to the same sheet, starting from row 2 and including all 10 columns. Also note that this code assumes that all the data is numeric, and does not handle cases where there might be non-numeric data in the columns being compared. If that's a possibility in your data, you may need to modify the code accordingly.

  var groupedData = [];
  var currentGroup = [];
  for(var i=0; i<sortedData.length; i++){
    if(i === 0 || (sortedData[i][5] === sortedData[i-1][5] && sortedData[i][6] === sortedData[i-1][6])){
      currentGroup.push(sortedData[i]);
    } else {
      groupedData.push(currentGroup);
      currentGroup = [sortedData[i]];
    }
  }
  groupedData.push(currentGroup); // add last group
  
  var output = [];
  for(var i=0; i<groupedData.length; i++){
    output = output.concat(groupedData[i]);
  }
  sheet.getRange(2, 1, output.length, 10).setValues(output);
}