var moment = require("moment");
const chalk = require('chalk');


var currnetDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log("It is " + chalk.blue(currnetDate + "."));


var dayOFYear = moment().format("DDDo");
console.log("It is the " + chalk.magenta(dayOFYear) + " day of the year.");

var isItDaylight = moment().isDST() ? chalk.green("is"): chalk.red("is not");
console.log("It " + isItDaylight + " during Daylight Savings Time.");


var isItLeapYear = moment().isLeapYear()? chalk.green("is"): chalk.red("is not");
console.log("It " + isItLeapYear + " a leap year.");
