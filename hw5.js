// Homework 5

// This homework assignment will give you practice working with the DOM.

// Review the code we wrote in class by going here:

// https://github.com/galdamez/ca276-fall2013/blob/master/week9/wk9.js

// You'll be able to derive all your answers from what is in this file.


// Problem 1

// Using the W3C functions document.createElement(), document.createTextNode(), 
// and document.body.appendChild(), append the following HTML to the page.

var text1, text2, dl, dt, dd;

text1 = document.createTextNode('woof (woof) noun');
text2 = document.createTextNode('The threads that run crosswise (at right angles with the warp) in a woven cloth. Also known as weft. Texture.');
dl = document.createElement('dl');
dt = document.createElement('dt');
dd = document.createElement('dd');

dl.appendChild(dt);
dl.appendChild(dd);
dt.appendChild(text1);
dd.appendChild(text2);

document.body.appendChild(dl);


// <dl>
//         <dt>Some word</dt>
//         <dd>Some definition</dd>
// </dl>

// You'll have to use document.createElement() for each HTML element (i.e. tag).
// You'll have to use document.createTextNode() for anything that is just text.
// When you have your DOM nodes ready, call document.body.appendChild() to append
// to the end of the body element.

// Feel free to replace "Some word" and "Some definition" with text of your 
// choosing. If you need ideas check out http://wordsmith.org/words/random.cgi


// Problem 2

// Do the same thing as problem 1 only insert your HTML using the innerHTML
// property of the DIV with id="definitions".

var container;
container = document.getElementById('definitions');
container.innerHTML += '<dl><dt>malapropism</dt><dd>noun: The humorous misuse of a word by confusing it with a similar-sounding word.For example, "pineapple of perfection" for "pinnacle of perfection".</dd></dl>';


// Problem 3

// Do the same as Problem 2 only use the jQuery code we did in class. For 
// this problem you won't need to worry about setting up a click handler.
// Just worry about the code that does the text appending.// JavaScript Document

$('#definitions')
	.append('<dl><dt>sounder (SOUN-duhr) noun</dt><dd>1. A person or thing that makes sound. 2. A group of wild boars.</dd></dl>');