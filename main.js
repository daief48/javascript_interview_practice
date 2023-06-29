// Why JavaScript??
// => JavaScript improves the user experience of the web pages by converting it from a static page into an interactive one. 

// Section 1 👉 values and variables

// var myName = "Daief Sikder"; // here var -> Variable (key), myName -> Name and "Daief Sikder" => value
// console.log(myName)

// Naming Variables: Rules And Best Practices 
// 1. The first character must be a letter  or an underscore (_) or an doller($). You can't use a number as the first character
// 2. The rest of the variable name can include any letter, any number,doller($), or the underscore. Can't use any other characters, including spaces.
// 3. Variable names are case sensitive.
// 4. No limit to the length of the variable name 
// 5. You can't use one of the JavaScript's reserved words as a variable name. 

// 1: Challenge Time: chosse the valid variable name  
// var _myName = "Daief";
// console.log(_myName);
// var _1my__Name = "Daief"
// console.log(_1my__Name);
// var 1myName = "Daief"
// console.log(1myName)
// var $myName = "Daief Sikder"
// console.log($myName);
// var my$name = "Daief"
// console.log(my$name);
// var my$-name = "Daief"
// console.log(my$-name);
// var myname% = "Daief"
// console.log(my$name%);

// Section 2 👉 DATA TYPYES IN JAVASCRIPT
// Six Data Types that are primitives 
// 1. undefined: typeof instance === "undefined"
// 2. Boolean: typeof instance === "boolean"
// 3. Number: typeof instance === "number"
// 4. String: typeof instance === "string"
// 5. BigInt: typeof instance === "bigint"
// 6. Symbol: typeof instance === "symbol"

//  Examples:  
// var myName = "Daief Sikder";
// console.log(typeof(myName));
// var myAge = 26;
// console.log(typeof(myAge));
// var isDaief = true;
// console.log(typeof(isDaief));
// const bigNum1 = 1234567890n;
// console.log(typeof(bigNum1));
// const mySymbol = Symbol('My Symbol');
// console.log(typeof(mySymbol));

// Challenge Time
// console.log(10 + "20");
// console.log(9 - "5"); // bug
// console.log("Java" + "Script");
// console.log(" " + " ");
// console.log(" " + 0);
// console.log("Daief" - "Sikder");
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false - true)
// console.log(true - " ")

// 🙋🧑‍🏫 Interview Question 1 🙋🧑‍🏫
// Difference between null vs undefined
// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless));

// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));

// 🙋🧑‍🏫 Interview Question 2 🙋🧑‍🏫
// What is NaN?
// NaN is a property of the global object
// In other words, it is a variable in global scope.
// The initial value of Nan is Not-A-Number.

// var myPhoneNumber = 970707567;
// var myName = "Daief Sikder";
// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myName)){
//     console.log("Please enter your valid name.")
// }

// 3: Challenge Time 
// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));

// Section 3 👉 Expression AND Operators 
// 5 + 2 // here 5,2 -> operend and + -> operators 

// Types of operators  
// 1. Assignment operators
// 2. Arithmetic operators
// 3. Comparison operators
// 4. Logical operators
// 5. String operators
// 6. Conditional operators

// 1. Assignment operators
// An assignment operator assigns a value to its left operand
// based on the value of its right operand.
// The simple assignment operators is equal (=)

// var x = 5;
// var y = 5;
// console.log("is both the x and y are equal or not "+ x === y); // Output -> false
// console.log(`is both the x and y are equal or not  ${x === y}`); // Output -> true
// console.log(x === y) // Output -> true

// 2. Arithmetic operators
// An arithmetic operator takes numerical values as their operands and returns a single numerical value.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);
// console.log("Remainder Operator " + 81%8);

// 😛 Incremant and Decrement operator
// Operator: x++ or ++x
// If used postfix, with operator after (for example, x++)
// the increment operator increments and returns the value before incrementing

// If used prefix, with operator before operand (for example, ++x),
// the increment operator increments and returns the value after incrementing

