// Inside student.js, 
// make a constructor function called Student that creates a student object with properties 
// of name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase, and
//  a function called canStudentHaveFun that checks if they have less than 10 detentions and 
//  above a 2 GPA. 
// If they do then console.log out to the terminal that the student can have fun.
var prompt = require('prompt');
prompt.start();

 function Student(name,gender,grade,GPA,detentions,sleepingInClass,catchPhrase) {
 	this.name = name;
 	this.gender = gender;
 	this.grade = grade;
 	this.GPA = GPA;
 	this.detentions = detentions;
 	this.sleepingInClass = sleepingInClass;
 	this.catchPhrase = catchPhrase;
 	this.open=0
	this.canStudentHaveFun = function (){
		// console.log( this.detentions < 10 && this.GPA > 2))
		 		if (this.detentions < 10 && this.GPA > 2) {
		 			console.log('Sure. The student can have fun.')
		 			this.open++;

		 		}else{
		 			console.log('No. They can not.')
		 		}
		 }

    }





  // console.log(this.grade)
// var dude = new Student('davon','male','12th','1.53','13','yes','fuck your thoughts');

module.exports = Student;