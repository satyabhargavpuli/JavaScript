/* /*******************************************************************************************
 * Execution    :   1.default node       cmd> node primequeue.js
 *                   
 * 
 * Purpose      :   Prime Number Program and store only the numbers in that range that are 
 *                  Anagrams using Queue. 
 * 
 * @description
 * 
 * @file        :   primequeue.js
 * @overview    :   Store in Anagram numbers using Queue.
 * @author      :   Satya bhargav <Satyabhargav.puli@gmail.com>
 * @version     :   1.0
 * @since       :   23-03-2019
 * ********************************************************************************************/
/**
 * To require the required files.
 */
 try {
    var utilityDs = require("../Data_Structures/Implementation/queueutil");
    var utility = require("../Data_Structures/Implementation/numutil");
    var readline = require("readline-sync");
    var arr = [];
    var queue = new utilityDs.QueueLinked();
    for (let i = 0; i < 1000; i++) {
      if (utility.isPrime(i)) 
      arr.push(i);
     }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (utility.isAnagram(arr[i], arr[j])) {          
          queue.enqueue(Number(arr[i]));
          queue.enqueue(Number(arr[j]));
        }
      }
    }   
    console.log(" Anagrams in the range 0 to 1000 are:\n" + arr);
  } catch (error) {
    console.log(error.message);
  }