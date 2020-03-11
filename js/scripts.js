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