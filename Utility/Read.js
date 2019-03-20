/*****************************************************************************************
 *purpose   : it will give defined  methods to perform  methods

 
 * @file    :Read.js
 * @overview: Reading methods for files 
 * @author  : satya bhargav         <satyabhargav.puli@gmail.com> 
 * @version : 1.0
 * @since   : 18/03/2019 
 ***************************************************************************/
const readf = require('fs');
module.exports = {
	/**
	 * @description	To Write to the file
	 * 
	 * @param {file address} filename 
	 * @param {String} data 
	 */
	writeFile(filename, data) {
		filename.writeFile(filename, data, (err) => {
			if (err) throw err;
		})
	}
	,
	/**
		 * @description	To Read from the file
		 * 
		 * @param {file address} filename 
		 * 
		 * @returns Read data in form of array.
		 */
	readfile2(filename) {
		let data = file.readFileSync(filename, 'utf8');//reading file
		data = data.split(' ');// spilting that string given by userinput 
		return data;
	},
	readfile()//accessing file
	{
		var f = readf.readFileSync('file.txt', 'utf8');
		return f;
	},//accessing file
	readfile1() {
		var f = readf.readFileSync('file1.txt', 'utf8');
		return f;
	},

	writeFile(filename, data)//accessing file
	{

		readf.writeFile(filename, data, (err) => {

			if (err) throw err;

		})
	},
}