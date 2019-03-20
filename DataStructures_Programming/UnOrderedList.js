/*****************************************************************************************
 *purpose   : Read from file the list of Words and take user input to search a Text

 * @file    :UnOrderedList.js
 * 
 * @overview: Read the Text from a file, split it into words and arrange it as Linked List. 
 *            Take a user input to search a Word in the List. If the Word is not found then add it to the list, and 
 *            if it found then remove the word from the List. In the end save the list into a file
 *                 
 * @author  :  satyabhargav     <satyabhargav.puli@gmail.com>    
 * @version : 1.0
 * @since   : 18/03/2019
 ***************************************************************************/
/**
         * @description:It is used to get access--(acts like a import)
         *  */
var access = require('../Utility/LinkedList');
var filestream = require('fs');
var readline = require('readline-sync');
var Util = require('../Utility/Read');
/**
 * @description: unorderlist it is a function 
 * @param: NO parameters passed
 */
function unOrderList() {

    var string = filestream.readFileSync('../UnFile.txt', 'utf8');
    var array = string.split(' ');
    var unorder = new access.LinkedList;
    for (let i = 0; i < array.length; i++) {

        unorder.add(array[i]);
    }
    unorder.show();
    var answer = readline.question("Enter the word  you want to search  :\n");
    if (!isNaN(answer)) {
        console.log("input should be in string form ");
        return;
    }
    else {
        /**
         * @description:it is used to search the content from the file
         */
        if (unorder.search(answer)) {
            unorder.remove(answer);

        }
        {
            /**
         * @description:it is used to add the content to the file
         */
            unorder.add(answer);
        }
    }
    console.log("Linked list elements are ");
    unorder.show();
}

unOrderList(); 