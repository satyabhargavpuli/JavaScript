/*****************************************************************************************
  Execution       :   1. default node         cmd   <node FlipCoin.js>
*purpose   : Flip the coin to check the count of heads and tails and percentage 

 * @file    :  FlipCoin.js

 * @overview: Take input from user and check by using random method

 * @author  : satya bhargav
 * 
 * @version : 1.0
 * 
 * @since   : 11/03/2019 
 ***************************************************************************/
const Utility = require('../Utility/utility')
var inputnum = require('readline-sync')

function flip() {
    Utility.flip();
}
flip();






