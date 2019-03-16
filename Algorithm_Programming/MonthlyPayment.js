/******************************************************************************
 *  Execution       :   1. default node          : cmd> node MonthlyPayment.js
 *                      
 * 
 *  Purpose         : To calculate monthly payment.
 * 
 *  @description    
 * 
 *  @file           : MonthlyPayment.js
 *  @overview       : Displays calculation results.
 *  @author         : Satya bhargav<satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-03-2019
 *
 ******************************************************************************/
var monPay=require('../Utility/utility');
const readline=require('readline-sync');
var p=+process.argv[2];
var y=+process.argv[3];
var r=+process.argv[4];
monPay.payment(p,y,r);