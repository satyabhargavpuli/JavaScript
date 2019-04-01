var file = require('fs')
var readline = require('readline-sync')
/*************************companyShare***************************
 * @Purpose     :  To add and edit all the details of the patients and doctors 
 *                 into the file and giving appontment to the patient.
 * 
 * @Use Library : Java JSON Library
 *
 * @description : clinicManagement is used to manage a list of Doctors associated with the Clinique.
 *                This also manages the list of patients who use the clinique
 *
 * @function    : To add and edit all the details of the patients and doctors.
 *
 * @param       : object --> objects such as clinic  which are at clinicMangement.
 */
class clinic {
    getNameFromDoctor(object) {//it will give all thetotalCount names of DATA   in array
        try {
            var nameArray = []
            var data = object.Doctor
            for (let key in data) {//looping over each element
                nameArray.push(data[key].name)
            }
            return nameArray;//return array
        } catch (err) {
            console.log(err.message);
        }
    }
    /** 
    *@description:to take all the id in the object into the array  
    *@param:taking parsed object from the user
    */
    getIdFromDoctor(object) {
        try {
            /**
             * it will give all the names of stock in arra
             */
            var nameArray = []
            var data = object.Doctor
            /**
             * looping over each element
             */
            for (let key in data) {
                nameArray.push(data[key].Id)
            }
            return nameArray;//return array
        } catch (err) {
            console.log(err.message);
        }
    }
    /**
     * @description:it will give all specialisation in array.
     *  
     */
    getSpecialisationFromDoctor(object) {
        try {
            var nameArray = []
            var data = object.Doctor
            for (let key in data) {//looping over each element
                nameArray.push(data[key].specialisation)
            }
            return nameArray;//returnin array
        } catch (err) {
            console.log(err.message);
        }
    }
    /**
     * @description:it will give all the totalCountames of stock in array
     *  
     */
    getNameFromPatient(object) {
        try {
            var nameArray = []
            var data = object.Patient
            for (let key in data) {//looping over each element
                nameArray.push(data[key].name)
            }
            return nameArray;//returning array
        } catch (err) {
            console.log(err.message);
        }
    }
    /**
     *@description:it will give all thetotalCountames of stock in array. 
     * 
     */
    getIdFromPatient(object) {
        try {
            var nameArray = []
            var data = object.Patient
            for (let key in data) {//looping over each element
                nameArray.push(data[key].Id)
            }
            return nameArray;//returnin array
        } catch (err) {
            console.log(err.message);
        }
    }
    /** 
    *@description:to take all the phone numbers in the object into the array  
    *@param:taking parsed object from the user
    */
    getPhoneNumberFromPatient(object) {//it will give all specialisation in array
        try {
            var nameArray = []
            var data = object.Patient
            for (let key in data) {//looping over each element
                nameArray.push(data[key].phoneNumber)
            }
            return nameArray;//returnin array
        } catch (err) {
            console.log(err.message);
        }
    }
    /** 
    *@description:to take all the deatails of thedoctore and patients and maintaining the appointment of the doctors 
    *@param:taking parsed object from the user
    */
    clinicManagement(object) {
        try {

            var doctor = object.Doctor;
            var patient = object.Patient
            var count = patient.length;
            var flag = false;
            outer: while (true) {

                console.log('Enter 1 to search for doctor :')
                console.log('Enter 2 to search for patient :')
                console.log('Enter 3 to take appointment from doctor :')
                console.log("Enter 4 to exit :");

                var ans = readline.question('Enter the choice :')
                if (ans == 4) {
                    break outer;
                }
                if (ans == 1) {
                    console.log('Enter the 1 to search doctor by his name :')
                    console.log('Enter 2 to search doctor by his id :')
                    console.log('Enter 3 to search doctor by his specialisation :')
                    var choice = readline.questionInt('Enter your choice :')
                    if (choice == 1) {
                        console.log("Name of the doctors are --> " + this.getNameFromDoctor(object))
                        var name = readline.question('Enter the name of the doctor :')
                        while (!this.getNameFromDoctor(object).includes(name)) {//if the array includes the user giventotalCountame ony that time it will remove 
                            console.log('Enter the valid name :')
                            name = readline.question('Enter the name you want to search :')
                        }
                        for (let key in doctor) {
                            if (doctor[key].name == name) {
                                console.log(' Doctor details :')
                                console.log(doctor[key])
                            }
                        }
                    }
                    else if (choice == 2) {
                        console.log("Id of the doctors are --> " + this.getIdFromDoctor(object))
                        var Id = readline.question(' Enter the id of the doctor :')
                        while (!this.getIdFromDoctor(object).includes(Id)) {//if the array includes the user giventotalCountame ony that time it will remove 
                            console.log('Enter the valid Id :')
                            Id = readline.question('Enter the Id u want to search :')
                        }
                        for (let key in doctor) {
                            if (doctor[key].Id == Id) {
                                console.log(' Doctor details :')
                                console.log(doctor[key])
                            }
                        }
                    }
                    else if (choice == 3) {
                        console.log("specialisation of the doctors are --> " + this.getSpecialisationFromDoctor(object))
                        var specialisation = readline.question('enter the specialisation of the doctor')
                        while (!this.getSpecialisationFromDoctor(object).includes(specialisation)) {//if the array includes the user giventotalCountame ony that time it will remove 
                            console.log('Enter the valid specialisation :')
                            specialisation = readline.question('Enter the specialisation u want to search : ')
                        }
                        for (let key in doctor) {
                            if (doctor[key].specialisation == specialisation) {
                                console.log(' Doctor details :')
                                console.log(doctor[key])
                            }
                        }

                    }
                    else {
                        console.log('Please enter valid input :')
                    }
                }
                /** 
                 * @description:if the input is 2 then search for the patients that are in the hospital
                */
                else if (ans == 2) {
                    console.log('Enter the 1 to search patient by his name')
                    console.log('Enter 2 to search patient by his id')
                    console.log('Enter 3 to search patient by his phonenumber')
                    var choice = readline.questionInt('enter ur choice')
                    if (choice == 1) {
                        console.log(" Name of the doctors are --> " + this.getNameFromPatient(object))
                        var name = readline.question(' Enter the name of the doctor :')
                        while (!this.getNameFromPatient(object).includes(name)) {
                            //if the array includes the user giventotalCountame ony that time it will remove 
                            console.log('Enter the valid name')
                            name = readline.question('Enter the name you want to search :')
                        }
                        for (let key in patient) {
                            if (patient[key].name == name) {
                                console.log(' Patient details :')
                                console.log(patient[key])
                            }
                        }
                    }
                    else if (choice == 2) {
                        console.log("Id of the patient are --> " + this.getIdFromPatient(object))
                        var Id = readline.question('Enter the id of the patient :')
                        while (!this.getIdFromPatient(object).includes(Id)) {//if the array includes the user giventotalCountame ony that time it will remove 
                            console.log('Enter the valid Id')
                            Id = readline.question('Enter the Id u want to search :')
                        }
                        for (let key in patient) {
                            if (patient[key].Id == Id) {
                                console.log('Patient details')
                                console.log(patient[key])
                            }
                        }
                    }
                    else if (choice == 3) {
                        console.log("Phonenumber of the patients are --> " + this.getPhoneNumberFromPatient(object))
                        var phoneNumber = readline.question('Enter the phoneNumber of the patient :')
                        while (!this.getPhoneNumberFromPatient(object).includes(phoneNumber)) {//if the array includes the user giventotalCountame ony that time it will remove 
                            console.log('Enter the valid phonenumber ')
                            phoneNumber = readline.question('Enter the phonenumber you want to search :')
                        }
                        for (let key in patient) {
                            if (patient[key].phoneNumber == phoneNumber) {
                                console.log('Patient details :')
                                console.log(patient[key])
                            }
                        }

                    }
                    else {
                        console.log(' Please enter valid input')
                    }
                }
                /** 
                 * @description:if the input is 3 then take the appointment from the doctor and give timing to the patients
                */
                else if (ans == 3) {
                    count++;

                    var date = new Date();
                    if (count > 5) {
                        var rem = Math.floor(count / 5)
                        var day = (date.getDate()) + rem;
                       // console.log(day);
                        
                    }
                    else {
                        var day = date.getDate()
                    }

                    var name = readline.question("Enter the patientname :")
                    var age = readline.questionInt("Enter the age of the patient :")
                    var Id = Math.floor(Math.random() * 100000)
                    var phoneNumber = readline.questionInt('Enter the phoneNumber :')
                    /**
                     * Input validations for phoneNumber.
                     */
                    while (phoneNumber > 9999999999 || phoneNumber < 999999999) {
                        console.log("number should be of 10 digit")
                        phoneNumber = readline.questionInt('Enter different phone number')
                    }
                    console.log("----------------Doctors are available on-------------")
                    console.log(this.getNameFromDoctor(object))
                    var appointmentFrom = readline.question('Enter the doctor name from you want to take appointment :')
                    patient.push({
                        "name": name,
                        "Id": Id,
                        "phoneNumber": phoneNumber,
                        "age": age,
                        "appointmentFrom": appointmentFrom,
                        "onTheDayOf": day

                    })
                    file.writeFileSync('clinicManage.json', JSON.stringify(object))
                    console.log("Your appointment is confirmed on :" + day + "/" + date.getMonth())
                }
                else
                    console.log('Enter valid input')
            }
        } catch (err) {
            console.log(err.message);
        }
    }
}
module.exports = { clinic }