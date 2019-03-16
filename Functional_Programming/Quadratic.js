/******************************************************************************
 *  Execution       :   1. default node          : cmd>node Quadratic.js 
 *                      
 * 
 *  Purpose         : To get the Quadratic of the given inputs
 * 
 *  @description    
 * 
 *  @file           : Quadratic.js
 *  @overview       : To mfind the root of an equation by positive and negative form
 *  @author         : Satya bhargav <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-03-2019
 *
 ******************************************************************************/
const Utility=require('../Utility/utility')
var input=require('readline-sync');
var a=input.questionInt("enter the value of a");
var b=input.questionInt("Enter the value of b");
var c=input.questionInt('Enter the value of c');
Utility.quadratic(a,b,c);
