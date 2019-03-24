/*****************************************************************************************
 * Execution    :   1. cmd> node weekDay.js
 *                   
 * 
 * Purpose      :   Display Calender using Queue.
 * 
 * @description
 * 
 * @file        :   weekDay.js
 * @overview    :   Queue implementation and display calender.
 * @author      :   Satya bhargav <Satyabhargav.puli@gmail.com>
 * @version     :   1.0
 * @since       :   23-03-2019
 * 
 * *************************************************************************************/
/**
 * To require the required files.
 */
var D = require('../Data_Structures/Implementation/queueutil')
var M = require('../Data_Structures/Implementation/bintree');
var N = require('../Utility/utility');
var T = require('util')
var read = require('readline-sync');
var weekdays = new D.QueueLinked;
var dateq = new D.QueueLinked;
var month = read.questionInt("enter the month :");
var year = read.questionInt("enter the year :");
var d = N.dayOfWeek(1, month, year);
console.log(d);
var res = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "sat"];
if (d <= res.length) {
    console.log("The day falls on :" + res[d])
}
var days = D.monthof(month);
var t1 = M.findLeapYear(year);
if (t1) {
    if (month == 2) {
        days = 29;
    }
}
for (let i = 0; i < res.length; i++) {
    weekdays.enqueue(res[i]);
}
for (let i = 1; i <= days; i++) {
    dateq.enqueue(i);
}
for (let i = 0; i < res.length; i++) {
    T.print(weekdays.dequeue() + "  ");
}
console.log()
for (let i = 0; i < (d * 5); i++) {
    T.print(" ");
}
for (let i = 1; i <= days; i++) {
    if (i < 10) {
        T.print(" " + dateq.dequeue() + "   ");
    }
    if (i > 9) {
        T.print("" + dateq.dequeue() + "   ");
    }
    if ((d + i) % 7 == 0) {
        console.log();
    }
}