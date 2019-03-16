/******************************************************************************
 *  Execution       :   1. default node          : cmd> node palindrome.js
 *                      
 * 
 *  Purpose         : Print palindrome numbers and two numbers compare anagram or not
 * 
 *  @description    
 * 
 *  @file           : palindrome.js
 *  @overview       : prints palindrome and anagram numbers
 *  @author         : satyabhargav  <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
const Utility=require('../Utility/utility');
var readline=require('readline-sync');
function palindrome()
{ var number=readline.question("enter number to find palindrome");
    Utility.palindrome(number);
}

palindrome();