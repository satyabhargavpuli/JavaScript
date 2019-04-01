/******************************************************************************
 *  Execution       :   1. default node          : cmd> node Anagram.js
 *                      
 * 
 *  Purpose         : One string is an anagram of another if the second is simply
 *                    a rearrangement of the first. and check anagrams.
 * 
 *  @description    
 *  @file           : Anagram.js
 *  @overview       : The Two Strings are Anagram or not.
 *  @author         : Satya bhargav<satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 12-03-2019
 *
 ******************************************************************************/
const Utility=require('../Utility/utility');
var input=require('readline-sync');
var input1=input.question('Enter a name  ');
var input2=input.question('Enter another name ');
var anagram=Utility.anagram(input1, input2);
if (anagram==true)
{
    console.log("The string "+input1+" and "+input2+" are anagram");
    
}
else
{
    console.log("The string "+input1+" and "+input2+" are not anagram");
    
}