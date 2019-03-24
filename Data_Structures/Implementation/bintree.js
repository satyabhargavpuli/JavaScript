/*****************************************************************************************
 * 
 * Purpose      :   Functional implementation.
 * 
 * @description
 * 
 * @file        :   bintree.js
 * @overview    :   BinarySearchTree and findLeapYear functions.
 * @author      :   Satya bhargav <Satyabhargav.puli@gmail.com>
 * @version     :   1.0
 * @since       :   24-03-2019
 * 
 * *************************************************************************************/
// ********************************* Required functions *********************************/ 
module.exports={ 
    

    factorization(number) {
        try {
          var fact = 1;
          for (let i = 1; i <= number; i++) {
            fact = fact * i;
          }
          return fact;
        } catch (error) {
          console.log(error.message);
        }
      },

    findLeapYear(year)
    {
        if(year>999 && year<10000)
        {
        if(year%4 == 0 && (year%400 == 0 || year%100!= 0))
        {
            console.log(year+" is a Leap year.")
        }
        else
        {
            console.log(year+" is not a Leap year.")
        }
        }
        else
        {
        console.log("Please enter valid 4 digit year format.");
    
        }
    }
 }
 //************************************* end *********************************/
