/******************************************************************************
 *  Execution       :   1. default node          : cmd>node CouponNumber.js 
 *                      
 * 
 *  Purpose         : Generate random coupon number 
 * 
 *  @description       
 * 
 *  @file           : CouponNumber.js
 *  @overview       : Total random number needed to have all distinct numbers
 *  @author         : Satya bhargav <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 05-feb-2019
 *
 ******************************************************************************/
const Utility=require('../Utility/utility')

var input=require('readline-sync')

var coupNum = input.questionInt("Enter the number to  generate coupons");
Utility.coupon(coupNum);


   