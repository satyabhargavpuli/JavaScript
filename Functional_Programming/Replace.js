/*****************************************************************************************
 *purpose   : Print the String with User Name 
 * @file    :  Replace.js
 * @overview: Take User Name as Input. Ensure UserName has min 3 char ,Replace <<UserName>> with the proper name
 * @author  : satya bhargav       <satyabhargav.puli@gmail.com>
 * @version : 1.0
 * @since   : 11/03/2019 
 ***************************************************************************/

const Utility = require('../Utility/utility')
var readline = require('readline-sync');
function replace() {
       try {
              var readinput = readline.question("Enter your name");
              if (!isNaN(readinput)) throw "Enter only words"
              Utility.replace(readinput);
       }

       catch (err) {
              console.log(err)
       }//catch close

}
replace();//call method

