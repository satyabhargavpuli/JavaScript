/* /*******************************************************************************************
 * Execution    :   1.default node       cmd> node primestack.js
 *                   
 * 
 * Purpose      :   Prime Number Program and store only the numbers in that range that are 
 *                  Anagrams using Stack. 
 * 
 * @description
 * 
 * @file        :   primestack.js
 * @overview    :   Store in Anagram numbers reverse order using Stack.
 * @author      :   Satya bhargav <Satyabhargav.puli@gmail.com>
 * @version     :   1.0
 * @since       :   23-03-2019
 * 
 * ********************************************************************************************/
/**
 * To require the required files.
 */
 try {
    var take = require("util");
    var utility = require("../Data_Structures/Implementation/numutil");
    var utilityDs = require("../Data_Structures/Implementation/stackutil");
    var arr = [];
    var stack = new utilityDs.Stacks();
    for (let i = 0; i <= 1000; i++) {
      if (utility.isPrime(i)) arr.push(i);
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (utility.isAnagram(arr[i], arr[j])) {
          stack.push(Number(arr[i]));
          stack.push(Number(arr[j]));
        }
      }
    }
    var result = stack.print();
    console.log("Anagrams which are prime in reverse order :");
    console.log(result + "\n");
  } catch (error) {
    console.log(error.message);
  }