// var num = 15;
// var newNum = num++;
// console.log(num);
// console.log(newNum);
// console.log("________________")
// num = 15;
// var newNum = ++num;
// console.log(num);
// console.log(newNum);
// console.log("________________")
// var num = 15;
// var newNum = num--;
// console.log(num);
// console.log(newNum);
// console.log("________________")
// num = 15;
// var newNum = --num;
// console.log(num);
// console.log(newNum);
// console.log("________________")

// 3. Comparison operators
// A comparison operator compares its operands and
// returns a logical value based on whether the comparison is true.

// var a = 30;
// var b = 30;

// // Equal (==)
// console.log(a === b);

// // Not equal
// console.log(a !== b);

// a = 30;
// b = 10;
// // Greater than (>)
// console.log(a> b);
// // Greater than and eual (>=)
// console.log(a>=b);
// // Less than <
// console.log(a<b);
// // Less than equal
// console.log(a<=b);

// 4. Logical operators
// Logical operators are typically used with Boolean (logical) values;
// when they are, they return a boolean value.

// var a = 30;
// var b = -20;

// console.log((a > b) && (b>a));
// console.log((a > b) || (b>a));
// console.log(!true);

// 5. String Concatenation (operators)
// console.log("Hello" + " Daief");

// 6. Conditional (ternary) operator

// In JavaScript, the ternary operator is a concise way to write conditional expressions. It allows you to evaluate a condition and return one of two values based on the result of that condition. The syntax of the ternary operator is as follows:


// condition ? valueIfTrue : valueIfFalse;

// const age = 25;

// const message = age >= 18 ? "You are an adult" : "You are not an adult";
// console.log(message); // Output: "You are an adult"

// 1: Challenge Time: 
  
// What will be the output of 3**3?
// console.log(3**3);
// What will be the output, when we add a number and a string?
// console.log(5 + "Daief");

// Swap two number 
// var a = 5;
// var b = 10;

// var c = b;
// b = a;
// a = c;
// console.log(a);
// console.log(b);

// Swap two number - without third variable
// var a = 5;
// var b = 10;

// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a);
// console.log(b);

// // Difference between == vs ===
// console.log(5 == "5"); // Output: true It checks  the values and dont check types of the operands

// console.log(5 === "5"); // Output: false //It checks both the values and types of the operands.

// Section 4 👉 Control Statement & Loops 
// If else->
// var tomr = "sunny";

// if(tomr === "rain"){
//     console.log("take a raincoat");
// }else{
//     console.log("No need to take raincoat");
// }

// 1: Challenge Time 
// var year = 2020;

// if(year%4 === 0){
//     if(year%100 === 0){
//         if(year%400 === 0){
//             console.log("leap year.");
//         }else{
//             console.log("Not leap year.");
//         }
        
//     }else{
//         console.log("leap year.");
//     }
// }else{
//     console.log("Not leap year.")
// }

// What is truthy and falsy values in JavaScript?
// We have total 5 falsy values in javascript
// 👉 0, "", undefined, null , NaN and False 

// 0
// if(score = 0){
//     console.log("Yay, We won the game 😀");
// }else{
//     console.log("OMG, we loss the game 😥");
// }

// ""
// if(score = ""){
//     console.log("Yay, We won the game 😀");
// }else{
//     console.log("OMG, we loss the game 😥");
// }

// undefined
// if(score = undefined){
//     console.log("Yay, We won the game 😀");
// }else{
//     console.log("OMG, we loss the game 😥");
// }

// null
// if(score = null){
//     console.log("Yay, We won the game 😀");
// }else{
//     console.log("OMG, we loss the game 😥");
// }

// NaN
// if(score = NaN){
//     console.log("Yay, We won the game 😀");
// }else{
//     console.log("OMG, we loss the game 😥");
// }

// false
// if(score = false){
//     console.log("Yay, We won the game 😀");
// }else{
//     console.log("OMG, we loss the game 😥");
// }

// 2️⃣ Conditional (ternal) operator
// The conditional (ternary) operator is the only JavaScript operator
// that takes three operans

// variablename = (condition) ? value1:value2
// operand variablename,value1,value2

