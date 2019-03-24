/*************************************************************************************
 * Execution    :   1.default node           cmd> node unordered.js
 *                   
 *                  
 * 
 * Purpose      :   Search a element if present remove it otherwise add it to the file.
 * 
 * @description
 * 
 * @file        :   unordered.js
 * @overview    :   Use readfile to read all the words in the file with space as seperator.
 * @author      :   Satya bhargav <Satyabhargav.puli@gmail.com>
 * @version     :   1.0
 * @since       :   19-03-2019
 * 
 * *********************************************************************************/
/**
 * To require the required files.
 */
const read = require('readline-sync');
var ll = require('../Data_Structures/Implementation/listutil');
var util = require('../Utility/utility');
try {
    var linklist = new ll.LinkedList();
    let data = util.fileCall('file1.txt');
    for (let index = 0; index < data.length; index++)
        linklist.add(data[index]);
        var display = linklist.display();
        console.log(display);
    let name = read.question("Enter the data you want to search ");
    var check = linklist.search(name);
    console.log(check);
    if (check) {
        linklist.remove(name);
     }
    else {
        linklist.add(name);
     }
    var display = linklist.display();
    console.log(display);   
    util.writeFile('file1.txt', display)
} catch (err) {
    console.error(err);
}