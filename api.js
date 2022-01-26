const SHEETID = '1fvypvIrhu-QyDDBdDjqbIv14HgGKreBH30oV1sSJ0As'; //your sheet id, exapmle: this is your google sheet link: "https://docs.google.com/spreadsheets/d/----%3E1FPBr6NLM-J7mHCZw24JQaqqTb31zJJb80qwj_yVKo4w<----/edit#gid=0"
const SheetName = "Data"; //the name that the sheet you want to write in has (bottom left corner)
const maxColumns = 7; // number of Columns the sheet will have
const sheetHeadline = ["id", "name", "highScore", "score1", "score2", "score3", "score4"]; //column headlines
//global variables
const ss = SpreadsheetApp.openById(SHEETID);
const sheet = ss.getSheetByName(SheetName);

//note: google sheets has a problem with cors on posts therefore we use get to get AND post data!
// You need to add the variables of added columns in the setValues() functions

function doGet(e) {
  if (e) {
    if (e.parameters.data) {
      var data = JSON.parse(e.parameters.data[0]);
      var number = sheet.getMaxRows().toString().replace(".0", "");
      if (number == 1) { setupTable(); }
      if (data.id == 0) {
        sheet.insertRowsAfter(number, 1);
        number = sheet.getMaxRows().toString().replace(".0", "");
        var range = sheet.getRange(number, 1, 1, maxColumns);
        range.setFontWeight("normal")
        range.setHorizontalAlignment("left");
        data.id = number - 1;
        range.setValues([
          [data.id, data.name, data.highScore, data.score1, data.score2, data.score3, data.score4]])
        range.trimWhitespace();
      }
      else {
        var targetRow = rowOf(data.id, 0);
        var range = sheet.getRange(targetRow, 1, 1, maxColumns);
        range.setValues([
          [data.id, data.name, data.highScore, data.score1, data.score2, data.score3, data.score4]])
        range.trimWhitespace();
      }
      return ContentService
        .createTextOutput(JSON.stringify(data))
        .setMimeType(ContentService.MimeType.JSON);
    }
    if (e.parameters.id) {
      var targetRow = rowOf(e.parameters.id[0], 0);
      outputContent(sheet.getRange(targetRow, 1, 1, maxColumns).getValues());
    }
  }
  const rows = sheet.getDataRange().getValues();
  return outputContent(rows);
}

//get all data that is in the range of data
function outputContent(data) {
  const temp = JSON.stringify(data)
  return ContentService
    .createTextOutput(temp)
    .setMimeType(ContentService.MimeType.JSON);
}

//returns the number of the row of the containingValue in column with the number columnToLookInIndex
function rowOf(containingValue, columnToLookInIndex) {
  const values = sheet.getDataRange().getValues();
  var outRow;
  for (var i = 0; i < values.length; i++) {
    if (values[i][columnToLookInIndex] == containingValue) {
      outRow = i + 1;
      break;
    }
  }
  return outRow;
}

//this creates the table with column headlines
function setupTable() {
  var range = sheet.getRange(1, 1, 1, maxColumns);
  range.setFontWeight("bold")
  range.setValues([sheetHeadline]) // each array entry is one headline
  range.trimWhitespace();
}