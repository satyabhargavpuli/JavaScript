/******************************************************************************
 *  Execution       :   1. default node          : cmd>node DaysInWeek.js 
 *                      
 * 
 *  Purpose         : Entered date comes which day
 *                    Enter the data of filename.js and pass the arguments
 *                    ->process.argv[] is used like command line arguments 
 * 
 *  @description    
 * 
 *  @file           : DaysInWeek.js
 *  @overview       : Output prints like 'sunday' ie:The day falls on (monday/././..)
 *  @author         : Satya bhargav <Satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-03-2019
 *
 ******************************************************************************/
var dayof=require('../Utility/utility')
const readline=require('readline-sync')
function dayOfWeek() {
    var d = +process.argv[2];
    var m = +process.argv[3];
    var y = +process.argv[4];
    var num = dayof.dayOfWeek(d, m, y);
    var res = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "saturday"];
    if (num <= res.length) {
        console.log("The day falls on :" + res[num]);
    }
    else {
        console.log("Invalid day ");
    }
}
dayOfWeek();