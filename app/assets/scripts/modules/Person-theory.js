//function Person() {
class Person {
	constructor(name, color){
		this.name = name;
		this.color = color;
	}
	// this.name = name;
	// this.color = color;


//	this.greet = function (){
	greet(){
 		//console.log('Oh, hellos.');
 		console.log('Oh, hello. My name is ' + this.name + ', and my favorite color is ' + this.color);
 	}
}

// console.log('Hello from Person.js');
// exports.example = 'you';
// exports.exampleFunc = function (){alert('Yup.')};
//ES5 module.exports = Person;
export default Person;
