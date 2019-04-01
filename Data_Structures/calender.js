/*****************************************************************************************
 * Execution    :   1. cmd> node calender.js
 *                   
 * 
 * Purpose      :   Display calender.
 * 
 * @description
 * 
 * @file        :   calender.js
 * @overview    :   Month and year as command-line arguments and prints the Calendar of the
 *                  month.Store the Calendar in an 2D Array.
 * @author      :   Satya bhargav <Satyabhargav.puli@gmail.com>
 * @version     :   1.0
 * @since       :   23-03-2019
 * 
 * *************************************************************************************/
/**
 * To require the required files.
 */
 var take = require('util');
var path = require('../Utility/utility');
var pa=require('../Data_Structures/Implementation/bintree')
var readline = require('readline-sync');
/**
 * Function defination.
 */
function calender() {
    var month = +process.argv[2];
    var year = +process.argv[3];
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dates = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var a = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var day = path.dayOfWeek(1, month, year);
    console.log(day);
    var leap = pa.findLeapYear(year);
    if (leap = true) {
        dates[2] = 29;
     }
    take.print(a[month-1]+" "+year);
    console.log();
    for (var i = 0; i < week.length; i++)
     {
        take.print(week[i] + "  ");
     }
    console.log();
    for (var i = 0; i < (day * 5); i++) {

        take.print(" ");
     }

    for (var i = 1; i <= dates[month]; i++) {

        if (i < 10) {
            take.print(" " + i + "   ");
         }

        if (i > 9) {
            take.print("" + i + "   ")
         }
        if ((i + day) % 7 == 0) {
            console.log();
         }
    }
    console.log("\n\n");
}
/**
 * function call
 */
calender();