/*****************************************************************************************
 * Execution    :   1.default node           cmd> node palindromechecker.js
 *                   
 * 
 * Purpose      :  Show if the String is Palindrome or not.  
 *                   
 * 
 * @description
 * 
 * @file        :   palindromechecker.js
 * @overview    :   A palindrome is a string that reads the same forward and backward, for
 *                  example, radar, toot, and madam.
 * @author      :  Satya bhargav <Satyabhargav.puli@gmail.com>
 * @version     :   1.0
 * @since       :   23-03-2019
 * 
 * *************************************************************************************/
/**
 * To require the required files.
 */
var readline = require("readline-sync");
var accessDs = require("../Data_Structures/Implementation/queueutil");
/**
 * function defination.
 */
function palindromeCheck() {
  try {
    var deque = new accessDs.Deque();
    var flag = false;
    do {
      var word = readline.question("Enter the string :");
      if (!isNaN(word)) {
        console.log("Not a valid entry");
       } 
      else {
        flag = true;
       }
    } while (!flag);
    var arr = word.split("");
    for (let i = 0; i < arr.length; i++) {
      deque.addFront(arr[i]);
     }
    var string1 = "";
    debugger;
    for (let i = 0; i < arr.length; i++) {
      string1 = string1 + "" + deque.removeFront();
     }
    console.log(string1);
    var string2 = "";
    for (let i = 0; i < arr.length; i++) {
      deque.addFront(arr[i]);
     }
    for (let i = 0; i < arr.length; i++) {
      string2 = string2 + "" + deque.removeRear();
     }
    console.log(string2);
    if (string1 == string2) {
      console.log("Entered string is a palindrome ");
     } 
    else {
      console.log("Entered string is not a palindrome ");
     }
  } 
  catch (error) {
    console.log(error.message);
  }
}
/**
 * function calls.
 */
palindromeCheck();