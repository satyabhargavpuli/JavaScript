/******************************************************************************
 *  Execution       :   1. default node          : cmd> node tempconv.js
 *                      
 * 
 *  Purpose         : Given the temperature in fahrenheit as input outputs the 
 *                    temperature in Celsius or viceversa
 * 
 *  @description    
 * 
 *  @file           : tempconv.js
 *  @overview       : Prints converted output.
 *  @author         : Satyabhargav <Satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-03-2019
 *
 ******************************************************************************/
const Utility=require('../Utility/utility');
var input=require('readline-sync');

var temp=input.questionFloat('Enter the temperatute');
var i=input.questionFloat('Enter 1 for temperature || 2 for Celcius');


function temparatureConv()
{
   
    Utility.temparature(temp,1);
}
temparatureConv();