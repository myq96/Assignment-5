// // Chapter No. 1
// // Chapter No. 1
// // Chapter No. 1

// // Task 1 

// alert("Welcome to Chapter 1, Greeting!");

// // Task 2

// alert ("Error! Please Enter a Valid Password.");

// // Task 3

// alert ("Welcome to JS Land... " + "\nHappy Coding!");

// // Task 4

// alert ("Welcome to JS Land... ");

// // Task 5

// alert ("Happy Coding!" + "\nPlease this page from creating additional dialogs.");

// // Task 6

// alert ("Hello... I can run JS through my web browser's console");
// console.log("Hello... I can run JS through my web browser's console");

// // Chapter NO. 2 
// // Chapter NO. 2 
// // Chapter NO. 2 

// // Task 1

// var username = '';

// // Task 2

// var myName = "Muhammed Yasir";

// // Task 3

// var message = "Hello World";
// alert (message);


// // Task 4

// var user = "Jhone Doe";
// var age = "15 years old";
// var course = "Certified Mobile Application Development";
// alert (user);
// alert (age); 
// alert (course); 

// // Task 5

// var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP";
// alert (pizza);

// // Task 6

// var email = "My email is example@example.com";
// alert(email);


// // Task 7

// var book = "A smarter way to learn JavaScript" ;
// alert ("I am trying to learn from the Book " + book);

// // Task 8

// document.write("Yah! I can write HTML content through JavaScript");


// // Task 9

// var nine = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert (nine);
// document.write("<br><br>" + nine);



// // Chapter No. 3
// // Chapter No. 3
// // Chapter No. 3

// // Task 1

// var age = 'I am 15 years old';
// alert (age);

// // Task 2 

// var visit = "You have visited this site 14 times";
// alert (visit);

// // Task 3

// var birthYear = ("My birth year is " + 1990 + "\nData type of my declared variable is number");

// document.write (birthYear);

// // Task 4

// var visitorName = "<b>John Doe </b>";
// var product = "<b> T-Shirt(s) </b>"
// var quantity = 5 ;

// document.write  ("<br><br>" + visitorName + "order " + quantity + product + "on XYZ Cloting Store"); 


// // Chapter No. 4
// // Chapter No. 4
// // Chapter No. 4

// // Task 1

// // // 1. Declare 3 variables in one statement.

// // var one = 'one', two = 'two', three = 'three';

// // Task 2

// // // 2. Declare 5 legal & 5 illegal variable names

// // // Legal variable

// // // this is legal variable that start with letter
// // var leat:

// // // this is legal variable that start with underscore
// // var _underscore;

// // // this is legal variable that is contain "_ $"
// // var $_; or var _$;

// // // this is legal variable that is "camel case"
// // var nameOfBand;

// // // this is legal variable but case sensitive both are different
// // var name; var Name;


// // // illegal variables

// // // this is illegal variable that start with number
// // var 9nine;

// // // this is illegal variable that contain "space"
// // var user name ; 

// // // this is illegal variable that contain "%"
// // var P2_a%88$;

// // // this is illegal variable that contain "JS keyword"
// // var var;

// // // this is illegal variable that contain camel case start with upper case 
// // var NameOfBand;


// // Task 3

// // Display this in your browser
// // a
// var heading = "<h2> Rules for naming JS variables </h2> <br>";
// document.write (heading);

// // b
// var num = " numbers,";
// var sign = " $";
// var under = " _";
// document.write ("Variable names can only contain," + num + sign + " and" + under + "." + " For example: $my_1stVariable" + "<br>");

// // c
// var word = "letter";
// document.write ("Variable must begin with a " + word + "," + sign + " or" + under + "." + " For example: $name, _name ro name" + "<br>");

// // d
// var sen = "sensitive";
// document.write ("Variable names are case " + sen + "<br>");

// // e
// var key = "keywords"
// document.write ("Variable names should not be JS " + key)



// // Chapter No. 5
// // Chapter No. 5
// // Chapter No. 5

// var one = 3;
// var two = 5;