// example :
// var age = 17;
// console.log((age >= 18) ? "you can vote." : "you can't vote.");

// 3️⃣ switch Statement 
// Evaluates an expression, matching the expression's value to a case clause and executes statements associated with that case.

// var x = 0;
// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }
// console.log(text);

// Break
// In JavaScript, the break statement is used to exit or terminate a loop or switch statement. It allows you to prematurely stop the execution of the nearest enclosing loop or switch block and continue with the next statement after the loop or switch.

// var i = 0;
// while (i < 10) {
//   if (i === 5) {
//     break; // terminate the loop if i is equal to 5
//   }
//   console.log(i);
//   i++;
// }
// Output: 0 1 2 3 4

// 4️⃣ while loop statement
// The while statement creates a loop that executes a specified statement
// as long as the test condition evaluates to true,

// var num = 0;
// while(num <= 10){
//     console.log(num);
//     num++;
// }

// 5️⃣ Do-While loop
// var num = 0;
// do{
//     console.log(num);
//     num++;
// }while(num <=10)

// 6️⃣ For loop
// for(var num = 0; num <= 10; num++){
//     debugger;
//     console.log(num);
// }

// Exercise: 1 multipilication table for 8.
// for(var num = 1;num<=10; num++){
//     var ta = 8;
//     console.log(`${num} x ${ta} = ${num * ta}`);
// }

// Section 5 👉 Functions in JavaScript

// 1️⃣ Function Definition

// Before we use a function, we need to define it.

// A function defination (also called a function declaration, or function statement)
// consists of the function keyword, followed by:

//The name of the function.
// A list of parameters to the funciton, enclosed in parenthese and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.

// function sum(){
//     var a = 10, b = 20;
//     var total = a + b;
//     console.log(total);
// }

// 2️⃣ Calling functions
// Defining a function does not execute it
// A JavaScript function is executed when "something" invokes it (calls it)

// sum()

// What is Difference Between Function Parameter Vs Function Arguments

// In JavaScript, the terms "function parameters" and "function arguments" refer to different concepts related to functions.

//1. Function Parameters: Function parameters are the placeholders or variables defined in the function declaration. They represent the values that a function expects to receive when it is called. Parameters are specified within the parentheses following the function name.


// function add(a, b) {
//   return a + b;
// }
// In the above example, a and b are function parameters. They act as local variables within the function and can be used to perform computations or operations.

//2. Function Arguments: Function arguments, on the other hand, are the actual values passed to a function when it is called. They correspond to the parameters defined in the function declaration. Arguments are supplied within the parentheses at the time of calling the function.


// let result = add(3, 5);
// In this case, 3 and 5 are function arguments. They are the concrete values that are substituted for the function parameters a and b respectively when the add function is called.

// In summary, function parameters are the variables declared in the function signature, whereas function arguments are the actual values passed to the function when it is invoked. Parameters act as placeholders within the function body, while arguments provide the specific values to be used for the parameters during function execution.


// 🙋👨‍🏫 Interview Question 🙋👨‍🏫

// Why Function?
// Functions in programming provide modularity, reusability, abstraction, organization, and encapsulation, making programs easier to understand, maintain, and reuse.

//4️⃣ Function expression
//"Function expression simply means create a function and put it into the variable "

// function sum(a,b){
//     var total = a + b;
//     console.log(total);
// }

// var funExp = sum(5,10);
// funExp;

// 5️⃣ Return keyword
// In JavaScript, the return keyword is used within a function to specify the value that the function should output or "return" when it is called. It allows a function to compute a result and send it back to the code that invoked the function.

// function add(a, b) {
//     return a + b; // returns the sum of a and b
//   }
  
//   let result = add(3, 5); // result will be 8

// 6️⃣ Anonymous Function 

// A Function expression is similar to and has the same syntax
// as a function declaration One can define "named"
// function expressions (where the name of the expression might be
// used in the call stack for example) 
// or "anonymous" function expressions.

// var funExp = function(a,b){
//     return total = a + b;
// }

// console.log("The sum of two no is " + funExp(1,5));

