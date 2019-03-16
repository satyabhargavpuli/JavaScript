/******************************************************************************
 *  Execution       :   1. default node          : cmd> node PrimeNumbers.js
 *                      
 * 
 *  Purpose         : Prints N th numbers of prime numbers
 * 
 *  @description    
 * 
 *  @file           : PrimeNumbers.js
 *  @overview       : Prints prime numbers.
 *  @author         : satya bvhargav <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
const Utility = require('../Utility/utility')
var read=require('readline-sync');
var n=read.question("Enter number between 0 to 1000 : ");
function primenum(n){
for(let i=2;i<=n;i++){
var res=Utility.primenumber(i);
if(res){
    console.log(i);
}
}
}
primenum(n);
   