// // TASK 1
// document.write ("Sum of " + one + " and " + two + " is " + (one + two) + "<br>");

// // TASK 2
// document.write ("Subtraction of " + one + " and " + two + " is " + (one - two) + "<br>");

// document.write ("Mulitiplication of " + one + " and " + two + " is " + (one * two) + "<br>");

// document.write ("Division of " + one + " and " + two + " is " + (one / two) + "<br>");

// document.write ("Modulus of " + one + " and " + two + " is " + (one % two) + "<br><br>");

// // TASK 3
// var val = "Value after vaiable declaration is undefined";
// var initial = 5;
// var add = 7;

// document.write(val + "<br>");
// document.write ("Initial value: " + initial + "<br>");
// document.write ("Value after increment is: " + (++initial) + "<br>");
// document.write ("Value after addition is: " + (initial + 7) + "<br>") ;
// document.write ("Value after decrement is: " + (--initial + add) + "<br>");
// document.write ("The remainder is: " + (++initial % 3) + "<br><br>");


// // Task 4

// var cost = 600;
// var ticket = 5;

// document.write ("Total cost to buy " + ticket + " tickets to a movie is " + (cost * ticket) + "PKR" + "<br><br>")


// // Task 5 
// var table = 4
// document.write ("Table of " + table + "<br>");

// document.write (table + "x1=" + (table*1) + "<br>");
// document.write (table + "x2=" + (table*2) + "<br>");
// document.write (table + "x3=" + (table*3) + "<br>");
// document.write (table + "x4=" + (table*4) + "<br>");
// document.write (table + "x5=" + (table*5) + "<br>");
// document.write (table + "x6=" + (table*6) + "<br>");
// document.write (table + "x7=" + (table*7) + "<br>");
// document.write (table + "x8=" + (table*8) + "<br>");
// document.write (table + "x9=" + (table*9) + "<br>");
// document.write (table + "x10=" + (table*10) + "<br><br>");

// //Task 6

// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//   document.write(message + "<br>");
// }

// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//   document.write(message + "<br>");
// } 
// cToF(25);
// fToC(70);

// // Task 7

// document.write ("<h2>Shopping Cart</h2>")

// var item1 = 650;
// var item2 = 100;
// var quantity1 = 3;
// var quantity2 = 7;
// var shipping = 100;

// document.write("Price of item 1 is " + item1 + "<br>");
// document.write("Quantity of item 1 is " + quantity1 + "<br>");
// document.write("Price of item 2 is " + item2 + "<br>");
// document.write("Quantity of item 2 is " + quantity2 + "<br>");
// document.write("Shipping Charges " + shipping + "<br><br>");

// document.write("Total Cost of your order is " + (item1*quantity1 + item2*quantity2 + shipping) + "<br><br>");

// // Task 8

// document.write ("<h2>Marks Sheet</h2>")

// var totalMark = 980;
// var obtainedMark = 804;

// document.write ("Total Marks: " + totalMark + "<br>");
// document.write ("Marks Obtained: " + obtainedMark + "<br>");
// document.write ("Percentage: " + (obtainedMark / totalMark * 100) + "%" + "<br>");

// //Task 9

// document.write ("<h2>Currency In PKR</h2>");

// var usDollar = 104.80;
// var saudiRiyal = 28;

// document.write ("Total Currency in PKR: " + (10 * usDollar + 25 * saudiRiyal) + "<br><br>");

// // Task 10

// var ten = 5 + 5 * 10 / 2;
// document.write (ten);

// // Task 11 

// var currentYear = 2020;
// var birthYear = 1992;

// document.write ("<h2>Age Calculator</h2>" );

// document.write ("Current Year: " + currentYear  + "<br>");
// document.write ("Birth Year: " + birthYear  + "<br>");
// document.write ("Your Age is: " + (currentYear - birthYear)  + "<br><br>");

// // Task 12

// // var radius = 20;
// // var circum = 2 π r , π = 3.142;
// // var area = π r2, π = 3.142;

// document.write ("<h2>The Geometrizer</h2>" );

