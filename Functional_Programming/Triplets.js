/******************************************************************************
 *  Execution       :   1. default node          : cmd> node Triplets.js
 *                      
 * 
 *  Purpose         : A program with cubic running time. Read in N integers and
 *                    counts the   number of triples that sum to exactly 0.
 * 
 *  @description    
 * 
 *  @file           : Triplets.js
 *  @overview       : One Output is number of distinct triplets as well as the
 *                    second output is to print the distinct triplets.
 *  @author         :  satya bhargav <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-03-2019
 *
 ******************************************************************************/
const Utility=require('../Utility/utility')
var input=require('readline-sync')
 
 var a=[];
 var inp=input.questionInt('Enter the number');


Utility.valuesOfThree(inp,a);