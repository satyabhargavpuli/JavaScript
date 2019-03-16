/******************************************************************************
 *  Execution       :   1. default node          : cmd> node ToBinary.js
 *                      
 * 
 *  Purpose         : Convert decimal to binary numbers
 * 
 *  @description    
 * 
 *  @file           : ToBinary.js
 *  @overview       : prints binary numbers
 *  @author         : Satya bhargav<satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-03-2019
 *
 ******************************************************************************/
var tobinry=require('../Utility/utility');
const readline=require('readline-sync');
var num=readline.questionInt("enter number : ");
tobinry.tobinary(num);