// var radius = 20;
// document.write ("Radius of a circle: " + radius + "<br>");
// var circ = 2 * Math.PI * radius;
// document.write ('The circumference is: ' + circ + "<br>");
// var area = Math.pow(radius, 2) * Math.PI;
// document.write ('The area is: ' + area  + "<br>");


// // Task 13

// document.write ("<h2>The Lifetime Supply Calculator </h2>" );

// var favSnack = " Chicken Biryani ";
// var age = 15;
// var maxAge = 65 ;
// var estiAmmount = 3;

// document.write ("Favorite Snack: " + favSnack + "<br>");
// document.write ("Current age: " + age + "<br>");
// document.write ("Estimated Maximum age: " + maxAge + "<br>");
// document.write ("Amount of snacks per day: " + estiAmmount + "<br>");
// document.write ("You will need " + (maxAge * estiAmmount - age * estiAmmount) + favSnack + "to last you until the ripe old age of " + maxAge + "<br>");



// // Chapter No. 6 - 9
// // Chapter No. 6 - 9
// // Chapter No. 6 - 9

// // // Task 1

// // var a = 10;

// // document.write ("Result:" + "<br>");

// // document.write ("The value of a is: " + a + "<br><br>");
// // document.write ("--------------------------------------" + "<br><br>")

// // document.write ("The value of ++a is: " + (++a) + "<br>");
// // document.write ("Now the value of a is: " + (a) + "<br><br>");


// // document.write ("The value of a++ is: " + (a++) + "<br>");
// // document.write ("Now the value of a is: " + (a) + "<br><br>");


// // document.write ("The value of --a is: " + (--a) + "<br>");
// // document.write ("Now the value of a is: " + (a) + "<br><br>");


// // document.write ("The value of a-- is: " + (a--) + "<br>");
// // document.write ("Now the value of a is: " + (a) + "<br><br>");


// // Task 2

// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--;

// // document.write (--a + "<br>");
// // document.write (--a - --b + "<br>");
// // document.write (--a - --b + ++b + "<br>");
// // document.write (--a - --b + ++b + b-- + "<br>");

// // document.write ("a is " + a + "<br>");
// // document.write ("b is " + b + "<br>");
// // document.write ("result is " + result + "<br>");


// // Task 3


// // var userName = prompt("Enter your Name");

// // document.write ("Welcome " + userName);

// // // Task 4



// // Task 5

// // var value1 = prompt("Enter first value");
// // var value2 = prompt("Enter second value");

// // if (value1, value2) {

// //     document.write (value1  + " * " + value2  + " = " + (value1 * value2));
    
// // } 

// // else {
// //     document.write ("5" + "*" + "1" + "=" + (5*5));
// // }



// // // Task 6

// // var sub1 = prompt ("Enter Your First Subject");
// // var sub1Mark = +prompt ("Enter Your First Subject Marks");
// // var sub2 = prompt ("Enter Your Second Subject");
// // var sub2Mark = +prompt ("Enter Your Second Subject Marks");
// // var sub3 = prompt ("Enter Your Third Subject");
// // var sub3Mark = +prompt ("Enter Your Third Subject Marks");
// // var totalMarks = 100;
// // var addsub = (sub1Mark + sub2Mark + sub3Mark);

// // document.write ("<table><tr> <th>Subject </th> <th>Total Marks </th> <th>Obtained Marks </th> <th>Percentage </th></tr>");
// // document.write (`<tr><td>${sub1}</td>`); 
// // document.write(`<td>${totalMarks}</td>`); 
// // document.write(`<td>${sub1Mark}</td>` );
// // var sub1per = (`<td>${sub1Mark / totalMarks * 100 + "%"}</td> </tr>` );
// // document.write (sub1per);

// // document.write (`<tr><td>${sub2}</td>`); 
// // document.write(`<td>${totalMarks}</td>`); 
// // document.write(`<td>${sub2Mark}</td>` );
// // var sub2per = (`<td>${sub2Mark / totalMarks * 100 + "%"}</td> </tr>` );
// // document.write (sub2per);


