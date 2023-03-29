// JavaScript's most important datatype is the object.
// An object is a collection of name/value pairs, or a string to value map.

let book = {  // Objects are enclosed in curly braces.
topic: "JavaScript",  // The property "topic" has value "JavaScript."
edition: 7 // The property "edition" has value 7
};  // The curly brace marks the end of the object.

// Access the properties of an object with . or []:
book.topic  // => "JavaScript"
book["edition"] // => 7: another way to access property values.

book.author = "Flanagan"; // Create new properties by assignment.
book.contents = {}; // {} is an empty object with no properties.

// Conditionally access properties with ?. (ES2020):
book.contents?.ch01?.sect1  // => undefined: book.contents has no ch01 property.
// JavaScript also supports arrays (numerically indexed lists) of values:

let primes = [2, 3, 5, 7];  // An array of 4 values, delimited with [ and ].

primes[0]  // => 2: the first element (index 0) of the array.

primes.length // => 4: how many elements in the array.

primes[primes.length-1] // => 7: the last element of the array.

primes[4] = 9;  // Add a new element by assignment.

primes[4] = 11;  // Or alter an existing element by assignment.

let empty = [];  // [] is an empty array with no elements.

empty.length // => 0

// Arrays and objects can hold other arrays and objects:

let points = [ // An array with 2 elements.

{x: 0, y: 0}, // Each element is an object.
{x: 1, y: 1}
];

let data = {  // An object with 2 properties
trial1: [[1,2], [3,4]], // The value of each property is an array.
trial2: [[2,3], [4,5]] // The elements of the arrays are arrays.
};