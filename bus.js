// studentsOnTheBus (array)
// driverName (string)
// color (string)
// gas (integer)
// studentEntersBus (function that adds a student to the studentsOnTheBus property)
// busChatter (function that outputs the students catch phrases if they can have fun one by one)

var Student = require("./student.js");


function Bus(driverName,color,gas) {
	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEntersBus = function (name,gender,grade,GPA,detentions,sleepingInClass,catchPhrase){
  	this.studentsOnTheBus.push(new Student(name,gender,grade,GPA,detentions,sleepingInClass,catchPhrase));
	}
	

	this.busChatter = function(){
		// console.log(JSON.stringify(this.studentsOnTheBus[0].catchPhrase)+ "this is this")
		for (var i = 0; i < this.studentsOnTheBus.length; i++) {
		 	console.log(this.studentsOnTheBus[i].name+": "+this.studentsOnTheBus[i].catchPhrase)
		};

	}

}
module.exports = Bus;