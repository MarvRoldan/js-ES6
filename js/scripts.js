/**
 * Let's see what some of our newer array methods are...
 */

// .find() method; finds a method.
var myArray = [ "test", 2, 3, true, 5, null, 38 ];
var myValue = myArray.find( function ( element ) { return element > 4 } );
console.log( myValue ); // Returns 5, an element from our array!

// For checking if an element exists in the array.
var isMyStringInside = myArray.find( function ( element ) { return element === "test" } );
console.log( isMyStringInside ); // The element is there. .toLowerCase(); for case sensative checks. 

// .find is helpful for checking if an clement exists in an array!
var isMyStringInside = myArray.find( function ( element ) { return element === "HELLO" } ); 
console.log( isMyStringInside ); // Not found =(

/**
 * .findIndex()
 */
// Still searching for an element!
var findAnIndex = myArray.findIndex( function ( element )  { return element === 2; } );
console.log( findAnIndex ); // But this time, it returned the value's INDEX.

/**
 * .entries()
 */
var pairing = myArray.entries();
console.log ( pairing ); // Returns an iterator. 
console.log( pairing.next().value ); // We can keep bumping to the nxt item, getting a nice key/value array to let us know what's inside!
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );

/**
 * .from() method:
 */
var fromArray = Array.from( "ABCDEFGHIJKLMNOPQRSTUVWZ" );
console.log ( fromArray ); //Oh geeze, thta's a 26-element array now.
var fromArray2 = Array.from( "Hello, World!" );
console.log( fromArray2 ); // Even spaces and special characters will be captured as elements! 

/**
 * .filter() method:
 */
var filtered = myArray.filter ( function ( element ) { return element > 4; } );
console.log( filtered ); // ALL matches returned!!

/**
 * .reduce() metehod:
 * We can add on to a value, returns only a single.
 */
var reduceResult = myArray.reduce( function ( accumulator, currentVal ) { return accumulator +  currentVal; } );
console.log( reduceResult );

console.log( [ 1, 2, 3, 4].reduce( function ( a, v ) { return a + v; } ) ); // Because we have numbers in here, they are being added (mathematically).

/**
 * Let and Const
 */
var x = 3; // Standard variable declaration. Function scoped.
// let x = 4 // Cannot be re-assigned.
let = 7; // Let is block-scoped. 
const z = 36; // Const is block-scope, but re-assignment is not allowed.

// z = 16; NOT allowed! Const must remain with its original assignment.
console.log( z );

y = 13; // Allowed! var and let allow re-assingment.
console.log( y );

for ( var myVar = 0; myVar < 10; myVar++ ) {
    console.log( "For loop iteration..." );
}
console.log( "myVar = " +myVar );

// Let is BLOCK scoped... it lives and dies in ANY block (like an if, or a loop!)
for ( let myNewVar = 0; myNewVar < 10; myNewVar++ ) {
    console.log( "For loop iteration..." )
    console.log( "myNewVar = " +myNewVar );
}
// console.log( "myVar = " +myNewVar ); // We can't access it outside of the block.

/**
 * Const can't be re-assigned... but its insides can be manipulated!?
 */

const myObj = {
name: "Henry",
age: 18
}

myObj.name = "Sandy"; // Can we update PROPERTIES or array ELEMENTS inside of a const-declaed variable?
myObj.hobbies = [];
myObj.hobbies.push( "Mountain Climbing" );
console.log( myObj );

// myObj = {} // THIS WOULD STILL ERROR. Only insides for a const can be manipulated.

/**
 * Let's shake things up with: FUNCTIONS
 * New syntax...
 */
function myFunction ( a, b ) {
    return Number( a ) + Number( b );
}

// ES6 style:
myFunction = ( a, b ) => Number( a ) + Number( b ); // Instant return with no curly braces.
console.log( myFunction( 3, 8 ) );

// Bigger function 
myOtherFunction = ( a, b ) => {
    const myAnswer = Number( a ) + Number ( b ); // Use curly braces for larger, more complex operations.
    return myAnswer;
}
console.log( myOtherFunction( 34, 6 ) );