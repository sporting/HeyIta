function getSheet(sheet_url,sheet_name) {
  var url = sheet_url
  var name = sheet_name
  var SpreadSheet = SpreadsheetApp.openByUrl(url);
  var Sheet = SpreadSheet.getSheetByName(name);
  return Sheet;
}
