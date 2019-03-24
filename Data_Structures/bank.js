/*****************************************************************************************
 * Execution    :   1.default node               cmd> node queue.js
 *                   
 * 
 * Purpose      :   Program which creates Banking Cash Counter where people come in to 
 *                  deposit Cash and withdraw Cash. 
 * 
 * @description
 * 
 * @file        :   queue.js
 * @overview    :   Banking Cash Counter where people come in to deposit Cash and withdraw
 *                  Cash. Maintain the Cash Balance.
 * @author      :   Satya bhargav <Satyabhargav.puli@gmail.com>
 * @version     :   1.0
 * @since       :   23-03-2019
 * 
 * *************************************************************************************/
/**
 * To require the required files.
 */
var util=require('./Implementation/queueutil')
var readline=require('readline-sync')
/**
 * function defination.
 */
function Queue() 
{ 
    var req = new util.Queue;
    var put =[];
    var totalbankcash = 10000;
    var flag = true
    var ask = readline.question("Enter the total number of people ");
    var amt=totalbankcash;
       if(ask>0){
        for (var i = 1; i <= ask; i++) {
            
            var ans = readline.question("Press 1 to deposit the cash\npress 2 to withdraw the cash \n ");
            if (ans == 1) {
                var amount = readline.question("Enter total amount do you want to Deposit : ");
                var put = req.enque(Number(amount));
                flag= true;
                amt=Number(amt)+Number(amount);
                console.log("balance amount : "+amt);
                
             }
            else if (ans == 2) {
                var amount = readline.question("Enter total amount do you want to Withdraw : ");
                var get = req.enque(Number(-amount));
                flag= true;
                amt=Number(amt)-Number(amount);
                console.log("balance amount : "+amt);
             }
            else {
                console.log("Make sure that, you entered the correct key ");
                flag= false;
                return;
             }
         }
        }
        else{
            console.log("Invalid input ");
            return;
        }
    
    
    if (flag) {
        var addition = 0;
        for (let i = 1; i <= ask; i++) {
            addition = (addition + req.deque());
         }
        console.log(addition);
        var totaltransaction = totalbankcash + addition;
        console.log("At the end of the day Total amount left in the bank ", totaltransaction);
        if (totaltransaction < totalbankcash) {
            console.log("Minimum bank cash is not Maintained");
         } 
        else {
            console.log("Minimum bank cash is maintained");
         }
     }
}
/**
 * function calls.
 */
Queue();