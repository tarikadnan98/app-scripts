# app-scripts
This repository is about some Google Apps Script code snippets. Here tried to describe the functionality of each script, and create concise overviews for each one. 

## 1. LotAcreageandZipCodeWiseSorting.gs:

This Google Apps Script automates the grouping and sorting of data in a Google Sheets spreadsheet. It sorts data based on "Lot Acreage" (column F) and "Property Zip Code" (column G). The sorted data is then grouped by matching values in these columns. The script writes the grouped data back to the sheet, assuming numeric data and starting from row 2, spanning all 10 columns.
Google sheet link [View Only]: https://docs.google.com/spreadsheets/d/1OXcZ-ago3caXbcofKQbWoV4MWtV51it2qhrToDp_K3k/edit#gid=242309482
## 2. separateLastName.gs:

This Google Apps Script facilitates the extraction of last names from a column containing full names in a Google Sheets spreadsheet. It operates on the active sheet, assuming the full names are in column A and first names are in column B.

The script inserts a new column (column B) after column A, with the header "OWNER 1 LAST NAME." It then iterates through the data, separating the first names and last names using a regular expression. Special characters in first names are properly escaped, and the extracted last names are written to the new column.
Google sheet link [View Only]: https://docs.google.com/spreadsheets/d/1UdX2fFocUvUlPzqefjcMAoAkWhdaPbA1JkP0Yt_5z3E/edit?usp=sharing

## 3. groupAndSort.gs:
   
This Google Apps Script automates the grouping and sorting of data in a Google Sheets spreadsheet with 41 columns. It assumes data begins from row 2, and the primary sorting criteria involve columns representing "Lot Acreage" (column U, index 24) and "Property Zip Code" (column W, index 25).

The script retrieves, sorts, and groups the data based on these criteria. It writes the grouped data back to the same sheet, starting from row 2 and spanning all 41 columns.
Google sheet link [View Only]: https://docs.google.com/spreadsheets/d/1pIqzpEYzTH0xZ39u4q7lhPCtyqi2cWYDaoaZgQ4rV9Q/edit?usp=sharing

## 4. insertRowAfterPhone2AndPhone3.gs:

This Google Apps Script automates the insertion of new rows based on the presence of data in columns representing "Phone2" (column L) and "Phone3" (column O) in a Google Sheets spreadsheet.

The script starts by creating a new array (newData) and populating it with the original header row. It then iterates through each row of the existing data, adding it to the new array. If the row has a value in "Phone2," a new row is created with relevant data for "Phone2." Similarly, if the row has a value in "Phone3," a new row is added with relevant data for "Phone3."

After processing all rows, the script clears the contents of the original sheet and sets the values of the entire sheet to the data stored in the newData array.
Google sheet link [View Only]: https://docs.google.com/spreadsheets/d/1alsP-SbGkYIS0XGEXZH05XmEGYZ40IQ5IGVNDGNWsC0/edit?usp=sharing

## 5. deleteRowsWithFirstandLastNameBlanksAndDuplicates.gs:
   
This pair of Google Apps Scripts facilitates the cleanup of a Google Sheets spreadsheet by deleting rows with blank "First Name" and "Last Name" and removing duplicate rows.
Google sheet link [View Only]: https://docs.google.com/spreadsheets/d/1D1VZzD6a2ywwTiVjkSoYORbvzFd0tNnqB5rZ_vEm1TM/edit?usp=sharing

### Script 1 - deleteRowsWithFirstandLastNameBlanksAndDuplicates:

Iterates through each row, checking for blank "First Name" and "Last Name" fields.
Identifies and collects duplicate rows.
Deletes duplicate rows and rows with blank "First Name" and "Last Name."
Clears the sheet and rewrites the unique rows.

### Script 2 - isEqual:

A helper function that compares two rows to check if they are equal.
Used in the main script to identify duplicate rows.

## 6. deleteEmptyRows.gs:

This Google Apps Script, named deleteEmptyRows, automates the deletion of rows in a Google Sheets spreadsheet where all specified phone columns (Phone1, Phone2, and Phone3) are blank.

Retrieves the active sheet, data range, and values.
Identifies the indices of the "Phone1," "Phone2," and "Phone3" columns.
Iterates through each row starting from the last row.
Deletes the row if all phone values (Phone1, Phone2, and Phone3) are blank.
Google sheet link [View Only]: https://docs.google.com/spreadsheets/d/1D1VZzD6a2ywwTiVjkSoYORbvzFd0tNnqB5rZ_vEm1TM/edit?usp=sharing

## 7. deleteNonMobilePhones.gs:

This Google Apps Script, named deleteNonMobilePhones, automates the removal of non-mobile phone entries in a Google Sheets spreadsheet.

Retrieves the active sheet, data range, and values.
Identifies the indices of columns related to "Phone1," "Phone1 Type," "Phone2," "Phone2 Type," "Phone3," and "Phone3 Type."
Iterates through each row starting from the second row.
Checks the "Phone1 Type," "Phone2 Type," and "Phone3 Type" columns and deletes the corresponding "Phone" and "Phone Type" values if the type is not "Mobile."
Note: The script assumes that the columns related to "Phone1," "Phone1 Type," "Phone2," "Phone2 Type," "Phone3," and "Phone3 Type" exist in the sheet.
Google sheet link [View Only]: https://docs.google.com/spreadsheets/d/1D1VZzD6a2ywwTiVjkSoYORbvzFd0tNnqB5rZ_vEm1TM/edit?usp=sharing
