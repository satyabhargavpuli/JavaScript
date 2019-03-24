/*****************************************************************************************
 * Execution    :   cmd> node calStack.js
 *                   
 * 
 * Purpose      :   Display Calender using Stack.
 * 
 * @description
 * 
 * @file        :   calStack.js
 * @overview    :   Stack implementation and display calender.
 * @author      :   Satya bhargav <Satyabhargav.puli@gmail.com>
 * @version     :   1.0
 * @since       :   23-03-2019
 * 
 * *************************************************************************************/
/**
 * To require the required files.
 */
 var access = require('../Data_Structures/Implementation/stackutil');
var access1 = require('../Data_Structures/Implementation/queueutil');
var utility = require('../Data_Structures/Implementation/bintree');
var util=require('../Utility/utility')
var readline = require('readline-sync');
var take=require('util');
/**
 * function defination.
 */
function calender() {
    var month = +process.argv[2];
    var year = +process.argv[3];
    var answer = util.dayOfWeek(Number(1), Number(month), Number(year));
    console.log(answer);
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dates = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var months=["", "Jan", "Feb", "March", "April", "May", "Jun", "July", "Augest", "Sept", "Oct", "Nov", "Dec"];
    var leap = utility.findLeapYear(year);
    if (leap = true) {
        dates[2] = 29;
     }
    var dayQue=new access1.Queue;
    var dateQue=new access1.Queue;
    var stk=new access.Stack;
    var stk1=new access.Stack;
    for(let i=0; i<7;i++)
     {
        dayQue.enque(week[i]);
        stk.push(dayQue.deque());
     }
    for (let j=1;j<=dates[month]; j++)
     {
        dateQue.enque(j);
        stk1.push(dateQue.deque());
     }
    var rstk = stk.reversStack();
        var rstk1 = stk1.reversStack();
        for (let k = 0; k < 7; k++) {
            take.print(" " + rstk.pop());
         }
        console.log();
        for (let j = 0; j < (answer * 4 + 2); j++) {
            take.print(" ");
         }
        for (let j = 1; j <= dates[month]; j++) {
            var ch = rstk1.pop();
            if (ch < 10)
            take.print(ch, "   ");
            else {
                take.print(ch, "  ");
             }
            if ((answer + ch) % 7 == 0) {
                console.log();
                take.print(" ");
             }
        }
console.log("\n\n\n");
}
/**
 * function calls.
 */
calender();