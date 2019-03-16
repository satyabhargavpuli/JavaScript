/******************************************************************************
 *  Execution       :   1. default node          : cmd> node Distance.js
 *                      
 * 
 *  Purpose         : To find the distance of two points 'x' & 'Y' from origin.
 * 
 *  @description    
 * 
 *  @file           : Distance.js
 *  @overview       : The formulae to calculate distance = sqrt(x*x + y*y).
 *  @author         : satyabhargav <satyabhargav@gmail.com>
 *  @version        : 1.0
 *  @since          : 12-03-2019
 *
 ******************************************************************************/
const Utility=require('../Utility/utility')
var input=require('readline-sync')
var disA=input.questionInt('Enter a number');
var disB=input.questionInt('enter b number');
var res=Utility.distance(disA,disB);
console.log(res);

