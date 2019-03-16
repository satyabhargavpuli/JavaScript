/******************************************************************************
 *  Execution       :   1. default node          : cmd>node TwoDArray.js 
 *                      
 * 
 *  Purpose         : A library for reading in 2D arrays of integers from 
 *                    standard input and printing them out to standard output.
 * 
 *  @description    
 * 
 *  @file           : TwoDArray.js 
 *  @overview       : Print function to print 2 Dimensional Array. In Java use 
 *                    PrintWriter with OutputStreamWriter to print the output to 
 *                    the screen.
 *  @author         : Satya bhargav <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-03-2019
 *
 ******************************************************************************/
const Utility=require('../Utility/utility')
var input=require('readline-sync')

var rowA=input.question('Enter A number');
var rowB=input.question('Enter B number');
var arr=[];
Utility.twoDArray(rowA,rowB,arr);
