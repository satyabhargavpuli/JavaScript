/******************************************************************************
 *  Execution       :   1. default node          : cmd> node VenderMachine.js
 *                      
 * 
 *  Purpose         : Program to calculate the minimum number of Notes as well as 
 *                    the Notes to be returned by the Vending Machine as a Change

 * 
 *  @description    
 * 
 *  @file           : VenderMachine.js
 *  @overview       : Two Outputs - 
 *                     one the number of minimum Note needed to give the change and
 *                     second list of Rs Notes that would given in the Change
 *  @author         : Satyabhargav <Satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 12-03-2019
 *
 ******************************************************************************/
const Utility = require('../Utility/utility');
var userinp = require('readline-sync');

var value = userinp.question('Enter the amount for vending :');

function venderMachine() {
    Utility.vendingmachine(value);
}
venderMachine();