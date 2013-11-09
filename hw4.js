// JavaScript Document// Homework 4

// This homework assignment will give you practice working with objects. 
 // All problems will be based on the object definition below.
 
 
 // Object: Athlete
 
 // Properties: 
 // name
 // height
 // age
 // country of origin
 // medals
 // is the athelete an Olympian? (hint: Boolean)
 
 // Methods (i.e. functions): 
 
 // introduce = returns 'Hello! My name is _______ and I am from ________'
 
 // addMedal = This takes a string as a parameter and adds it to the array of medals. It does not return anything.
 
 
 // Problem 1
 // Create the object above by setting the properties one by one.
 

var athlete1 = {};

athlete1.name = 'John Doe';
athlete1.height = 234;
athlete1.age = 24;
athlete1.originCountry = 'Brazil'; 
athlete1.medals = ['Gold', 'Silver'];
athlete1.olympian = true;
athlete1.introduce = function(){
	return 'Hello! My name is ' + this.name + ' and I am from ' + this.originCountry;
}
athlete1.addMedal = function(newMedal) {
	var newMedal;
	this.medals.push(newMedal);
}


 
 // Problem 2
 // Create the object using the associate array syntax (i.e. strings within square brackets).
 
 
var athlete2 = {};
athlete2['name'] = 'John Doe';
athlete2['height'] = '6.2';
athlete2['age'] = 24;
athlete2['originCountry'] = 'Brazil'; 
athlete2['medals'] = ['Gold', 'Silver'];
athlete2['olympian'] = true;
athlete2['introduce'] = function(){
	return 'Hello! My name is ' + this.name + ' and I am from ' + this.originCountry;
}
athlete1['addMedal'] = function(newMedal) {
	var newMedal;
	this.medals.push(newMedal);
}
 
 // Problem 3
 // Create the same object using ONE object literal
var athlete2 = {
	name: 'John D'
};
athlete2['height'] = 214;
athlete2['age'] = 24;
athlete2['originCountry'] = 'Brazil'; 
athlete2['medals'] = ['Gold', 'Silver'];
athlete2['olympian'] = true;
athlete2['introduce'] = function(){
	return 'Hello! My name is ' + this.name + ' and I am from ' + this.originCountry;
}
athlete1['addMedal'] = function(newMedal) {
	var newMedal;
	this.medals.push(newMedal);
} 
 
 
var athlete3 = {
	name: 'John D',
	height: 214,
	age: 24,
	originCountry: 'Brazil', 
	medals: ['Gold', 'Silver'],
	olympian: true,
	introduce: function(){
	return 'Hello! My name is ' + this.name + ' and I am from ' + this.originCountry;
	},
	addMedal: function(newMedal) {
	var newMedal;
	this.medals.push(newMedal);
	} 
};
 
 
 
 // Problem 4
 // Create a prototype for athelete. See below for examples:
 // https://github.com/galdamez/ca276-fall2013/blob/master/week8/prototypes.html
 
function Athlete(name, height, age, originCountry, medals, olympian, indroduce, addMedal){
	this.name = 'John Doe';
	this.height = 1.8;
	this.age = 24;
	this.originCountry = 'Brazil'; 
	this.medals = ['Gold', 'Silver'];
	this.olympian = true;
	this.introduce = function(){
	return 'Hello! My name is ' + this.name + ' and I am from ' + this.originCountry;
	}
	this.addMedal = function(newMedal) {
		var newMedal;
		this.medals.push(newMedal);
	}
};


 
 // PROBLEM BELOW IS OPTIONAL
 
 // Problem 5
 // Create an prototype that inherits from Athlete. Pick from any of the types below:
 // TennisPlayer
 // TableTennisPlayer
 // Swimmer
 // Sprinter
 // …or make your own!
 // 
 // This new prototype definition will add one method that returns a string message.
 // 
 // You get to decide what those are.
 // 
 // For example I may want to have a Swimmer type that does the following.
 // 
 // Parameters in order are: name, age, country, height (in meters), medals, is he an Olympian?
 // var s1 = new Swimmer('Michael Phelps', 28, 'USA', 1.93 ['gold', 'gold', 'silver'], true);
 // 
 // Method below returns 'Splash splash splash!'
 // s1.swim();
 
function Swimmer(swim) {
	this.swim = 'Splash splash splash!';
	return swim;
};

Swimmer.prototype = new Athlete;
 
var s1 = new Swimmer('Michael Phelps', 28, 'USA', 1.93 ['gold', 'gold', 'silver'], true);
