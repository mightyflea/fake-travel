function Person(name, color) {
	this.name = name;
	this.color = color;

	this.greet = function (){
 		//console.log('Oh, hellos.');
 		console.log('Oh, hello. My name is ' + this.name + ', and my favorite color is ' + this.color);
 	}
}

// console.log('Hello from Person.js');
// exports.example = 'you';
// exports.exampleFunc = function (){alert('Yup.')};
module.exports = Person;
