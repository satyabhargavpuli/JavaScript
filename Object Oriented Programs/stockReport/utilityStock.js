/******************************************************************************
 *  Execution       :   1. default node          : cmd> node stockUtility.js
 *                      2. if nodemon installed  : cmd> nodemon stockUtility.js
 *                        -nodemon helps in restart the program after every changes.
 *
 *  purpose         : To create inventory object from JSON and to calculate the value for every inventory.
 *
 *  @description    : To create a JSON file having Inventory Details for Rice, Pulses and
 *                    Wheats with properties name, weight, price per kg.
 *
 *  @file           : stockUtility.js
 *  @overview       : To calculate the total cost of each object in inventory for given quantity.
 * @author      :   satya bhargav         <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 27/03/2019
 *
 ******************************************************************************/
class Stock {
    constructor(name, share, price) {
        this.name = name;
        this.share = share;
        this.price = price;
    }
    sharePrice() {
        return this.share * this.price;
    }
}
module.exports = { Stock }