/******************************************************************************
 *  Execution       :   1. default node          : cmd> node regularExpression.js
 *                      2. if nodemon installed  : cmd> nodemon regularExpression.js
 *                        -nodemon helps in restart the program after every changes.
 *
 *  purpose         : To replace Name, Username, Mobile number with given input from user  .
 *
 *  @description    : To Hello <<name>>, We have your full name as <<full name>> in our system.
 *                    your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification
 *                    Thank you BridgeLabz 01/01/2016. Use Regex to replace name, full name, Mobile#,
 *                    and Date with proper value.
 *
 *  @file           : regularExpression.js
 *  @overview       : To reaplce name, fullname, mobile number using regex and to update current date.
 *  @author         :   satya bhargav         <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 7/02/2019
 *
 ******************************************************************************/
var access = require('../Utility/utilityOops');
var readline = require('readline-sync');
var flag = false;
function regularExpression() {
    try {
        /**
         * Input validations.
         */
        do {
            var name = readline.question("Enter  your name :")
            if (!isNaN(name)) {
                console.log(" Please enter valid name........ ");

            } else {
                flag = true;
            }
        } while (!flag)
        var fullname = readline.question("Enter your fullname :")
        /**
         * Input validations.
         */
        do {
            if (!isNaN(fullname)) {
                console.log("Please enter valid fullname :");

            } else {
                flag = true;
            }
        } while (!flag)
        var number = readline.question("Enter your phone number :")
        /**
         * Input validations.
         */
        while (isNaN(number) || number.length != 10) {

            console.log("Please enter your correct phone number :");
            number = readline.question("Enter your phone number :")
        }
        /**
         * create new date object.
         */
        var ds = new Date();
        dt = ds.getDate() + "/" + (ds.getMonth() + 1) + "/" + ds.getFullYear();
        access.regularExpression(name, fullname, number, dt)
    }
    catch (err) {
        console.log(err.message);
    }
} regularExpression();

