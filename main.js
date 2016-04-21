var prompt = require('prompt');
var Bus = require("./Bus.js");
var Student = require("./student.js");

prompt.start();

prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result){
gpa = parseFloat(result.gpa);
detentions = parseFloat(result.detentions);

var Nstudent = new Student(result.name, result.gender, result.grade, gpa, detentions, result.sleepingInClass, result.catchPhrase);
// console.log(Nstudent)
Nstudent.canStudentHaveFun();
if (Nstudent.open>0) {
chat();
};

});








function chat (){

var magicSchoolBus = new Bus("Ms. Frizzle", "Magic-Yellow", "Full");


// console.log(magicSchoolBus);


magicSchoolBus.studentEntersBus("Liz","F","B",3.5,9,true,"Awesome");
magicSchoolBus.studentEntersBus("Arnold","M","C",2.5,20,false,"Tubular");
magicSchoolBus.studentEntersBus("Carlos","M","A",4.1,5,true,"Hola");
magicSchoolBus.studentEntersBus("Dorothy","F","B",3.0,2,false,"I'm a girl");
magicSchoolBus.studentEntersBus("Keesha","F","C",2.2,14,true,"Ayeee");
magicSchoolBus.studentEntersBus("Phoebe","F","D",1.8,40,true,"I'm too cool for School");
magicSchoolBus.studentEntersBus("Tim","M","B",3.25,35,false,"I'm gonna be an animator");
magicSchoolBus.studentEntersBus("Wanda","F","A",3.85,7,false,"e is better than pi");
magicSchoolBus.studentEntersBus("Janet","F","A",4.0,0,false,"pi is better than e");
magicSchoolBus.studentEntersBus("Robb","M","D",1.5,90,true,"I love weddings");
magicSchoolBus.studentEntersBus("Walker","M","B",3.5,8,true,"What is dead may never die");
magicSchoolBus.studentEntersBus("Ned","M","c",2.5,29,true,"Winters Comming");
magicSchoolBus.studentEntersBus("Hodor","M","F",0.0,0,true,"Hodor");
magicSchoolBus.studentEntersBus("Arya","F","F",0.95,100,true,"Valar Morghulis");
magicSchoolBus.studentEntersBus("John","M","D",2.05,8,true,"For the watch");
magicSchoolBus.studentEntersBus("Tyrion","M","A",3.6,29,true,"I'm always too short fot the rides");
magicSchoolBus.studentEntersBus("Jamie","M","A",4.1,0,false,"Hey babe, I mean hey Cersi");
magicSchoolBus.studentEntersBus("Cersi","F","C",2.5,5,true,"Hi Jamie");
magicSchoolBus.studentEntersBus("Tywin","M","A",4.1,2,false,"You are a Lannister");
magicSchoolBus.studentEntersBus("Danni","F","A",4.5,0,false,"Mother of Dragons");
magicSchoolBus.studentEntersBus("Harry","M","A",4.5,0,false,"I'm a Wizard");




// console.log(magicSchoolBus.busChatter);
// console.log(magicSchoolBus.busChatter + "boo")
magicSchoolBus.busChatter();

// console.log(magicSchoolBus);
}