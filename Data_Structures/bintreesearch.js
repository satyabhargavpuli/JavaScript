/*****************************************************************************************
 * Execution    :   1. cmd> node bintreesearch.js
 *                   
 * 
 * Purpose      :   Number of Binary tree.
 * 
 * @description
 * 
 * @file        :   bintreesearch.js
 * @overview    :   Count number of possibilities binary trees commandline input.
 * @author      :   Satya bhargav <Satyabhargav.puli@gmail.com>
 * @version     :   1.0
 * @since       :   23-03-2019
 * 
 * *************************************************************************************/
/**
 * To require the required files.
 */
 var path=require('../Data_Structures/Implementation/bintree');
var readline=require('readline-sync');
var number = readline.questionFloat("Enter the number :");
var factorial = path.factorization(number);
var factorial1 = path.factorization(number * 2);
var factorial2 = path.factorization(number + 1);
/**
 * To output calculation formula.
 */
var output = factorial1 / (factorial2 * factorial);
console.log(output);