// // document.write (`<tr><td>${sub3}</td>`); 
// // document.write(`<td>${totalMarks}</td>`); 
// // document.write(`<td>${sub3Mark}</td>` );
// // var sub3per = (`<td>${sub3Mark / totalMarks * 100 + "%"}</td> </tr> ` );
// // document.write (sub3per);



// // document.write(`<tr> <th></th>`);
// // document.write(`<th> 300 </th> <th> ${sub1Mark + sub2Mark +sub3Mark}</th>` ); 
// // document.write(`<th> ${addsub / 300 * 100  + "%"} </th> </tr> </table>` );

// Chapter No. 9 - 11
// Chapter No. 9 - 11
// Chapter No. 9 - 11

// Task 1

// var city = prompt("Please Enter your City");
// if (city == "Karachi") {
//     document.write ("Welcome to city of lights");
// } 
// else {
//     document.write ("Please Enter Correct city");
// }


// Task 2

// var gender = prompt ("Please Enter your Gender");
// if (gender == "male") {
//     document.write ("Good Morning Sir");
// } 

// else if (gender == "female") {
//     document.write ("Good Morning Ma'am");
// }

// else {
//     document.write ("Please Enter Corrent Gender");
// }



// Task 3

// var signal = prompt ("Please Enter Signal Color");

// if (signal == "red") {
//     document.write ("Must Stop");
// } 

// else if (signal == "yellow"){
//     document.write ("Ready to move");
// }

// else if (signal == "green"){
//     document.write ("Move now");
// }

// else {
//     document.write ("Please Enter Corrent signal Color");
// }


// Task 4


// var fuel = +prompt("Please Enter Your fuel level in litres");

// if (fuel < 0.25) {
//     document.write ("Please refill the fuel in your car.");
// } 

// else {
//     document.write ("Your fuel level is enough to Go.")
// }


// Task 5

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//Alert message has display

// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }

//Alert message has not display

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// Alert message of condition 2 and 4 display


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

//Alert message has display 

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// Alert messsage of true is display
    

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// //Alert message has display 


// Task 6

// var obtaMarks = +prompt("Please Enter Your Obtained Marks");
// var totalMarks = 300;
// var percen = (obtaMarks / totalMarks * 100 );

// document.write ("<h2>Marks Sheet</h2>");
// document.write ("Total marks: " + totalMarks  + "<br>");
// document.write ("Marks Obtained: " + obtaMarks  + "<br>");

// if (percen >= 80) {
//     document.write ("Percentage: " + percen + "<br>");
//     document.write ("Marks Obtained: A-one" + "<br>");
//     document.write ("Remarks: Excellent" + "<br>");
// } 

// else if (percen >= 70) {
//     document.write ("Percentage: " + percen + "<br>");
//     document.write ("Marks Obtained: A" + "<br>");
//     document.write ("Remarks: Good" + "<br>");
// } 

// else if (percen >= 60) {
//     document.write ("Percentage: " + percen + "<br>");
//     document.write ("Marks Obtained: B" + "<br>");
//     document.write ("Remarks: You need to improve" + "<br>");
// } 

// else if (percen < 60) {
//     document.write ("Percentage: " + percen + "<br>");
//     document.write ("Marks Obtained: Fail" + "<br>");
//     document.write ("Remarks: Sorry" + "<br>");
// } 


// else {
//     document.write ("Please enter corrent Obtained Marks");
// }


// Task 7

// var guessNumber = prompt("Guess the secret number");

// if ( guessNumber <=10 ) {
//     document.write ("Bingo! Correct answer");
// } 

// else if (guessNumber == 11){
//     document.write ("Close enough to the correct answer");
// }

// else {
//     document.write ("Try again");
// }



// Task 8

// var divible = +prompt("Please enter Number");
// var divided = divible % 3;

// if (divided == 0) {
//     document.write ("Your given number is divisible by 3.");  
// } 

// else {
//     document.write ("Your given number is not divisible by 3.");
// }



// Task 9

// var num = prompt('Please Enter Number');

// if (num % 2 == 0) {
//     document.write ("Your Number is Even Number")
// } 

