/******************************************************************************
 *  Execution       :   1. default node          : cmd> node addressBook.js
 *                      2. if nodemon installed  : cmd> nodemon addressBook.js
 *                        -nodemon helps in restart the program after every changes.
 *
 *  purpose         : To create a proper address book to store new address informations           
 *
 *  @description    : An address book holds a collection of entries, each recording a person's first and last names, address, city, state, zip, and
 *                    phone number.
 *
 *  @file           : addressBook.js
 *  @overview       : Add new entries each time and manage that address book and perform opeartions
 *                    like add,delete,search,update and sort information.       
 *  @author         : satya bhargav         <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 28/03/2019
 *
 ******************************************************************************/
var prompt = require('readline-sync')
var access = require('../addressBook/addressBookObject')
var fs = require('fs');
var data = fs.readFileSync('address.json', 'utf8');
var addressb = JSON.parse(data);
function addressBook()
 {
    try {
        outer: while (true) {
            var a = new access.Address;
            console.log("*****ADDRESS BOOK*****");
            console.log("1:Create Profile");
            console.log("2:Open Address Book");
            console.log("3:Exit");
            var choice1 = prompt.questionInt(" Enter your choice: ");
            /**
             * @description:Switch case to choose one case to create 
             * a account and open a Profile.
             */
            switch ((choice1)) {
                case 1:
                    a.createAddress(addressb);
                    break;
                case 2:
                    a.openProfile(addressb);
                    break;
                case 3:
                    break outer;
                default:
                    console.log("Please enter a valid option!!");
            }
        }
    } catch (err) {
        console.log(err.message);
    }
}
addressBook();