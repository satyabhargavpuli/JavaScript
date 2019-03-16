/******************************************************************************
 *  Execution       :   1. default node          : cmd>node StopWatch.js 
 *                      
 * 
 *  Purpose         : Stopwatch Program for measuring the time that elapses 
 *                    between the start and end clicks
 * 
 *  @description    
 * 
 *  @file           : StopWatch.js 
 *  @overview       : Print the elapsed time
 *  @author         : Satya bhargav <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-03-2019
 *
 ******************************************************************************/
var watch=require('../Utility/utility')
const data=require('readline-sync')
function stopwtch(){
watch.stopwatch(data);
}
stopwtch();