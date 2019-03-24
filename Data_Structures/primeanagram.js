/* /*******************************************************************************************
 * Execution    :   1.default node       cmd> node primeanagram.js
 *                   
 * 
 * Purpose      :   Prime Number Program and store only the numbers in that range that are Anagrams. 
 * 
 * @description
 * 
 * @file        :   primeanagram.js
 * @overview    :   store in a 2D Array the numbers that are Anagram and numbers that are not Anagram
 * @author      :   Satya bhargav <Satyabhargav.puli@gmail.com>
 * @version     :   1.0
 * @since       :   23-03-2019
 * ********************************************************************************************/
/**
 * To require the required files.
 */
 try {
    var utilityDs = require("../Data_Structures/Implementation/stackutil");
    var utility = require("../Data_Structures/Implementation/numutil");
    var util=require('../Utility/utility')
    var take = require("util");
    var readline = require("readline-sync");
    var array = [
      ["0-100 "],
      ["100-200  "],
      ["200-300 "],
      ["300-400 "],
      ["400-500 "],
      ["500-600 "],
      ["600-700 "],
      ["700-800 "],
      ["800-900 "],
      ["900-1000 "]
    ];
    var i = 0;
    var j = 1;
    var range = 100;
    var arr = [];
    var arr1 = [];
    for (let prime = 2; prime <= 1000; prime++) {
      if (util.isPrime(prime)) {
        if (prime <= range) {
          var a = "" + prime;
          var b = a.split("");
          b.sort();  
          var v = "";
          for (let i = 0; i < b.length; i++) {
            v = v + b[i];
           }
          if (!arr.includes(v)) {
            arr.push(v);
            array[i][j] = prime;
            j++;
           }
        } 
        else {
          var a1 = "" + prime;
          var b1 = a1.split("");
          b1.sort();
          var v1 = "";
          for (let i = 0; i < b1.length; i++) {
            v1 = v1 + b[i];
           }
          if (!arr1.includes(v1)) {
            arr1.push(v1);
            j = 1;
            range = range + 100;
            i++;
            array[i][j] = prime;
           }
        }
      }
    }
    /**
    * To call dArray() function.
    */
    var arr = utility.dArray();
    console.log("The prime numbers that are not Anagram present in the given range " );
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array[i].length; j++) {
        take.print(array[i][j] + " ");
       }
      console.log();
     }
  } catch (error) {
    console.log(error.message);
  }