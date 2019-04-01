/************************************* Object Oriented Programs ***************************/
module.exports = {
    /****************** JSON Inventory Data Management of Rice, Pulses and Wheats *********************
     * 
     *  1. Inventory Data Management of Rice, Pulses and Wheats
     *----------------------------------------------------------
     * @Purpose   : To creat a file having Inventory Details for Rice, Pulses and Wheats
     *             with properties such as name, weight, price per kg.
     *
     * @Use Library : Java JSON Library
     *
     * @description: Declaring the function and passing the userinput as argument.
     *
     * @function: diplayname takes the userinput and print it with some sentence.
     *
     * @param : object --> objects such as Rice, Wheats and Pulse which are at inventory
     */
    inventoryData(object) {
        try {
            var rice = object.Rice
            var pulses = object.Pulses;
            var wheat = object.Wheat;
            var totalvaluerice = 0;
            var totalvaluewheat = 0;
            var totalvaluepulses = 0;
            var i = 0;
            var j = 0;
            var k = 0;
            /**
             * @description:Loop the rice array object to find  the price.
             */
            
            for (let key in rice) {
                //multiplying both price * weight 
                var num = rice[key].Weight * rice[key].Price
                console.log(" cost of " + rice[key].Ricename + " is " + num + " Rs ");
                i++;
               // totalvaluerice = totalvaluerice + num
                totalvaluerice+=num
            }
            console.log(" Total value of rice :" + totalvaluerice + "\n");
            /**
             * @description:Loop the pulses array object to find  the price.
             */
            for (let key in pulses) {
                var num = pulses[key].Weight * pulses[key].Price;
                console.log(" cost of " + pulses[key].Pulsesname + " is " + num + " Rs ");
                j++;
                totalvaluepulses = totalvaluepulses + num;
            }
            console.log(" Total value of pulses :" + totalvaluepulses + "\n");
            /**
             * @description:Loop the wheat array object to find the price.
             */
            for (let key in wheat) {
                var number = wheat[key].Weight * wheat[key].Price;
                console.log(" cost of " + wheat[key].Wheatname + " is " + number + " Rs ");
                k++;
                totalvaluewheat = totalvaluewheat + number;
            }
            console.log(" Total value of rice :" + totalvaluewheat);
        } catch (err) {
            console.log(err.message);
        }
    },

    /************************* Regular Expression Demonstration ***************************
     *  2. Regular Expression Demonstration
     *-------------------------------------
     * @Purpose   :  To creat a file having text replace the string with the user
     *               input and print the modified Message
     * 
     * @Use Library :Java JSON Library
     *
     * @description: Read in the following message: Hello <<name>>, We have your full
                     name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx.
                     Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
                     Use Regex to replace name, full name, Mobile#, and Date with proper value.
     *
     * @function:    Diplayname takes the user input and print it with some sentence.
     *
     * @param   :    Use Regex  method to do the following functions.s
     */
    regularExpression(name, fullname, number, date) {
        var filestream = require('fs');
        try {
            var data = filestream.readFileSync("regex.txt", 'utf8');
            data = data.replace(/<<name>>/g, name)
            data = data.replace(/ <<full name>>/g, fullname)
            data = data.replace(/91-xxxxxxxxxx/g, number)
            data = data.replace(/<<xx-xx-xxxx>>/g, date)
            console.log();
            console.log(data);
        } catch (err) {
            console.log(err.message);

        }
    }
}