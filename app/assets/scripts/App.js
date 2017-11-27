//var $ = require('jquery');
var Person = require('./modules/Person');

// console.log(Person);
// console.log(Person.example);
// Person.exampleFunc();

var john = new Person('John Doe','blue');
john.greet();

var jane = new Person('Jane Doe','green');
jane.greet();

//$('h1').remove();