// else {
//     document.write ("Your Number is odd Number")
// }


// Task 10

// var temp = +prompt("Please Enter Your Temperature");

// if (temp >40) {
//     document.write ("It is too hot outside.");
// } 

// else if(temp >30){
//     document.write ("The Weather today is Normal.");
// }

// else if(temp >20){
//     document.write ("Today’s Weather is cool.");
// }

// else if(temp >10){
//     document.write ("OMG! Today’s weather is so Cool.");
// }


// else {
//     document.write ("Please Enter corrent number")
// }



// Task 11

// var value1 = +prompt("Enter your First Number");
// var value2 = +prompt("Enter your Second Number");
// var operator = prompt("Enter your operator");

// if (operator == "+" ) {
//     document.write ("Your Answer is " + value1 + operator + value2 + " = " + (value1+value2) ); 
// } 

// else if (operator == "-") {
//     document.write ("Your Answer is " + value1 + operator + value2 + " = " + (value1-value2) ); 
// }

// else if (operator == "*") {
//     document.write ("Your Answer is " + value1 + operator + value2 + " = " + (value1*value2) ); 
// }

// else if (operator == "/") {
//     document.write ("Your Answer is " + value1 + operator + value2 + " = " + (value1/value2) ); 
// }

// else if (operator == "%") {
//     document.write ("Your Answer is " + value1 + operator + value2 + " = " + (value1%value2) ); 
// }


// else {
//     document.write ("Please Enter Correct Value");
// }



// Chapter No. 12-13
// Chapter No. 12-13
// Chapter No. 12-13

// Task 1 

// var char = prompt("Please Enter any Character");
// var ch = char.charCodeAt(0);



// if (ch>=65 && ch<=90) {
//     document.write ("Character is a Uppercase letter");
// } 

//     else if (ch>=97 && ch<=122){
// 	document.write("Character is a Lowercase letter");
// }

//     else if (ch>=48 && ch<=57){
//     document.write("Character is a digit");
// }

// else if ((ch>0 && ch<=47)||(ch>=58 && ch<=64)||
//         (ch>=91 && ch<=96)||(ch>=123 && ch<=127)){
//         document.write("Character is a special symbol");
// }
//     else {
//     document.write ("Please Enter any Uppercase or Lowercase or any number");
// }


// Task 2

// var num1, num2;
// num1 = +prompt("Input the First integer", "0");
// num2 = +prompt("Input the second integer", "0");
                                                 
// if(num1 > num2) 
//   { 
//     document.write("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   

//   else if(num2 > num1) 
//   {
//     document.write("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }

//   else if(num2 = num1) 
//   {
//     document.write("The values "+ num1+ " and "+num2+ " are equal.");
//   }
  
//   else
//   {
//     document.write("Please Enter any number.");
//   }


// Task 3 

// var num1 = +prompt("Enter any number");

// if (num1 == 0) {
//     document.write ("Your number is ZERO");    
// } 

// else if (num1 > 0){
//     document.write ("Your number is POSITIVE");   
// }

// else if (num1 < 0){
//     document.write ("Your number is NEGATIVE");   
// }

// else {
//     document.write ("Please Enter any number");   
// }


// Task 4 

// var vowel = prompt("Please Enter any letter");
// var char = vowel.toLowerCase();
// // var char = ('a','e','i','o','u');

// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     document.write ("This is vowel letter " + vowel);
// }

// else {
//     document.write ("This letter is Consonant " + vowel);
// }



// Task 5

// var pass = prompt("Please enter your password");
// var password = prompt("Please enter your password again");
// var empty = ('&nbsp;');

// if (pass === "" && password === "") {
//     document.write ("Please enter your password");    
// } 

// else if (pass !== password) {
//     document.write ("Incorrect password");    
// } 

// else if (pass === password){
//     document.write ("Correct! The password you entered matches the original password ");
// }


// Task 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
// document.write (greeting = "Good day");}
// else{
// document.write (greeting = "Good evening");
// }


// Task 7

