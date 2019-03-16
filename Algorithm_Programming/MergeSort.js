/******************************************************************************
 *  Execution       :   1. default node          : cmd> node MergeSort.js
 *                      
 * 
 *  Purpose         : Reads in array from standard input and prints them in 
 *                    sorted order.Uses mergesort.
 * 
 *  @description    
 * 
 *  @file           : MergeSort.js
 *  @overview       : Print the Sorted List
 *  @author         : Satya bhargav <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-03-2019
 *
 ******************************************************************************/
var mer=require('../Utility/utility');
const readline=require('readline-sync');
var num = readline.questionInt("Enter the number of elements you want to enter:");
console.log("Enter " + num + " elements: ");
var arr=[];
arr=mer.createArray(num);
arr=mer.mergesort(arr);
console.log(arr);