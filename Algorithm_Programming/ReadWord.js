/******************************************************************************
 *  Execution       :   1. default node          : cmd> node binword.js
 *                      
 * 
 *  Purpose         : The program reports if the search word is found in the list.
 * 
 *  @description    
 * 
 *  @file           : binword.js
 *  @overview       : Print the result if the word is found or not
 *  @author         : Satya bhargav <Satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-03-2019
 *
 ******************************************************************************/
const readline=require('readline-sync');
var file=require('fs');
var f=file.readFileSync('../file.txt','utf8');
var arr=f.split(' ');
var word=readline.question("enter a search word ");//(hi to now)
if(arr.includes(word)){
    console.log("Is there");
}else{
    console.log("Not");
}