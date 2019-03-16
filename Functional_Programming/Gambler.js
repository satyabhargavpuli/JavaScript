/******************************************************************************
 *  Execution       :   1. default node          : cmd> node Gambler.js
 *                      
 * 
 *  Purpose         : To play Gambling game till player reaches his goal or losses all his money.
 * 
 *  @description    
 * 
 *  @file           : Gambler.js
 *  @overview       : To play Gambling game till player reaches his goal or losses all his money.
 *  @author         : satya bhargav <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 12-03-2019
 *
 ******************************************************************************/
const Utility=require('../Utility/utility')
const readline=require('readline-sync')
var stake=readline.question('please enter the stake :');
var goal=readline.question('please enter the goals : ');
//var number=readline.question('please enter number of times: ');
//Utility.gambler(stake,goal,number);//passing parameters and calling the function
Utility.gambler(stake,goal);//passing parameters and calling the function
