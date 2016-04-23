
var prompt = require('prompt');
prompt.start();
//student constructor stores info for later
function Student(name,gender,grade,GPA,detentions,sleepingInClass,catchPhrase) {
 	this.name = name;
 	this.gender = gender;
 	this.grade = grade;
 	this.GPA = GPA;
 	this.detentions = detentions;
 	this.sleepingInClass = sleepingInClass;
 	this.catchPhrase = catchPhrase;
 	this.open=0
 	// when conditions are met open helps call fullBus function 
	this.canStudentHaveFun = function (){
		//if a student has a decent gpa and arent in detention every day they can have fun.
		// console.log( this.detentions )
		 		if (this.detentions < 10 && this.GPA > 2) {
		 			console.log('Sure. The student can have fun.')
		 			this.open++;

		 		}else{
		 			console.log('No. They can not.')
		 		}
	}

}





  // console.log(this.grade)

module.exports = Student;