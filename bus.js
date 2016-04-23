var Student = require("./student.js");

//bus constructor stores info for later
function Bus(driverName,color,gas) {
	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;

	//pushes prompted student that is created on the bus array
	this.newStudentEntersBus = function (a){
  		this.studentsOnTheBus.push(a);
	}

	//pushes new student that is created on the bus in an array
	this.studentEntersBus = function (name,gender,grade,GPA,detentions,sleepingInClass,catchPhrase){
  		this.studentsOnTheBus.push(new Student(name,gender,grade,GPA,detentions,sleepingInClass,catchPhrase));
	}
	
	//prints out the names and catchphrases of the students on the bus
	this.busChatter = function(){
		// console.log(JSON.stringify(this.studentsOnTheBus[0].catchPhrase)+ "this is this")
		for (var i = 0; i < this.studentsOnTheBus.length; i++) {
		 	console.log(this.studentsOnTheBus[i].name+": "+this.studentsOnTheBus[i].catchPhrase)
		};

	}

	// deletes a student in the array 
	this.deleteStudentOnBus = function(){
		var deleteName = process.argv[2];
		for (var i = 0; i < this.studentsOnTheBus.length; i++) {
			//finds student name equal to input value and takes it out of array using its index
			if (this.studentsOnTheBus[i].name == deleteName) {
				//numinArray is the index of that person in the array
				var numInArray = this.studentsOnTheBus.indexOf(this.studentsOnTheBus[i]);
				//spice deletes once at that index
				this.studentsOnTheBus.splice(numInArray, 1)

			};
		};

	}

}
module.exports = Bus;