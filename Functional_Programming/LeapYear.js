/*****************************************************************************************
 *purpose   : Print the String with User Name 
 * @file    :  LeapYear.js
 * @overview: Enter a year(format--yyyy)and validate the given input is leap year or not
 * @author  : satya bhargav
 * @version : 1.0
 * @since   : 11/03/2019 
 ***************************************************************************/
const Utility = require('../Utility/utility')
var readline = require('readline-sync');

function leap() {
    Utility.leap();//call from utility
}
leap();//method call