// // var time = 1900;
// var userTime = prompt("Please enter your time");
// var time = userTime * 100;
// if (time >=0000 && time<1200) {
//     document.write ("Good Morning");
// }
// else if (time >=1200 && time<1700) {
//     document.write ("Good afternoon");
// }
// else if (time >=1700 && time<2100) {
//     document.write ("Good evening");
// }
// else if (time >=2100 && time <=2400) {
//     document.write ("Good night");
// }

// else {
//     document.write ("Please enter corrent time in 24hours");
// }




// Chapter No. 14-16
// Chapter No. 14-16
// Chapter No. 14-16


// Task 1

// var student = [];
// or 
// var student = new Array();

// Task 2

// var student = {}
// or 
// var student = new Object();

// Task 3

// var string = ['string'];
// document.write (string);


// Task 4

// var number = [12, 14];
// document.write (number);


// Task 5

// var boolean = [true, false];
// document.write (boolean);



// Task 6 

// var mixed = ["string", 15 ,true, false];
// document.write (mixed);


// Task 7

// var quali = ['SSC', 'HSC', 'BSC', 'BS', 'BCOM', 'MS', 'M.Phil.', 'PhD'];

// document.write ("<h2>Qualifications:</h2>");
// document.write ("<ol><li>" + quali[0] +  "</li> <li>" + quali[1] +  "</li> <li>" + quali[2] + "</li> <li>" + quali[3] +  "</li> <li>" + quali[4] + "</li> <li>"+ quali[5]  + "</li> <li>"+ quali[6]  + "</li> <li>"+ quali[7] +"</li></ol>");



// Task 8

// var studentName = ["Michael", "John ", "Tony"];
// var score = [320,230, 480];
// var total = 500;

// document.write ("Score of " + studentName[0] + " is " + score[0] + ". " + "Percentage:" + (score[0] / 500 * 100) + "%" + "<br>");
// document.write ("Score of " + studentName[1] + " is " + score[1] + ". " + "Percentage:" + (score[1] / 500 * 100) + "%"  + "<br>");
// document.write ("Score of " + studentName[2] + " is " + score[2] + ". " + "Percentage:" + (score[2] / 500 * 100) + "%"  + "<br>");


// Task 9

// var color = ["red", "green" , "blue"];

// a

// var addbeg = prompt("Enter any color to add in beginning of array");
// color.unshift(addbeg);
// document.write (color);

// b

// var addend = prompt("Enter any color to add in beginning of array");
// color.push(addend);
// document.write (color);

// c
// for add 2 color in beginning

// color.unshift("black", "white");
// document.write (color);

// d
// for delete first color name 

// color.shift();
// document.write (color);

// e
// for delete last color name

// color.pop();
// document.write (color);

// f
// Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.

    // var addind = prompt("in which index you want to add color");
    // var addcolor = prompt("Enter a color name");
    // color.splice(addind, 0 , addcolor);
    // document.write (color);
 

// g
// Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then Arrays | JAVASCRIPT Page 3 of 6 remove the same number of color(s) from ser-defined  position/index. . Display the updated array in your browser.


    // var delind = prompt("in which index you want to delete color");
    // var delcolor = prompt("How many you want to delete color name");
    // color.splice(delind, delcolor);
    // document.write (color);


// Task 10

//  var stScore = [320, 230, 480, 120];
//  document.write ("Scores of Students: " + stScore + "<br>");
 
//  var sorted = stScore.sort();
//  document.write ("Ordered Scores of Students: " + sorted);


// Task 11

// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];

// document.write ("Cities list:" + "<br>" + cities + "<br><br>"); 

// var seletedCities = cities.slice(2, 4);
// document.write ("Selected Cities list:" + "<br>" + seletedCities + "<br>"); 


// Task 12

// var arr = ["This" , "is" , "my" , "cat" ];
// document.write ("<h3>Array: </h3>" + arr + "<br>");

// var concat = arr.join(" ");
// document.write ("<h3>Sting: </h3>" + concat);


// Task 13

// var device = ["keyword" , "mouse" , "printer" , "monitor"];

// document.write ("<h3>Devices: </h3>" + device + "<br>");

