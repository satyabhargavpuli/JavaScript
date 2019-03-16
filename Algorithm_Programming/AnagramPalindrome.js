/******************************************************************************
 *  Execution       :   1. default node          : cmd> node AnagramPalindrome.js
 *                      
 * 
 *  Purpose         : Print palindrome numbers and two numbers compare anagram or not
 * 
 *  @description    
 * 
 *  @file           : AnagramPalindrome.js
 *  @overview       : prints palindrome and anagram numbers
 *  @author         : Satya bhargav <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-03-2019
 *
 ******************************************************************************/
var palindrme=require('../Utility/utility')
const readline=require('readline-sync')
function palindrome(){
    console.log("program start..");
    palindrme.isPalimdromeAnagram();
}
palindrome();