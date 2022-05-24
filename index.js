"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter firt number:\n');
    var operator = (0, readline_sync_1.question)('Enter operator\n');
    var secondStr = (0, readline_sync_1.question)('Enter second number\n');
    var validInput = isnumber(firstStr) && isoperator(operator) && isnumber(secondStr);
    if (validInput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\ninvalid Input\n');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '/':
            return firstNum / secondNum;
        case '*':
            return firstNum * secondNum;
    }
}
function isoperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isnumber(str) {
    var maybeNum = parseInt(str); //33 NaN
    var isnum = !isNaN(maybeNum);
    return isnum;
}
main();
