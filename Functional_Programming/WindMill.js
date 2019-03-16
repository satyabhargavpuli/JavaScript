/******************************************************************************
 *  Execution       :   1. default node          : cmd> node WindMill.js
 *                      
 * 
 *  Purpose         : Program to windchill. 
 * 
 *  @description    
 * 
 *  @file           : WindMill.js
 *  @overview       : Checking the Calculation by using the formulae.
 *  @author         : Satya bhargav <Satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-03-2019
 *
 ******************************************************************************/
const Utiltity=require('../Utility/utility')
var input=require('readline-sync')
var t=input.questionInt('enter the temp value');
var v=input.questionInt('Enter volume value');
Utiltity.windCall(t,v);