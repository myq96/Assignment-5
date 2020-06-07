// // 1. Declare 3 variables in one statement.

// var one = 'one', two = 'two', three = 'three';

// // 2. Declare 5 legal & 5 illegal variable names

// // Legal variable

// // this is legal variable that start with letter
// var leat:

// // this is legal variable that start with underscore
// var _underscore;

// // this is legal variable that is contain "_ $"
// var $_; or var _$;

// // this is legal variable that is "camel case"
// var nameOfBand;

// // this is legal variable but case sensitive both are different
// var name; var Name;


// // illegal variables

// // this is illegal variable that start with number
// var 9nine;

// // this is illegal variable that contain "space"
// var user name ; 

// // this is illegal variable that contain "%"
// var P2_a%88$;

// // this is illegal variable that contain "JS keyword"
// var var;

// // this is illegal variable that contain camel case start with upper case 
// var NameOfBand;


// Display this in your browser
// a
var heading = "<h2> Rules for naming JS variables </h2> <br>";
document.write (heading);

// b
var num = " numbers,";
var sign = " $";
var under = " _";
document.write ("Variable names can only contain," + num + sign + " and" + under + "." + " For example: $my_1stVariable" + "<br>");

// c
var word = "letter";
document.write ("Variable must begin with a " + word + "," + sign + " or" + under + "." + " For example: $name, _name ro name" + "<br>");

// d
var sen = "sensitive";
document.write ("Variable names are case " + sen + "<br>");

// e
var key = "keywords"
document.write ("Variable names should not be JS " + key)
