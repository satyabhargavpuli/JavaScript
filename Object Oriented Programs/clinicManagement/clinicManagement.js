/************************************************************
 * Execution    :   1. cmd> node clinicManagement.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon clinicManagement.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To add and edit all the details of the patients and
 *                  doctors into the file and giving appontment to the patient.
 * 
 * @description :   clinicManagement is used to manage a list of Doctors associated with the Clinique. This also manages the list of patients who use the
                    clinique. It manages Doctors by Name, Id, Specialization and Availability (AM, PM orboth). It manages Patients by Name, ID, Mobile Number and Age. The Program allows
                    users to search Doctor by name, id, Specialization or Availability. Also the programs allows users to search patient by name, mobile number or id. The programs allows
                    patients to take appointment with the doctor
 *                  
 * @file        :   clinicManagement.js
 * @overview    :   To add and edit all the details of the patients and doctors.
 * @author      :   satyabhargav     <satyabhargav.puli@gmail.com>
 * @version     :   1.0
 * @since       :   29/03/2019
 * 
 * **********************************************************/
var read = require('readline-sync')
var access = require('../clinicManagement/clinicManagementObject')
var file = require('fs')
function clinicManagement() {
    try {
        //reading file for the json
        var data = file.readFileSync('clinicManage.json', 'utf8')
        var object = JSON.parse(data)
        //creating object
        var obj = new access.clinic;
        //acessing the methods/functions by using obj ref
        obj.clinicManagement(object);
    } catch (err) {
        console.log(err.message);

    }
} clinicManagement();