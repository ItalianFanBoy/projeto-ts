"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter firt number:\n');
    var operator = (0, readline_sync_1.question)('Enter operator\n');
    var secondStr = (0, readline_sync_1.question)('Enter second number\n');
    console.log(firstStr, operator, secondStr);
    var firstNum = isnumber(firstStr);
    console.log(firstNum);
}
function isnumber(str) {
    var maybeNum = parseInt(str); //33 NaN
    var isnum = !isNaN(maybeNum);
    return isnum;
}
main();
