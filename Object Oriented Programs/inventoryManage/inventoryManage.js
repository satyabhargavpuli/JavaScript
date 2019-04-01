/******************************************************************************
 *  Execution       :   1. default node          : cmd> node inventoryManage.js
 *                      2. if nodemon installed  : cmd> nodemon inventoryManage.js
 *                        -nodemon helps in restart the program after every changes.
 *
 *  purpose         : To create inventory object from JSON and to calculate the value for every inventory.
 *
 *  @description    : To create a JSON file having Inventory Details fo Stock 
 *                     with properties stockname, shares, price.
 *
 *  @file           : inventoryManage.js
 *  @overview       : To calculate the total cost of each object in inventory for given quantity.
 *  @author         : satya bhargav         <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 25/03/2019
 *
 ******************************************************************************/
var access = require('../inventoryManage/inventoryObject');
var read = require('readline-sync');
var fileRead = require('fs');
var data = fileRead.readFileSync('inventoryManage.json', 'utf8');
function inventoryManage() {
    try {
        var data1 = JSON.parse(data);
        var object = new access.inventoryManage
        /**
         * While loop to loop over the menu to choose by user.
         */
        here: while (ch != 5) {
            console.log("Press 1 to add :");
            console.log("Press 2 to remove :");
            console.log("Press 3 to edit :");
            console.log("Press 4 to print:");
            console.log("Press 5 to calculateValue :");
            console.log("Press 6 to exit :");

            var ch = read.questionInt("Enter the number :")
            /**
             * Switch case to choose one method depending on the user input.
             */
            switch (ch) {
                case 1:
                    object.add(data1)
                    break;
                case 2:
                    object.remove(data1)
                    break;
                case 3:
                    object.edit(data1)
                    break;
                case 4:
                    object.print(data1)
                    break;
                case 5: object.calculateValue(data1)
                    break;
                case 6:
                    break;
                default:
                    console.log("Please enter the correct number ");
                    break here;
            }
        }
    }
    catch (err) {
        console.log(err.message);
    }
} inventoryManage();
