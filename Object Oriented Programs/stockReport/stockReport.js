
/******************************************************************************
 *  Execution       :   1. default node          : cmd> node stockReport.js
 *                      2. if nodemon installed  : cmd> nodemon stockReport.js
 *                        -nodemon helps in restart the program after every changes.
 *
 *  purpose         : To  Print a Stock Report with total value of each Stock and the total value of Stock.
 *
 *  @description    : A program to read in Stock Names, Number of Share, Share Price. 
 *                    Print a Stock Report with total value of each Stock and the total value of Stock.
 *
 *  @file           : stockReport.js
 *  @overview       : To calculate total cost for number of shares.
 * @author          :   satya bhargav         <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 27/03/2019
 *
 ************************************************************************************************/
var utility = require('./utilityStock')
var read = require('readline-sync');
var fileread = require('fs')
var data = fileread.readFileSync('stockReport.json', 'utf8');
/**
 *@description:When receiving data from a web server, the data is always a string.
 *Parse the data with JSON.parse(), and the data becomes a JavaScript object. 
 */
 
var object = JSON.parse(data)
var sum = 0;
var stocks = object.Stock
function Stock() {
    try {
        /**
         * Loop the stocks and calculate the total value of share and price.
         */
        for (let key in stocks) {
            var name = stocks[key].stockName;
            var share = stocks[key].shares;
            var price = stocks[key].price;
            var total = share * price;
            console.log("The total value of " + stocks[key].stockName + " share is " + total);
            sum = sum + total;
            key = new utility.Stock(name, share, price)
        }
        console.log("\nTotal sum of rupees of all stock value is :" + sum + "\n");
    }
    catch (err) {
        console.log(err.message);
    }
}
Stock();