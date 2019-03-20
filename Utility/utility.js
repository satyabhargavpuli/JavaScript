/******************************************************************************
 *  Execution       :   1. default node         
 * cmd> node Utility.js 
 *                      
 * 
 *  Purpose         : To deploy all the business logic.
 * 
 *  @description    
 *  @file           : utility.js
 *  @overview       : ALl the business logic present here.
 *  @module         : read-line modules are installed
 *  @author         : SATYA BHARGAV
 *  @version        : 10.0
 *  @since          : 11-03-2019
 *
 ******************************************************************************/
/*
*@purpose : To get user input value 
*@description : call this method whenever we want take input from user
                and return the value.
*/
const readline = require('readline-sync');

/*
    * Purpose   : By ensuring username with minimum 3 characters,replacing USERNAME with userinput
    *             and print the string.
*/
/*  Description  : Declaring the function with arguments as user, given by the user
*/
module.exports =

    {
        replace(readinput) {
            if (readinput.length >= 3) {
                console.log("Hello " + readinput + ", how are you?");

            }
            else {
                console.log("Re-enter the user name")
            }
        },

        /************************************* Flip Coin *****************************************/
        /* Flip Coin
        *---------------
        * @purpose : By using random function flip the coin. accept user input to flip number of times to flip coin
        *            and print the percentage of head vs tails
        *
        * @description : Declaring a function and passing the userinput for fliping the coin
        *                no of times
        * @function: coinflip takes the no of times to flip coin and print the percentage of
        *            head and tail
        */


        flip(inp) {
            try {
                var head = 0;
                let tail = 0;
                var flip = readline.question("Enter the number to flip the coin");//getting input from console

                for (var i = 1; i <= flip; i++) {
                    var click = readline.question('please press any key');
                    var inp = Math.floor(Math.random() * 2)
                    {
                        if (inp == 1) {
                            head++;
                            console.log(inp);
                        }
                        else {
                            tail++;
                            console.log(inp);
                        }
                    }
                    console.log('The percentage of heads is:' + (head / flip) * 100)
                    console.log('the percentage of tails is :' + (tail / flip) * 100)

                    console.log(head);
                    console.log(tail);
                }
            }
            catch (err) {
                console.log(err)
            }//catch
        },//fun()

        /**************************************** Leap year ************************************/
        /*3. Leap year
        *--------------
        * @purpose : Accept four digit input of year from the user and check given inputs is Leap year or not
        *
        * @description : Declaring a function and passing the four digit number from  user input.
        *                
        * @function: function checks length of the given number, if length equals to 4, then it prints
        *given number is Leap year or not.
        */
        //leap year
        leap(year) {
            try {
                var year = readline.questionInt('Enter 4 digit number ');

                if ((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)) {
                    console.log('leap year')
                }
                else {
                    console.log('not a leap year')
                }
            } catch (err) {
                console.log(message.err);

            }
        },
        /*********************************** Power of Two ****************************************/
        /* 4. Power of Two
        *------------------
        * @purpose : To Accept value of "N" from user and prints a table of the powers of 2 
        *that are less than or equal to 2^N. value of N should be less then 31.
        *
        * @description : Prints the value of two's power
        *                
        * @function: function checks the given number is less then 31, if less then 31, then it prints
        the value of two's power i.e., 2^N value.
        */

        //PowerOfTwo
        powerOfTwo() {

            try {
                var number = readline.question('Enter the number between 0 and 31');
                if ((number >= 0) && (number <= 31)) {
                    power = Math.pow(2, number)
                    console.log("The power of 2^" + number + " is " + power)
                }
            } catch (err) {
                console.log(err);
            }
        },
        //********************************** Harmonic Number **********************************/
        /* 5. Harmonic Number 
        *--------------------
        * @purpose : To generate Harmonic numbersTo Accept value of "N" from user and prints a table of the powers of 2 
        *that are less than or equal to 2^N. 
        *
        * @description : To generate sum of harmonic numbers by accepting input from user.
        *                
        * @function: function Harmonic function takes user input and sum it number of times that user given.
        */
        //harmonicNum
        harmonicNum() {
            try {


                var sum1 = 0;
                var inp = readline.question('Enter a number');
                for (let sum = 1; sum <= inp; sum++) {
                    sum1 = sum1 + 1 / sum;
                    //  console.log(sum1);
                }
                console.log(sum1);
            } catch (error) {

            }
        },
        /********************************** Factor ******************************************/
        /*6. Factors 
        *-----------
        * @purpose : To compute the prime factorization of N using brute force.
        *
        * @description : To compute the prime factorization of N by accepting input from user.
        *                
        */
        //PrimeFactors
        primeFactNumber() {
            try {
                var inputNum = readline.question('enter a number for factors')

                for (let num = 2; num < inputNum; num++) {
                    while (inputNum % num == 0) {
                        console.log(num);
                        inputNum = inputNum / num;

                    }
                }
                if (inputNum > 2) {
                    console.log(inputNum);

                }
            } catch (err) {
                console.log(err);

            }
        },
        /*7. Gambler 
        *************************************************************************************
        * @purpose : Simulates a gambler who start with some initial stake amount and place fair 1 bets until 
        *he/she goes broke (i.e. has no money) or reach goal(gains expected amount). Keeps track of the number of 
        *times he/she wins and the number of bets he/she makes. will run the experiment N times, 
        *averages the results, and prints them out.
        *
        * @description : Play till the gambler is broke or has won
        ***********************************************************************************              
        */
        /* gambler(stake,goal,number){
             var win=0,loss=0;
             for(let i=0;i<=goal;i++){
                 while(stake>0 && stake<number && goal>0){
                     if(Math.random()<0.5){
                         stake++;
                         win++;
                         goal--;
                     }else{
                         stake--;
                         loss++;
                         goal--;
                     }
                 }
             }
             var perwin=(win*100)/(win+loss)
             var perloss=(loss*100)/(win+loss);
     
             console.log("The gambler is won : "+win);
             console.log("The gambler is loss : "+loss);
             console.log("Win percentage is : "+perwin+" %");
             console.log("Loss percentage is : "+perloss+" %");
         },
         */
        //second type of method
        gambler(stake, goal) {
            try {
                var win = 0, loss = 0;
                for (let i = 0; i <= goal; i++) {
                    while (stake != 0 && stake != goal) {
                        if (Math.random() < 0.5) {
                            stake++;
                            win++;
                        } else {
                            stake--;
                            loss++;
                        }
                    }
                }
                var perwin = (win * 100) / (win + loss)
                var perloss = (loss * 100) / (win + loss);

                console.log("The gambler is won : " + win);
                console.log("The gambler is loss : " + loss);
                console.log("Win percentage is : " + perwin + " %");
                console.log("Loss percentage is : " + perloss + " %");
                console.log("Remaining stack amount is " + stake);

            } catch (error) {

            }
        },

        //*********************************** Coupon Numbers **************************************/
        /*8. Coupon Numbers
        *
        * @purpose : Given N distinct Coupon Numbers, how many random numbers do you 
        *need to generate distinct coupon number? This program simulates this random process.
        *
        *
        * @description : total random number needed to have all distinct numbers.
        *                
        */
        coupon(coupNum) {
            try {
                var ar = [];
                for (var i = 0; i < coupNum; i++) {
                    ar[i] = Math.floor(Math.random() * coupNum);
                    for (var j = 0; j < i; j++) {
                        if (ar[i] == ar[j]) {
                            i--;
                        }
                    }
                }
                console.log(ar);
            }
            catch (err) {
                console.log(err);

            }
        },


        //*********************************** 2D Array **************************************/
        /*9. 2D Array
        *
        * @purpose : Given N distinct Coupon Numbers, how many random numbers do you 
        *need to generate distinct coupon number? This program simulates this random process.
        *
        *
        * @description : total random number needed to have all distinct numbers.
        *                
        */
        //2-D array

        twoDArray(rowA, rowB, arr) {
            try {
                for (let i = 0; i < rowA; i++) {
                    arr.push([]);
                    for (var j = 0; j < rowB; j++) {
                        arr[i][j] = readline.questionInt("Enter two values of " + i + " and " + j + ":");
                    }
                }
                console.log('Two dimenstional array elements are:');
                for (let i = 0; i < rowA; i++) {
                    console.log(arr[i]);


                }
            } catch (error) {

            }
        },
        //***************************** Sum of three Integer adds to ZERO ***********************/
        /*10. Sum of three Integer adds to ZERO
        *------------------
        * @purpose : A program with cubic running time. Read in N integers and counts the 
        *number of triples that sum to exactly 0.
        *
        *
        * @description :Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
        *                
        */

        //triplets
        valuesOfThree(inp, a) {
            try {

                for (let i = 0; i < inp; i++) {
                    a[i] = readline.questionInt("Enter the array elements of " + i + ":");
                }
                count = 0;
                for (let i = 0; i < inp; i++) {
                    for (let j = i + 1; j < inp; j++) {
                        for (let k = j + 1; k < inp; k++) {
                            if (Number(a[i]) + "" + Number(a[j]) + "" + Number(a[k]) == 0);
                            {
                                count++;
                                console.log(a[i] + " " + a[j] + " " + a[k]);

                            }
                        }
                    }
                }
                console.log(+count);
            } catch (error) {

            }
        },
        //************************************* Distance ***************************************/
        /*11. Distance
        *-------------
        * @purpose : A program with cubic running time. Read in N integers and counts the 
        *number of triples that sum to exactly 0.
        *
        *
        * @description :Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
        *                
        */
        //distance

        distance(disA, disB) {
            try {
                var res = Math.sqrt(disA * disA, disB * disB);
                return res;
            } catch (error) {

            }
        },

        /**********************************************. Wind Chill*******************************************************
        *-----------------
        * @purpose : To find the windchill. The temperature t (in Fahrenheit) and the
        * wind speed v (in miles per hour),the National Weather Service defines the 
        *effective temperature (the wind chill) .
        *
        * @description : The formula is given by the national weather service. Formula is not
        * valid if t is larger than 50 in absolute value or if v is larger than 120 or less than 3  
        *                
        */

        windCall(t, v) {
            try {
                if (t <= 50 && v < 120 || v > 3) {
                    var w = (35.74 + 0.6215) * t + ((0.4275 * t) - 35.75) * Math.pow(2, 0.16);
                    console.log(w);
                }
                else {
                    console.log('re-enter the correct temp or volume');
                }
            } catch (error) {

            }
        },
        //************************************* Root of a equation ***************************************/
        /*15. Root of a equation
        *-----------------
        * @purpose : To find the roots of the equation a*x*x + b*x + c. 
        *Since the equation is x*x, hence there are 2 roots. The 2 roots of the equation can be 
        *found using a formula.
        *
        *
        * @description : Take a, b and c as input values to find the roots of x.
        *                
        */
        //quadratic equation
        //delta=b*b-4*a*c
        //Root 1 of x = (-b + sqrt(delta))/(2*a)
        //Root 2 of x = (-b - sqrt(delta))/(2*a)
        quadratic(a, b, c) {
            try {
                var nroot = (b * b - (4 * a * c));
                console.log(nroot);

                var denom = (2 * a);
                console.log(denom);

                // var rootp = Number((-b +Math.sqrt( nroot)) / denom);
                // var rootn = Number((-b -Math.sqrt( nroot)) / denom);
                var root1 = (-b + (Math.sqrt(nroot))) / 2 * a;
                var root2 = (-b - (Math.sqrt(nroot))) / 2 * a;
                console.log(root1);
                console.log(root2);
            } catch (error) {

            }
        },

        /******************************* StopWatch(13) *********************************************************************
        *
        * @purpose : A Stopwatch Program used for  measuring the time, that elapses between 
        the start and end clicks.
        *
        *
        * @description :Measure the elapsed time between start and end.
        *                
        *************************************************************************************/
        stopwatch(data) {
            try {
                var start = 0, stop = 0;
                var time1 = data.question("Press 0 to start timer : ");
                {
                    var time2 = 0;
                    start = this.currentSeconds();
                    var time2 = data.question("Press 1 to stop timer : ");
                    {
                        stop = this.currentSeconds();
                        console.log("elapsed time is : " + (stop - start) + " seconds");
                    }
                }
            } catch (error) {

            }
        },
        /*
       * @description: return the time in seconds ie:getSeconds
       */
        currentSeconds() {
            var date = new Date();
            return date.getSeconds();
        },



        /*******************************Algorithm_Programming********************************************************/
        /* Anagram Detection
        *-----------------
        * @purpose : Take 2 Strings as Input such abcd and dcba and Check for Anagrams
        *
        * @description : One string is an anagram of another if the second is simply a rearrangement 
        * of the first. For example, 'heart' and 'earth' are anagrams...  
        *                
        */

        anagram(input1, input2) {
            try {
                var store1 = [];
                var store2 = [];
                store1 = input1.toLowerCase();
                store2 = input2.toLowerCase();
                // console.log(store1.length);

                if (store1.length != store2.length) {

                    //console.log('re-enter the correct name');
                    return false;

                }
                else {
                    var a = [], b = [];
                    //console.log(store1);

                    a = store1.split('');
                    //  console.log(a);

                    b = store2.split('');
                    store1 = a.sort();
                    // console.log(store1);                   
                    store2 = b.sort();
                    if (store1.length == store2.length) {
                        var k = 0;
                        while (k < store1.length) {
                            
                            for (let i = k; i < store1.length; i++) {

                                if (store1[k] != store2[i]) {
                                    return false;
                                }
                                else {
                                    k++;
                                }
                            }
                            return true;

                        }

                    }

                }
            } catch (err) {
                console.log(err);

            }
        },
        /************************************ Is Prime Number **********************************/
        /*1.1 Is Prime Number
        *-----------------
        * @purpose : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
        *
        * @description : Find prime Numbers 
        *                
        */
        primenumber(n) {
            try {
                if (!Number.isInteger(n) || (n == 0) || n == 1) {
                    return false;
                } else {
                    for (let i = 2; i < n; i++) {
                        if (n % i == 0) {
                            return false;
                        }
                    }
                    return true;
                }
            }

            catch (error) {

            }

        },
        /************************************ is Palimdrome **********************************/
        /* Is Palindrome
        *
        * Purpose      : Use the random number that should print in the reverse order . then, the 
        * reverse ordered string or number must be equal to given user input.it is similar to anagram
        *
        *  @descriptipn: Declaring the function and passing the userinput as argument.
        *  @function   : Diplayname takes the userinput and print it with palinddrome.
                     
        */
        palindrome(number) {
            try {

                var temp = number;
                var rem = 0;
                //loop untill num is not equal to zero
                while (number != 0) {
                    
                    var r = number % 10;
                    //take reminder of the number 
                    rem = rem * 10 + r;
                    //keep on adding element 
                    number = Math.floor(number / 10);
                    //devide the number to get next digit of given number  
                }// check both number are equal and return result
                if (rem == temp) {
                    console.log(" it is palindrome number  " + temp);
                }
                else {
                    console.log(" it is not palindrome number");
                }
            } catch (error) {

            }
        },
        swaping() {
            try {
                // x- decimal value
                var x = 2;
                // formula to return binay value using bitwise operator
                return (Math.floor((x & 0x0F) << 4 | (x & 0xF0) >> 4));
            } catch (error) {

            }
        },

        /* ********************* temperature convertion depending on user************************/
        /* Temperature Conversion based on formulae
        * Purpose     : It is used to calculate the temperature based on our formulae.
        * @descriptipn: Declaring the function and passing the userinput as argument.
        * @function   : Diplayname takes the userinput and print it with some sentence.                    
        */

        temparature(temp, i) {
            try {
                var ctf, ftc;
                if (i == 1) {
                    ctf = (temp * 9 / 5) + 32;
                    console.log("the value of celsius to fahrenheit is :" + ctf);

                }
                if (i == 2) {
                    ftc = (temp - 32) * 5 / 9;
                    console.log("the value of fahrenheit to celsius is :" + ftc);
                }
            } catch (error) {

            }
        },
        /****************************************Vending-Machine******************************************* */

        /* *@Purpose : is to dispence total minimum number of notes from vending machine 
     *@Parameter   : value-user inputed value
                 i - zero
                 TOTAL-zero
     *@Description : take a number from user and calculate minimum number of notes has to return 
                     vending machine use recursion method,and return the value  
     */
        vendingmachine(value, TOTAL, i) {/*
            
        *  array to store values of notes
        */try {
                var notes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
                /*
                     * Function to find the notes and print the output
                     * 
                     * @Parameter value the amount to which the note to dispenced
                     */
                for (var i = 0; i < notes.length; i++) {
                    if (Math.floor(value / notes[i] != 0)) {
                        TOTAL = TOTAL + Math.floor(value / notes[i]);
                        console.log(notes[i] + "rs notes " + Math.floor(value / notes[i]));
                        value = value % notes[i];
                    }

                    if (value == 0) {
                        console.log(" total notes " + TOTAL)
                    }
                }
            } catch (error) {

            }
        },

        /* ************************** squareroot of given number********************************/
        /* Square root of a number
        
        * Purpose     :It is used to generate the random numbers that can be squared by a formula
                       finally that must be in positive value.
        * @descriptipn:Declaring the function and passing the userinput as argument.
        * @function   :Diplayname takes the userinput and print it with some sentence.                    
        */
        sqrtfun(num) {
            try {
                if (num > 0) {
                    var t = num;
                    var epsilon = 1e-15;
                    while (Math.abs(t - num / t) > epsilon * t) {
                        t = (num / t + t) / 2;
                    }
                    console.log("square root of non negative number is : " + t);
                }
                else {
                    console.log("Invalid or negative number");
                }

            } catch (error) {

            }
        },

        /* ************************************ day In week ***********************************/
        /* Day In week
        
        * Purpose     : It is used to calculate the respective day from our given input.
                        that is depends on given day ,month and year.
        *
        * @descriptipn: Declaring the function and passing the userinput as argument.
        * @function   : Displayname takes the userinput and print it with some sentence.                    
        */
        dayOfWeek(d, m, y) {
            var y0 = y - Math.floor((14 - m) / 12);
            var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
            m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
            var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7;
            return d0;
        },
        /* *************calculating monthly payment input taken from command line***************/
        /* Monthly payment
        
        * Purpose      : It is used to calculate the EMI depends on formulae.
        * @descriptipn : Declaring the function and passing the userinput as argument.
        * @function    :                     
        */
        payment(p, y, r) {
            try {
                var n = 12 * y;
                var r1 = r / (12 * 100);
                var res = (p * r1) / (1 - Math.pow(1 + r1, (-n)));
                console.log("Payment is : " + res);
            } catch (error) {

            }
        },
        /* ********Convrting decimal to binary number and binary number display base 2***********/
        /* Convert to Binary
        
        * Purpose      :It is used to generate the random numbers that should converted into 
                        Binary form.
        * @descriptipn :Declaring the function and passing the userinput as argument.
        * @function    :Diplayname takes the userinput and print it with some sentence.                    
        */
        binary(num) {
            var str = num.toString();
            var bin = (+str).toString(2);
            var s = " ";
            console.log(bin);
            var j = bin.length - 1;
            for (let i = 0; i < bin.length; i++) {
                var res = Math.floor(Math.pow(2, j));

                if (bin[i] == 1) {
                    s = s + res + "+";
                    bin.length--;
                    j--;
                } else {
                    s = "" + s;
                    bin.length--;
                    j--;
                }
            }
            console.log(s + " = " + num);

        },

        /* ******************************** mergesort algorithm**********************************/
        /* mergesort
       * Purpose      : It is a mergesort form sorting.it is going to sort a numbers or variable in
                        the ascending and descending order.Taken input from the user.It is going to check the
                        next element.If it is bigger than this then it should be swapped.
       *
       *  @descriptipn: Declaring the function and passing the userinput as argument.
       *  @function   : Diplayname takes the userinput and print it with some sentence.                    
       */
        mergesort(arr) {
            if (arr.length === 1) {
                return arr;
            }
            const m = Math.floor(arr.length / 2);
            const left = arr.slice(0, m);
            const right = arr.slice(m);
            return this.merge(
                this.mergesort(left),
                this.mergesort(right)
            );

        },

        merge(left, right) {
            let result = [];
            let i = 0;
            let j = 0;

            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) {
                    result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
            }
            return result.concat(left.slice(i)).concat(right.slice(j));
        },
        /* ***************************** create array function *********************************/

        createArray(num) {
            var arr = [];
            for (let index = 0; index < num; index++)
                arr[index] = readline.questionInt("Enter the element ");
            return arr;
        },

        /* ************************* It is anagrampalindrome or not ****************************/
        /* Is Prime2String
        
        * Purpose      : Prints anagram palindrome numbers.
        *
        *  @descriptipn: To prints 1 to 1000 between Prime anagram palindrome numbers.
        *             
        */
        isPalimdromeAnagram() {
            try {
                var arr = [];
                for (let index = 0; index < 1000; index++) {
                    if (this.primenumber(index)) {
                        arr.push(index);

                    }

                }
                for (let i = 0; i < arr.length; i++) {

                    for (let j = i + 1; j < arr.length; j++) {
                        
                        if (this.anagram(arr[i].toString(), arr[j].toString())) {
                            if (this.primenumber(arr[i], arr[j])) {
                                console.log(arr[i], "  ", arr[j]);
                            }
                        }
                    }
                }
            }
            catch (err) {
                console.log(err);

            }
        },
        /* ***************************** insertionsort algorithm ********************************/
        /* insertion sort
        * Purpose      : It is a insertion sort form sorting.it is going to sort a numbers or variable in
        *                the ascending and descending order.Taken input from the user.It is going 
        *                to check the next element.If it is bigger than this then it should be 
        *                swapped.
        *
        *  @descriptipn: Declaring the function and passing the userinput as argument.
        *  @function   : Diplayname takes the userinput and print it with some sentence.                    
        */
        sortinsertion(arr) {
            var a;
            for (let i = 0; i < arr.length; i++) {
                for (let j = i; j > 0; j--) {
                    if (arr[j] < arr[j - 1]) {
                        a = arr[j];
                        arr[j] = arr[j - 1];
                        arr[j - 1] = a;
                    }
                }
            }
            return arr;
        },

        /* ******************************* bubblesort algorithm**********************************/
        /* bubble sort
        * Purpose      : It is a bubble form sorting.it is going to sort a numbers or variable in
        *                the ascending and descending order.Taken input from the user.It is going 
        *                to check the next element.If it is bigger than this then it should be 
        *                swapped.
        *
        *  @descriptipn: Declaring the function and passing the userinput as argument.
        *  @function   : Diplayname takes the userinput and print it with some sentence.                    
        */
        sortbubble(arr) {
            try {

                var a;
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < (arr.length - i - 1); j++) {
                        if (arr[j] > arr[j + 1]) {
                            a = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = a;
                        }
                    }
                }
                return arr;
            } catch (error) {

            }
        },

        /************************************ Find Number **********************************/
        /* To find a number 
        ----------------------
        ----------------------
        * Purpose      : It is going to find the number that is between what we have to given to 
                         user input.Here we have to fix the limit.it is going to generate the random numbers
                         between the given limit.
        *
        *  @descriptipn: Declaring the function and passing the userinput as argument.
        *  @function   : Diplayname takes the userinput and print it with some sentence.                    
        */
        findNumber(low, high, readline) {
            try {
                var mid = low + Math.floor((high - low) / 2)
                console.log(mid)
                if (low < high) {
                    if (low == high - 1) {
                        var c;
                        c = readline.question("Is the number " + low + " if yes, press 'Y'. Else Press 'N' : ")
                        if (c == 'Y')
                            return low;
                        if (c == 'N')
                            return high;
                    }
                    c = readline.question("Is the number " + mid + -+high + " if yes, press 'Y'. Else Press 'N' : ")
                    if (c == 'Y')
                        mid = this.findNumber(mid, high, readline)
                    if (c == 'N')
                        mid = this.findNumber(low, mid - 1, readline)
                }
            } catch (error) {

            }
            return mid;
        },



        /* ******************************* file call function **********************************   
           *Purpose      :fs is a pre-defined keyword used to read a file 
           *               writeFile is used to write in a file
           */
        fileCall(path) {
            var fileStream = require('fs');
            var f = fileStream.readFileSync(path, 'utf8');
            var arr = f.split(' ');
            return arr;
        },

        writeFile(filename, Data) {
            const fs = require('fs')
            fs.writeFile(filename, Data, function (err) {
                if (err) {
                    return console.log(err);
                }

            });
        },

        /*********************************Data_Structures******************************************** */


    }

