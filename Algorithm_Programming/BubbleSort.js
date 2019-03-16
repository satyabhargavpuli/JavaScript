/******************************************************************************
 *  Execution       :   1. default node          : cmd> node bubblesort.js
 *                      
 * 
 *  Purpose         : Reads in integers prints them in sorted order using Bubble Sort
 * 
 *  @description    
 * 
 *  @file           : bubblesort.js
 *  @overview       : Print the Sorted List
 *  @author         : Satya bhargav <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-03-2019
 *
 ******************************************************************************/
var buble=require('../Utility/utility');
const readline=require('readline-sync');
var num = readline.questionInt("Enter the number of elements you want to enter:");
console.log("Enter " + num + " elements: ");
var arr=[];
arr=buble.createArray(num);
arr=buble.sortbubble(arr);
console.log(arr);