//var $ = require('jquery');
//ES5 var Person = require('./modules/Person');
import Person from './modules/Person';

//alert('test1234');

// console.log(Person);
// console.log(Person.example);
// Person.exampleFunc();

class Adult extends Person {
	payTaxes(){
		console.log(this.name + " don't owe nuthin'.");
	}
}

var john = new Person('John Doe','blue');
john.greet();

var jane = new Adult('Jane Doe','yellow');
jane.greet();
jane.payTaxes();

//$('h1').remove();