// device1 = device.shift();
// document.write ("<h3>Out: </h3>" + device1);

// device1 = device.shift();
// document.write ("<h3>Out: </h3>" + device1);

// device1 = device.shift();
// document.write ("<h3>Out: </h3>" + device1);

// device1 = device.shift();
// document.write ("<h3>Out: </h3>" + device1);


// Task 14

// var device = ["keyword" , "mouse" , "printer" , "monitor"];

// document.write ("<h3>Devices: </h3>" + device + "<br>");

// device1 = device.pop();
// document.write ("<h3>Out: </h3>" + device1);

// device1 = device.pop();
// document.write ("<h3>Out: </h3>" + device1);

// device1 = device.pop();
// document.write ("<h3>Out: </h3>" + device1);

// device1 = device.pop();
// document.write ("<h3>Out: </h3>" + device1);


// Task 15

// var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"];

// document.write ("<select > <option>"+ phone[0]  + "</option>")
// document.write ("<option>"+ phone[1]  + "</option>" )
// document.write ("<option>"+ phone[2]  + "</option>" )
// document.write ("<option>"+ phone[1]  + "</option>" )
// document.write ("<option>"+ phone[4]  + "</option>" )
// document.write ("<option>"+ phone[5]  + "</option>" + "</select>")




// Chapter 17-20
// Chapter 17-20
// Chapter 17-20


// Task 1

// var arr = [[]];

// Task 2 

// var arr = [
//     ["0123"],
//     [1012],
//     [2101]
// ];

// for (let i = 0; i < arr.length; i++) {
//     document.write (arr[i] + "<br>");
// }


// Task 3

// Counting 1-10

// for (let i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
    
// };


// Task 4


// var num1 = +prompt("Enter a number to show its multiplication table");
// var num2 = +prompt("Enter length multiplication table");

// document.write("Multiplication table of " + num1 + "<br>");
// document.write("length " + num2 + "<br><br>");

// for (let i = 1; i <= num2; i++) {
//     document.write (num1 + " * " + i + " = " + (num1*i) + "<br>");
    
// }


// Task 5

// var fruits = ["apple", "banana", "mango", "orange","strawberry"];    

// for (let i = 0; i < fruits.length; ++i) {
//     document.write (fruits[i] + "<br>");
// }

// document.write ("<br>");

// for (let j = 0; j < fruits.length; ++j) {
//     document.write ("Element at index " + j + " is " + fruits[j] + "<br>");
// }



// Task 6

// a
// Counting

//     for (let i = 1; i <= 15; ++i) {
//     document.write(i + ",");
// };

// b    
// Reverse counting    

    // for (let i = 10; i >= 1; --i) {
    // document.write(i + ",");

    // };

// c
// Even

    // for (let i = 0; i <= 20; i = i+2) {
    // document.write(i + ",");

    // };


// d
// Odd
    // for (let i = 1; i <= 20; i = i+2) {
    // document.write(i + ",");

    // };



// e
// Series

    // for (let i = 2; i <= 20; i = i+2) {
    // document.write(i + "k, ");

    // };



// // Task 7
// var user = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?", 'cookie');
// user = user.toLowerCase();

// var bake = ["cake", "apple pie", "cookie", "chips", "patties"];
// var check = bake.indexOf(user);
// // document.write (check);

// for (let i = check; i <= bake.length; i++) {
//     if (bake[i] === user) {
//         document.write (user + " is <b>avaiable</b> at index " + check + " in our bakery" + "<br>");
//         break;
//     } 
//     else {
//         document.write ("We are sorry." + user + " is <b> not avaiable</b> in our bakery");
//         break;
//     }
// }



// Task 8

// var num = [24, 53, 78, 91, 12];
// var max = Math.max(...num);

// document.write(num + "<br>");
// document.write("The largest number is " + max);


// Task 9

// var num = [24, 53, 78, 91, 12];
// var min = Math.min(...num);

// document.write(num + "<br>");
// document.write("The smallest number is " + min);


// Task 10

// for (let i = 5; i <=100; i = i+5) {
//     document.write(i + ",")
    
// }

