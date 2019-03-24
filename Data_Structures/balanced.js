/*****************************************************************************************
 * Execution    :   1.default node               cmd> node balanced.js
 *                   
 * 
 * Purpose      :   Take an Arithmetic Expression such as have balanced paranthesis or not
 * 
 * @description
 * 
 * @file        :   balanced.js
 * @overview    :   Use readfile to read all the words in the file with space as seperator.
 * @author      :   Satya bhargav <Satyabhargav.puli@gmail.com>
 * @version     :   1.0
 * @since       :   24-03-2019
 * 
 * *************************************************************************************/
/**
 * To require the required files.
 */    
var Utility=require('../Data_Structures/Implementation/stackutil');
var read=require('readline-sync');
/**
 * To write function.
 */
function Stack(){
var stack=new Utility.Stack;
var st = new Utility.Stack;
    var str = read.question("Enter your mathematical expression with parantheses : ");
    var ch, i;

    for (i = 0; i < str.length; i++) {

        ch = str.charAt(i);

        if (ch == '(' || ch == '[' || ch == '{') {
            st.push(ch);

        }
        else {
            switch (ch) {
                case ')':

                 if (st.pop() != '(') {

                    return false;
                    }
                break;
                case ']': 
                 if (st.pop() != '[') {

                    return false;
                 }
                break;
                case '}': 
                 if (st.pop() != '{') {
                     
                    return false;
                 } 
                break;
            }
        }


    }
    if (st.getSize() == 0) {
        return true;
    }
    return false;
}
/**
 * function calls .
 */
var bol = Stack();

/**
 * To check balanced or unbalanced.
 */
if (bol) {
    console.log("Mathematical expression is balanced");

}
else {
    console.log("Mathematical expression not balanced");
}