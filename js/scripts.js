// import "./Movies.Class.js"; // Bring in our file. REVISIT.

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

/**
* Functon default parameter vaules.
*/
// We can set defaults, to prevent errors in case nothing gets passed in from a parameter!
addNums = ( x=0, y=0 ) => x + y;

console.log( addNums() ); // No arguments! But our  default values kick in!

/**
 * Rest parameter.
 */

findHighNum = ( ...args ) => { //...args will capture any number of arguments that we pass!
    console.log( args ); // It can be called by the name we had inbetween our parenthesis.
    return args;
}

// Gettings the sum of ALL numbers passed in!
addAllNums = (...nums) => nums.reduce( ( a, v ) => a + v);
console.log( addAllNums( 64, 6, 10 ) );

/**
 * Template Literals
 */

const helloVar = "Hello, World!";
const sampleName = "Sam";

const myNewString = `Hey there, my name is ${sampleName}; I\'d like to gave you a big: "${helloVar}"!!`; // The syntax for template literals is: ${variableName} --> NOTE: This only works inside of backticks! Bu is super useful. It saves us from extra concatenation.
console.log( myNewString );

/**
 * Spread Operator
 *  DON'T get this confised with the rest parameters! Both are three dots...
 *  REMEMBER that rest parameter is always in PARAMETER area of a fucntion, nowhere else. Spread is used ANYWHERE else basically.
 */

const newArray = [ "Hello", ",", " ", "World", "!" ];
console.log( newArray );
console.log( ...newArray ); // Brought the values in the array together as one (space-seperated) string.

// Spread operator separates into separates values.
const aBunchOfNums = [ 5, 10, 36, 58 ];
console.log( addAllNums( 5, 10, 36, 58 ) );
// console.log( addAllNums( aBunchOfNums ) ); This will just return an array.
console.log( addAllNums( ...aBunchOfNums ) ); // Spreading an argument.

/**
 * String Methods!
 */

/**
 * .search() Method:
 * 
 * Regex Learning Tool: https://regexone.com/
 */

const myTestString = "Greetings, Programs";
console.log( myTestString.search( /TING/i ) ); // Regex match. "i" is for case-INsensitive. Returns the SUBSTRING POSITION. TING is 4.

/**
 * .replace() Method:
 */

const myReplacedString = myTestString.replace( /Programs/, "World" ); // Find a string, and replace it! Super cool.
console.log ( myReplacedString ); 

/**
 * Blocks:
 */
// Unamed block... we can use this to contain otherwise-global const and let variables.
{
    const myBlockNestedVar = 38;
}

// console.log( myBlockNestedVar );

let myFinalResult = 0;
// WE CAN name blocks if we want. 
myOrganizeName: { // This could be named anything... JUST A LABEL.
    // We can organize some code in here, and control scop of let/const.
    let myBlockNestedVar = 55; // We used the same name in our unnamed block!!?! That's okay, it was born in a differently scoped block!
    myBlockNestedVar++;
    console.log( myBlockNestedVar );
}
console.log( myFinalResult ); 

/**
 * Classes. 
 * CHECK OUR IMPORT, THAT'S HOW WE'RE ACCESSING THIS!
 */

class Movie {
    constructor( name, genre, year ) {
        this.name = name;
        this.genre = genre;
        this.year = year;
    }
    showPoster() { // This is a method! We can name them as we'd like.
        const info = `
            MOVIE INFO 
            ==========
            Name: ${this.name}
            Genre: ${this.genre}
            Year: ${this.year}
        `;
        return info;
    }
}

const tron = new Movie( "Disney\'s TRON", "Adventure", 1982 );
const dragonheart = new Movie ( "Dragonheart", "Medieval Fantasy", 1996 );
const godfather = new Movie ( "Godfather II", "Action/Thriller", 1974 );

console.log( tron );
console.log( dragonheart );
console.log( godfather );