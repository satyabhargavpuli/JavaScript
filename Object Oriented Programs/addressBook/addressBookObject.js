var read = require('readline-sync')
var file = require('fs')
var p = file.readFileSync('address.json')
/**
 * regex
 */
nameRestriction = /[a-z]/g;
contactRestriction = /[0-9]/g;
/**
 * Add new entries each time and manage that address book and perform opeartions like add,delete,
 * search,update and sort information.
 * @param person store the info of each person and perform opeartions.
 */
class Address {
    /**
     * @description:create a constructor to initialize and store values
     */
    constructor(addressb) {
        this.addressb;
    }
    /**
     * @description:To create account in the address book.
     * @param : Taking the parse object from the user addressb 
     */
    createAddress(addressb) {
        try {
            var name = read.question("Please enter your first name: ");
            while (nameRestriction.test(name) == false) {
                name = read.question("No special characters Invalid name! :");

            }
            var lastName = read.question("Please enter your last name: ");
            /**
             * validating last name
             */
            while (nameRestriction.test(lastName) == false) {
                lastName = read.question("No special characters Invalid name! :");

            }
            /**
             *  @description:add the address information
             */
            console.log("***Address Information***");
            var street = read.question("Street: ");
            var city = read.question("City: ");
            while (nameRestriction.test(city) == false) {
                city = read.question(" No special characters city! :");

            }
            var state = read.question("State: ");
            while (nameRestriction.test(state) == false) {
                state = read.question(" No special characters state! :");

            }
            var nation = read.question("Nationality: ");
            while (nameRestriction.test(nation) == false) {
                nation = read.question(" No special characters Nationality! :");
            }
            var zip = read.question("Zip code: ");
            /**
             * @description:zip code validation that should not exceed length 6
             */
            while (contactRestriction.test(zip) == false || zip.length != 6) {
                zip = read.question("Enter the zip code 6 digits only : ");
            }

            var phoneNum = read.question("Phone number: ");
            while (contactRestriction.test(phoneNum) == false || phoneNum.length != 10) {
                phoneNum = read.question(" Enter PhoneNumber 10 digits only :");
            }
            /**
             * @description:push each value into json
             */
            addressb.Person.push({
                "Name": name,
                "LastName": lastName,
                "Address": {
                    "Street": street,
                    "City": city,
                    "State": state,
                    "Nationality": nation,
                    "Zip": zip,
                    "PhoneNum": phoneNum
                }
            })
            /**
             * @description:write file into json file
             * @param:To stringfy the addressb into object.
             */
            file.writeFile('addressBook1.json', JSON.stringify(addressb), 'utf-8', function (err) {
                if (err) throw err
                console.log('Done!');
            })
            console.log("Address updated succesfully!");
            console.log("Your information as per our record is: \r\n First Name: " + name + "\r\nLast Name: " + lastName + "\r\nStreet: " + street + "\r\nCity: " + city + "\r\nState: " + state + "\r\nNationality: " + nation);
        } catch (err) {
            console.log(err.message);
        }
    }
    /**
     * @description:comaparing name of each object and sort alphabetically
     */
    compare1(a, b) {
        try {
            if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
                return -1;
            }
            if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
                return 1;
            }
            return 0;
        } catch (err) {
            console.log(err.message);
        }
    }
    sorting(addressb) {
        console.log(addressb.Person.sort(this.compare1));
    }
    /**
     * @description:open profile for given name.
     * @param: Taking the parse object from the user addressb.
     */
    openProfile(addressb) {
        try {
            var temp = -1;
            if (addressb.Person.length > 0) {
                for (var i = 0; i < addressb.Person.length; i++) {
                    console.log(addressb.Person[i]);
                }
                console.log("Welcome!!");
                var update = read.question("Please enter the name of profile: ");
                for (var k = 0; k < addressb.Person.length; k++) {
                    if (update == addressb.Person[k].Name) {
                        temp = k;
                        console.log("What you want to do?");
                        console.log("1: Update");
                        console.log("2: Delete");
                        console.log("3: Sort");
                        console.log("4: Save");
                        console.log("5: Exit");
                        var choice2 = read.question("Please enter your choice: ");
                        switch (parseInt(choice2)) {
                            case 1:
                                /**
                                 * @description:update profile
                                 */
                                console.log("What do you want to update? ");
                                console.log("1: Street");
                                console.log("2: City");
                                console.log("3: State");
                                console.log("4: Nationality");
                                console.log("5: Zip code");
                                console.log("6: Phone");
                                console.log("7: Exit");
                                var choice3 = read.question("Please enter your choice: ");
                                switch (parseInt(choice3)) {
                                    case 1:
                                        var sUpdate = read.question("Enter the new street number: ");
                                        while (nameRestriction.test(sUpdate) == false && sUpdate.length > 3) {
                                            sUpdate = read.question("No special characters Invalid name! :");
                                        }
                                        /**
                                         * @description:update whole data after changes
                                         */
                                        var obj = {
                                            "Name": addressb.Person[k].Name,
                                            "LastName": addressb.Person[k].LastName,
                                            "Address": {
                                                "Street": sUpdate,
                                                "City": addressb.Person[k]["Address"].City,
                                                "State": addressb.Person[k]["Address"].State,
                                                "Nationality": addressb.Person[k]["Address"].Nation,
                                                "Zip": addressb.Person[k]["Address"].Zip,
                                                "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                            }
                                        }
                                        addressb.Person[k] = obj;
                                        /**
                                         * @description:save into json every time after update
                                         */
                                        save();
                                        break;
                                    case 2:
                                        var cUpdate = read.question("Enter the new city name: ");
                                        while (nameRestriction.test(cUpdate) == false && cUpdate.length > 3) {
                                            cUpdate = read.question("No special characters Invalid name! :");
                                        }
                                        var obj = {
                                            "Name": addressb.Person[k].Name,
                                            "LastName": addressb.Person[k].LastName,
                                            "Address": {
                                                "Street": addressb.Person[k]["Address"].Street,
                                                "City": cUpdate,
                                                "State": addressb.Person[k]["Address"].State,
                                                "Nationality": addressb.Person[k]["Address"].Nation,
                                                "Zip": addressb.Person[k]["Address"].Zip,
                                                "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                            }
                                        }
                                        addressb.Person[k] = obj;
                                        save();
                                        break;
                                    case 3:
                                        var stUpdate = read.question("Enter the new state name: ");
                                        while (nameRestriction.test(stUpdate) == false && stUpdate.length > 3) {
                                            stUpdate = read.question("No special characters Invalid name! :");
                                        }
                                        var obj = {
                                            "Name": addressb.Person[k].Name,
                                            "LastName": addressb.Person[k].LastName,
                                            "Address": {
                                                "Street": addressb.Person[k]["Address"].Street,
                                                "City": addressb.Person[k]["Address"].City,
                                                "State": stUpdate,
                                                "Nationality": addressb.Person[k]["Address"].Nation,
                                                "Zip": addressb.Person[k]["Address"].Zip,
                                                "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                            }
                                        }
                                        addressb.Person[k] = obj;
                                        save();
                                        break;
                                    case 4:
                                        var nUpdate = read.question("Enter the new nation name: ");
                                        while (nameRestriction.test(nUpdate) == false && nUpdate.length > 3) {
                                            nUpdate = read.question("No special characters Invalid name! :");

                                        }
                                        var obj = {
                                            "Name": addressb.Person[k].Name,
                                            "LastName": addressb.Person[k].LastName,
                                            "Address": {
                                                "Street": addressb.Person[k]["Address"].Street,
                                                "City": addressb.Person[k]["Address"].City,
                                                "State": addressb.Person[k]["Address"].State,
                                                "Nationality": nUpdate,
                                                "Zip": addressb.Person[k]["Address"].Zip,
                                                "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                            }
                                        }
                                        addressb.Person[k] = obj;
                                        save();
                                        break;
                                    case 5:
                                        var zUpdate = read.question("Enter the new zip code: ");
                                        while (contactRestriction.test(zUpdate) == false) {
                                            zUpdate = read.question("No special characters Invalid number! :")
                                        }
                                        var obj = {
                                            "Name": addressb.Person[k].Name,
                                            "LastName": addressb.Person[k].LastName,
                                            "Address": {
                                                "Street": addressb.Person[k]["Address"].Street,
                                                "City": addressb.Person[k]["Address"].City,
                                                "State": addressb.Person[k]["Address"].State,
                                                "Nationality": addressb.Person[k]["Address"].Nation,
                                                "Zip": zUpdate,
                                                "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                            }
                                        }
                                        addressb.Person[k] = obj;
                                        save();
                                        break;
                                    case 6:
                                        var pUpdate = read.question("Enter the new phone number: ");
                                        while (contactRestriction.test(pUpdate) == false || pUpdate.length != 10) {
                                            pUpdate = read.question("No special characters Invalid number! :");

                                        }
                                        var obj = {
                                            "Name": addressb.Person[k].Name,
                                            "LastName": addressb.Person[k].LastName,
                                            "Address": {
                                                "Street": addressb.Person[k]["Address"].Street,
                                                "City": addressb.Person[k]["Address"].City,
                                                "State": addressb.Person[k]["Address"].State,
                                                "Nationality": addressb.Person[k]["Address"].Nation,
                                                "Zip": addressb.Person[k]["Address"].Zip,
                                                "PhoneNum": pUpdate
                                            }
                                        }
                                        addressb.Person[k] = obj;
                                        save();
                                        break;
                                    case 7:
                                        console.log("ThankYou!");
                                        //address();
                                        break;
                                }
                                break;
                            case 2:
                                /**
                                 * @description:To delete profile
                                 */
                                var update = read.question("Please enter the name  you want to delete: ");
                                for (var k = 0; k < addressb.Person.length; k++) {
                                    if (addressb.Person[k].Name == update) {
                                        var index = addressb.Person.indexOf(addressb.Person[k])
                                        addressb.Person.splice(index, 1);
                                    }
                                }
                                /**
                                 *@description: write to JSON file
                                 *@param:To stringfy the addressb into object.
                                 */
                                file.writeFile('addressBook1.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                    if (err) throw err
                                    console.log('Done!')
                                })
                                break;
                            case 3:
                                /**
                                 * @description:sort the profile by name
                                 */
                                this.sorting(addressb);
                                save();
                                break;
                            case 4:
                                /**
                                 * @description:save file into json
                                 */
                                function save() {
                                    file.writeFile('addressBook1.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                        if (err) throw err
                                        console.log('File Saved!!')
                                    })
                                }
                                save();
                                break;
                            case 5:
                                console.log("ThankYou!!");
                                //address();
                                break;
                            default:
                                console.log("Please enter valid option");
                                break;
                        }
                    }
                } if (temp == -1) {
                    /**
                     * @description:check if name is available in json or not
                     */
                    console.log("Profile unavailable!!Please create new one.");
                    //address();
                }
            }
            else {
                console.log("No profiles to display!!Please create a new profile!");
                this.createAddress();
            }
        } catch (err) {
            console.log(err.message);
        }
    }

}
module.exports = { Address }