
/******************************************************************************
 *  Execution       :   1. default node          : cmd> node inventoryData.js
 *                      2. if nodemon installed  : cmd> nodemon inventoryData.js
 *                        -nodemon helps in restart the program after every changes.
 *
 *  purpose         : To create inventory object from JSON and to calculate the value for every inventory.
 *
 *  @description    : To create a JSON file having Inventory Details for Rice, Pulses and
 *                    Wheats with properties name, weight, price per kg.
 *
 *  @file           : inventoryData.js
 *  @overview       : To calculate the total cost of each object in inventory for given quantity.
 *  @author         : satya bhargav         <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 07/02/2019
 *
 ******************************************************************************/
var filestream = require('fs');
var access = require('../../Utility/utilityOops');
var data = filestream.readFileSync('inventoryData.json')
/**
 * @description:When receiving data from a web server, the data is always a string.
 * Parse the data with JSON.parse(), and the data becomes a JavaScript object.
 *
 */
var object = JSON.parse(data);
function inventory() {
    try {
        access.inventoryData(object);//Invoking the inventoryData function.
        var str = JSON.stringify(object);//Converting the object into JSON object. 
    } catch (err) {
        console.log(err.message);
    }
} inventory();