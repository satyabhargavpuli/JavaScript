/******************************************************************************
 *  Execution       :   1. default node          : cmd> node SquareRoot.js
 *                      
 * 
 *  Purpose         : Compute the square root of a nonnegative number c given
 *                    in the input using Newton's method.
 * 
 *  @description    
 * 
 *  @file           : SquareRoot.js
 *  @overview       : Sqrt of given number.
 *  @author         : satyabhargav <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-03-2019
 *
 ******************************************************************************/
var Utility=require('../Utility/utility');
var readline=require('readline-sync');
function sqfun(){
    var num=readline.questionInt("enter non negative value : ");
    Utility.sqrtfun(num);
}
 sqfun();