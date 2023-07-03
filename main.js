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

// ***************************************************************

// 👻 Now It's Time for Modern JavaScript 😍😍

// Features of ECMAScript 2015 also know as ES6
// LET AND CONST, TEMPLATE STRINGS, DEFAULT ARGUMENTS, REST OPERATORS, DESTRUCTURING, OBJECT PROPERTIES, ARROW FUNCTION, SPREAD OPERATORS

// 1️⃣ LET VS CONST

// var 
// var myName = "Daief Sikder";
// console.log(myName);

// myName = "Jubair Islam Daief";
// console.log(myName);

// let
// let myName = "Daief Sikder";
// console.log(myName);

// myName = "Jubair Islam Daief";
// console.log(myName);

// const
// const myName = "Daief Sikder";
// console.log(myName);

// myName = "Jubair Islam Daief";
// console.log(myName);

//1️⃣ var => function scope
// 1 var: Variables declared with var have function scope or global scope, meaning they are accessible throughout the entire function or, if declared outside any function, globally. Variables declared with var are hoisted to the top of their scope, which means they are moved to the top during the compilation phase.

// function example() {
//   var x = 5;
//   if (true) {
//     var y = 10;
//     console.log(x); // Accessible
//   }
//   console.log(y); // Accessible
// }

// example();
// console.log(x); // Not accessible (ReferenceError)
// console.log(y); // Not accessible (ReferenceError)


// In the above example, both x and y are accessible within the function scope due to the var keyword. However, they are not accessible outside the function.


//2️⃣ let and const => Block Scope
// let: Variables declared with let have block scope, which means they are only accessible within the block of code where they are defined (including nested blocks). Unlike var, let variables are not hoisted to the top of their scope.


// function example() {
//   let x = 5;
//   if (true) {
//     let y = 10;
//     console.log(x); // Accessible
//   }
//   console.log(y); // Not accessible (ReferenceError)
// }

// example();
// console.log(x); // Not accessible (ReferenceError)
// console.log(y); // Not accessible (ReferenceError)
// In this example, x is accessible within the function scope and the if block, but not outside of them. The variable y is only accessible within the if block.

// const: Variables declared with const also have block scope like let, but they are also read-only, meaning their values cannot be reassigned once they are assigned. They must be assigned a value at the time of declaration.


// function example() {
//   const x = 5;
//   if (true) {
//     const y = 10;
//     console.log(x); // Accessible
//   }
//   console.log(y); // Not accessible (ReferenceError)
// }

// example();
// console.log(x); // Not accessible (ReferenceError)
// console.log(y); // Not accessible (ReferenceError)
// In this example, both x and y are accessible within their respective scopes, but neither can be accessed outside of their block.

//2️⃣ Template Literals (Template Strings)

// Template literals, also known as template strings, are a feature introduced in ECMAScript 2015 (ES6) that allows for more flexible and readable string formatting in JavaScript. Template literals are enclosed by backticks ( ) instead of single or double quotes.

// Here's an example of a template literal:

// const name = 'Alice';
// const greeting = `Hello, ${name}!`;
// console.log(greeting); // Output: Hello, Alice!

//3️⃣ Default Parameters
// Default function parameters allow named parameters to be
// initialized with default values if no value or undefined is passed

// function mult(a,b=5){
//     return a * b;
// }

// console.log(mult(5));

// 6️⃣ Fat arrow function

// const sum = () => `The sum of the two number is ${(a=5) + (b=6)}`;

// console.log(sum());

// Section 7 👉 Array in JavaScript 

// When we use var, we can stored only one value at a time.
// When we feel like storing multiple values in one variable then
// instead of var, we will use an Array.
// In JavaScript, we have an Array class and
// arrays are the prototype of this class

// var myFriend = new Array("Daief","Sunny","Akil","Akash","Akik")  
// console.log(myFriend);

// var myFriend = ["Daief","Sunny","Akil","Akash","Akik"];
// console.log(myFriend);

// 1️⃣ Array Subsection 1 👉 Traversal in array 👌
// navigate through an array

// "Traversal in an array" refers to the process of accessing or visiting each element of an array in order to perform a particular operation or gather information. It involves iterating through the array and performing a specific action on each element.


// if we want to get the single data at a time and also
// if we want to change the data

// var myFriend = ["Daief","Sunny","Akil","Akash","Akik"];
// console.log(myFriend[0]);
// console.log(myFriend[1]);
// console.log(myFriend[2]);
// console.log(myFriend[3]);
// console.log(myFriend[4]);

// if we want to check the length of elements of an array

// console.log(myFriend.length);

// We use for loop to navigate
// var myFriend = ["Daief","Sunny","Akil","Akash","Akik"];

// for(var i = 0; i<myFriend.length; i++){
//     console.log(myFriend[i]);
// }


// After ES6 we have for ..in and for .. of loop too
// for ..in
// var myFriend = ["Daief","Sunny","Akil","Akash","Akik"];

// for(let element in myFriend){
//     console.log(element);
// }
// for ..of 
// var myFriend = ["Daief","Sunny","Akil","Akash","Akik"];

// for(let element of myFriend){
//     console.log(element);
// }

// var myFriend = ["Daief","Sunny","Akil","Akash","Akik"];

// myFriend.forEach(function(element, index, array){
//     console.log(`${element} index: ${index} | ${array}`)
// })

// IndexOf -> Array 
// var myFriend = ["Daief","Sunny","Akil","Akash","Akik"];
// console.log(myFriend.indexOf("Daief"));
// console.log(myFriend.indexOf("Akash"));

// LastIndexOf
// const fruits = ['apple', 'banana', 'orange', 'apple', 'mango'];

// const lastIndex = fruits.lastIndexOf('apple');
// console.log(lastIndex); // Output: 3

// const fruits = ['apple', 'banana', 'orange', 'apple', 'mango'];

// const lastIndex = fruits.lastIndexOf('apple',3); // here 3 means find last index from 0 to 3 
// console.log(lastIndex); // Output: 3

// const notFoundIndex = fruits.lastIndexOf('grape');
// console.log(notFoundIndex); // Output: -1

// Filter to search and filter an array in JavaScript, you can user
// varioust methods and techniques, Here are a few commonly used approaches

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// const evenNumbers = numbers.filter((num) => num%2 === 0);
// console.log(evenNumbers);

// Find Array:
// The find() method returns the first element in the array that satisfies the provied testing function.

// const fruits = ["apple","banana","orange"];
// const foundFruit = fruits.find((fruit) => fruit === "orange");
// console.log(foundFruit);

// FindIndex Array:
// The findIndex() method returns the first element Index in the array that satisfies the provied testing function.

// const fruits = ["apple","banana","orange"];
// const foundFruit = fruits.findIndex((fruit) => fruit === "orange");
// console.log(foundFruit);

// Includes 
// The includes() method checks if an array includes a certain element, returning true or false as appropiate
// const number = [1,2,3,4,5];
// const includeEle = number.includes(3);
// console.log(includeEle);

// Sort()
// sort method sorts an array alphabetically

// const fruits = ["Banana","Orange","Apple","Mango","Cherry"];
// fruits.sort();
// console.log(fruits);

// -------------
// Reverse()
// Reverse a Array
// const fruits = ["Banana","Orange","Apple","Mango","Cherry"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits);

// -------------------------------
// To compare arrays in JavaScript, you can use various techniques based on your specific requirements. Here are a few commonly used approaches: 
// 1. Using JSON.stringify():
// You can convert the arrays to JSON strings using JSON.stringify() and then compare the strings using the equality operator (===).

// const array1 = [1,2,3];
// const array2 = [1,2,3];

// const string1 = JSON.stringify(array1);
// const string2 = JSON.stringify(array2);

// if(string1 === string2){
//     console.log("Arrays are equal");
// }else{
//     console.log("Arrays are not equal");
// }

// Array Subsection 4 👉 Perform CRUD
// Push()

// const animals = ["Cow","Goats","Sheep","Pigs"];
// const count = animals.push("Chicken"); // return new length of the array
// console.log(count);
// console.log(animals);

// UnShift()

// const animals = ["Cow","Goats","Sheep","Pigs"];
// const count = animals.unshift("Chicken"); // return new length of the array
// console.log(count);
// console.log(animals);

// // POP()

// const animals = ["Cow","Goats","Sheep","Pigs"];
// const count = animals.pop(); // return remove element
// console.log(count);
// console.log(animals);

// Shift()

// const animals = ["Cow","Goats","Sheep","Pigs"];
// const count = animals.shift(); // return remove element
// console.log(count);
// console.log(animals);

//😃 8: challenge Time 🎌

// Array.prototype.splice() 🙋
// Adds and/or removes elements from an array

// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method
// 3: update march to March (update)?
// 4: Delete June from an array?

// const months = ['Jan', 'march', 'April', 'June', 'July'];

// // Sol1:
// const newMonth = months.splice(months.length, 0, "Dec");
// console.log(months);
// // Sol2:
// console.log(newMonth);
// // Sol3:
// const indexOfMonth = months.indexOf("march");
// if (indexOfMonth !== -1) {
//     const updateMonth = months.splice(1, 1, "March");
//     console.log(months);
// }else{
//     console.log("No Such data found");
// }

// Sol4:
// const indexOfMonth = months.indexOf("June");
// if (indexOfMonth !== -1) {
//     const updateMonth = months.splice(indexOfMonth,1);
//     console.log(months);
// }else{
//     console.log("No Such data found");
// }

// Sol5: delete all after march
// const indexOfMonth = months.indexOf("April");
// if (indexOfMonth !== -1) {
//     const updateMonth = months.splice(indexOfMonth,Infinity);
//     console.log(months);
// }else{
//     console.log("No Such data found");
// }

// 11 Challenge Time 🤯
// 1: Find the square root of each element in an array?
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let sqrtArr = arr.map(num => Math.sqrt(num));

// console.log(sqrtArr);

// 2: Multiply each element by 2 and return only those elements which are greater than 10?
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let sqrtArr = arr.map(num => num**num);

// console.log(sqrtArr);

// 5️⃣ Array Subsection 4 👉 Map and Reduce Method
// Reduce()
// The reduce() method in JavaScript is used to reduce an array to a single value by iterating over its elements and applying a callback function that accumulates a result. It can be used to perform various reduction operations, such as summing the elements, calculating averages, finding maximum or minimum values, concatenating strings, or any other type of reduction operation.



// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); // Output: 15


// Array.prototype.map()
// const array1 = [11,21,13,14,25];
// num > 9

// let newArr = array1.map((curElem,index, arr) =>{
//     return curElem > 17;
// })

// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((curElm, index ,arr) =>{
//     return `Index no = ${index} and the value is ${curElm} belong to ${arr}`
// })

// console.log(newArr);

// What is difference between map() and forEach() ?
// => The forEach() return undefined and map() return new array.
// map() is chainable. This means that you can attach reduce(),sort(),filter() and so on after performing a map() method on an array.
// You can't do with forEach()
// Example 1:
// const numbers = [1, 2, 3, 4, 5];

// const result = numbers
//   .map(num => num * 2)
//   .filter(num => num > 5);

// console.log(result);

// Example 2:
// const numbers = [1, 2, 3, 4, 5];

// const result = numbers
//   .map(num => num * 2)
//   .reduce((sum, num) => sum + num, 0);

// console.log(result);

// 👉 Reduce Method

// flatten an array means to convert the 3d or 2d array into a single dimensional array

// The reduce() method executes a reducer function (that you provide) 
// on each element of the array, resulting in single output value.

// The reducer function takes four arguments

// Accumulator
// Current Value
// Current Index
// Source Array
// sol: 1 
// let arr = [2,3,4,6,8];
// let arr2 = arr.map((curElm) => curElm * 2).filter((curElm) => curElm > 10).reduce((accumulator, curElem, index, arr) =>{
//     return accumulator += curElem;
// })

// console.log(arr2);

// sol: 2 
// let arr = [5,6,2];
// let sum = arr.reduce((accumulator, curElem) =>{
//     return accumulator += curElem;
// },0);

// console.log(sum);

// sol: 3 
// const nestedArray = [[1, 2], [3, 4], [5, 6]];

// const flattenedArray = nestedArray.reduce((accumulator, currentArray) => accumulator.concat(currentArray),[]);

// console.log(flattenedArray);

// ----------------------------------------------
// Escape Character 
// Hi Daief Sikder 

/* Section 7 👉 Strings in JavaScript */

// A JavaScript string is zero or more characters written inside quotes.

// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes

// Strings can be created as primitives
// from string literals, or as objects, using the String() constructor

// let myName = "Vinod Thapa";
// let myChannelName = "Vinod Thapa";
// let ytName = new String("Daief Sikder");

// console.log(myName);
// console.log(ytName);

// 👉 Escape Character
// let anySentence = "We are the so-called \"Vikins\" from the north.";
// console.log(anySentence);
// let anySentence1 = 'We are the so-called "Vikins" from the north.';
// console.log(anySentence1);
// let anySentence2 = "We are the so-called 'Vikins' from the north.";
// console.log(anySentence2);

// 👉 Finding a String in a String
// String.prototype.indexOf(searchValue [, fromIndex])
// the indexOf() method returns the index of (the position of) the first
// occurrence of a specified text in a string

// const myBioData = "I am the Thapa Technical";

// console.log(myBioData.indexOf("a"));
// console.log(myBioData.indexOf("a",5));
// console.log(myBioData.indexOf("Daaaaaaa"))
// console.log(myBioData.indexOf("T",10));

// JavaScript counts positions from zero.

// String.prototype.lastIndexOf(searchValue) [, fromIndex] 🖐️
// Returns the index within tha calling String object of the
// last occurence of searchValue, or -1 if not found

// const myBioData = "I am the thapa Technical";
// console.log(myBioData.lastIndexOf("t",6));

// 🫱Searching for a String in a String

// String.prototype.search(regexp)🙋‍♂️

// The sarch() method searches a string for a specified value and returns the position of the match.

// const myBioData = "I am the Thapa Technical";
// let sData = myBioData.search("Thapa");
// console.log(myBioData);
// console.log(sData);

// 👉 Extracting String Parts

// There are 3 methods for extracting a part of String

// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method🙋
// slice() extracts a part of a string and returns the extracted part

// The method takes 2 parameters: the start position, and the end position (end not include)

// var str = "Apple, Banana, Kiwi";
// let res = str.slice(0,5)
// console.log(res);

// res = str.slice(7,-2)
// console.log(res);

// res = str.slice(0,-6)
// console.log(res);

// challenge Time: 1
// ❓Display only 280 character of a string like the one used in Twitter 
// let myTweets = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quidem suscipit quisquam fugiat quae sunt, accusantium quaerat quibusdam autem, reprehenderit ab, illum molestiae? Dolorem reiciendis consequatur, voluptas unde doloremque vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quidem suscipit quisquam fugiat quae sunt, accusantium quaerat quibusdam autem, reprehenderit ab, illum molestiae? Dolorem reiciendis consequatur, voluptas unde doloremque vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quidem suscipit quisquam fugiat quae sunt, accusantium quaerat quibusdam autem, reprehenderit ab, illum molestiae? Dolorem reiciendis consequatur, voluptas unde doloremque vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quidem suscipit quisquam fugiat quae sunt, accusantium quaerat quibusdam autem, reprehenderit ab, illum molestiae? Dolorem reiciendis consequatur, voluptas unde doloremque vero. "   

// let myActualTweet = myTweets.slice(0,180);
// console.log(myActualTweet);
// console.log(myActualTweet.length);

//❓Return the Unicode of the last character in a String.
// const str = "Hello, World!";
// const lastChar = str.charAt(str.length - 1);
// const unicodeValue = lastChar.charCodeAt(0);
// console.log(lastChar);
// console.log(unicodeValue);

// The substring() Method
// substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.

// let str = "Apple, Banana, Kiwi";
// let res = str.substring(0,5);
// console.log(res);

// res = str.substring(8,-2); //cannot accept negative indexes
// console.log(res);

// The substr() Method 🙋
// substr() is similar to slice()

// The difference is that the second parameter specifies the length of the extracted part.
// let text = "Hello world!";
// let result = text.substr(0, 5);
// console.log(result);

// result = text.substr(6,6)
// console.log(result);

// result = text.substr(6,-2)
// console.log(result); //In JavaScript, if you provide a negative length value to the substr() method, it will be treated as 0. 


// result = text.substr(-6)
// console.log(result);

// 👉 Replacing String Content()
// String.prototype.replace(searchFor, replaceWith)

// The replace() method replaces a specified value
// with another value in a string

// let myBioData = "I am vinod bahadur thapa vinod";

// let replaceData = myBioData.replace("vinod","Daief Sikder")
// console.log(replaceData);

// let p = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

// let regex = "dog";
// console.log(p.replaceAll(regex,"ferret"))

// let name = "Vinod is a Good Boy. Vinod is great teacher. Vinod is excellent programmer."
// console.log(name.replaceAll("Vinod","Daief Sikder"));

// Points to remember
// 1: The replace() method does not change the string
// it is called on. It returns a new string.
// 2: By default, the replace() method replaces only the first match
// 3: Case sensitive.

// 👉 Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]


// The charAt() Method 🙋‍♂️
// The charAt() method returns the character at a specified index (position) in a string

// let str = "Hello World";
// // return character
// console.log(str.charAt(0));
// console.log(str.charAt(1));
// console.log(str.charAt(2));
// console.log(str.charAt(3));
// console.log(str.charAt(4));
// console.log(str.charAt(5));
// console.log(str.charAt(6));
// console.log(str.charAt(7));
// console.log(str.charAt(8));
// console.log(str.charAt(9));
// console.log(str.charAt(10));

// console.log("_________")
// // return UTF-16 code
// // (an integer between 0 and 65535).

// // The Unicode Standard provides a unique number for every character, no matter the platform, device, application, or language. UTF-8 is a popular Unicode encoding which has 88-bit code units.
// console.log(str.charCodeAt(0));
// console.log(str.charCodeAt(1));
// console.log(str.charCodeAt(2));
// console.log(str.charCodeAt(3));
// console.log(str.charCodeAt(4));
// console.log(str.charCodeAt(5));
// console.log(str.charCodeAt(6));
// console.log(str.charCodeAt(7));
// console.log(str.charCodeAt(8));
// console.log(str.charCodeAt(9));
// console.log(str.charCodeAt(10));

// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// let str = "Hello";
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);

//👉 Other useful methods

// let myName = "Vinod Thapa";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// The concat() method 🙋
// let fName = "Daief";
// let lName = "Sikder";
// console.log(fName.concat(lName));
// console.log(fName.concat(" ",lName));

// String.trim() 🙋
// The trim() method removes whitespace from both sides of a string
// var str = "                  Hello Word!";
// console.log(str.length);
// let rws = str.trim();
// console.log(rws);
// console.log(rws.length);

// Converting a String to an Array A string can be converted to an array with the split() method

// let txt = "a,b,c,|,d,e";
// console.log(txt.split(","));
// console.log(txt.split(" "))
// console.log(txt.split("|"))

/* Section 8 👉 DATE & Time IN JavaScript */
// JavaScript Data objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

// 👉 Creating Date Objects
// There are 4 ways to create a new date object:

// new Date();
// Date objects are created with the new Date() constructor.
// new Date(year, month, day, hours, minutes, seconds, milliseconds);
// // it takes 7 arguments
// new Date(milliseconds);
// // we cannot avoid month section
// new Date(data string);

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

// console.log(Date.now());

// new Date(year, month, ...)🙋‍♂️
// 7 numbers specify year, month, day, hour, minute, second
// and millisecond (in that order)
// Note: JavaScript counts month from 0 to 11

// January is 0. December is 11

// let d = new Date(2018, 11, 24, 10, 33, 30, 0);
// console.log(d.toLocaleString());

// new Date(dataString)
// new Date(dateString) create new date object from a date String

// let d = new Date("October 13, 2014 11:13:00");
// console.log(d);
// console.log(d.toLocaleString());

// new Date(milliseconds) 🙋
// new Date(milliseconds) creates a new data object as zero time plus milliseconds
// let now = Date.now();
// console.log(now);
// let d = new Date(now);
// console.log(d.toLocaleString());
// d = new Date(0);
// console.log(d.toLocaleString());

// 👉 Dates Method

// const curDate = new Date();

// // // how to get the indivisual date
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// // how to set the indivisual date

// console.log(curDate.setFullYear(2022));
// console.log(curDate.setFullYear(2022,10,5));
// console.log(curDate.setDate(5));
// console.log(curDate.toDateString());

// 👉 Time Methods
// const curTime = new Date();

// console.log(curTime.getTime());
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// // how to set the indivisual time

// console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));

// Section 9 JavaScript Math Object
// console.log(Math.PI);
// let num = 10.256;
// console.log(Math.round(num));
// console.log(Math.pow(2,3));
// console.log(Math.sqrt(25));
// console.log(Math.abs(-55));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.max(1,2,33,123,657,89));
// console.log(Math.min(1,2,33,123,657,89));
// console.log(Math.random()*10);

// Math.trunc() method returns the integer part of a number
// console.log(Math.trunc(4.6)); 
// console.log(Math.trunc(4.5));
// console.log(Math.trunc(-4.6));  

// Section 10 DOM in JavaScript

// Window-> 
// 1: Window is the main container or we can say the global Object and any operations related to entire browser can be part of window object

// 2: All the members like objects, methods or properties. If they are the part of window object then we do not refer the window object.

// 3: Window has methods, properties and object. example: setTimeout() or setInterval() are the methods, where as Document is the object of the Window and It also has a screen object with properties describing the physical display.

// Document-> 
// 1: Wheres the DOM is the child of window object
// 2: Where in the DOM we need to refer the document, if we want to use the document object, methods or properties.
// 3: Document is just the object of the global object that is Window, which deals with the document, the HTML elements themselves.

// console.log(window.location);
// console.log(window.location.href);

// 1.png

// ********************** DOM VS BOM **********************

// 👉 The DOM is the Document Object Model, which deals with the document, the HTML elements themselves, e.g document and all traversal you would do in it, events, etc.

// For Example: 👨‍🏫
// change the background color to red
// document.body.style.background = "red";

// 👉 The BOM is the Browser Object Model, which deals with browser components aside from the document, like history, location, navigator and screen (as well as some others that vary by browser). OR In simple meaning all the window operation which comes under BOW are performed using BOM

// Let's see more practical on History object

// Functions alert/confirm/prompt are also a part of BOM:
// they are directly not related to the document,
// but represent pure browser methods of communicating with user.

// alert(location.href) // shows current URL 
// if(confirm("Do want to watch Youtube Video?")){
//     location.href = "https://www.youtube.com/"
// }

// window.history.back();

// Section 3️⃣: Navigate through the DOM

// 1: document.documentElement
    // returns the Element that is the root element of the document.
// 2: document.head
// 3: document.body
// 4: document.body.childNodes (include tab,enter and whiteSpace) list of the direct children only
// 5: document.children (without text nodes, only regular Elments)
// 6: document.childNodes.length

// 👉 Practice Time
// How to check whether an element has child nodes or not?
// we will use hashChildNodes()
// -> 2.html 
// We will use hasChildNodes()
// 👉 Practice Time

// 6: INTERVIEW QUESTION
// <!-- Interview Question  -->
// Difference Between getElementById and querySelector? 

// 👉 What is getElementById()?
// -> Returns a reference to the element by its ID. If the element with the specified ID is not in document.
// it will returns null. 

// 👉 What is querySelector()?
// -> Returns the first element within the document that matches the specified group of selectors, or null if no matches are found.

// 17390.png to 17475.png

// Section 11: EVENTS IN JAVASCRIPT

// HTML events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can "react" on these events.

// 👩‍🏫 HTML Events
// An HTML event can be something the browser does, or something a user dose.

// Here are some example of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.

// HTML allows event handler attributes, with JavaScript cod, to be added to HTML elements.

// section 1️⃣ 4 ways of writting Events in JavaScript

// 1: using alert()
// 2: By Calling a function
// 3: Using Inline events (HTML onclick="")
// 4: using Event Listeners

// Section 11: Time Events
//1: setTimeOut
//2: setInterval
//3: clearTimeout
//4: clearInterval

// const myName = () =>{
//     setTimeout(() => {
//         console.log("Hi");
//     }, 2000);
// }
// myName();

// clearTimeout(myName); 

// const myName = () =>{
//     setInterval(() => {
//         console.log("Hi");
//     }, 1000);
// }
// myName();

// clearInterval(myName);

// Setion 11: Opps IN JavaScript

// 1️⃣ What is Object Literal? 
// => Object literal is simply a key:value pair data structure. Storing variable and functions together in one container, we can refer this as an ObJect.

// 1st way

// let bioData = {
//     myName : "Thapatechnical",
//     myAge: 26,
//     getData: function(){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }

// console.log(bioData.myName);
// console.log(bioData.myAge);
// bioData.getData();

// let bioData1 = {
//     myName : "Thapatechnical",
//     myAge: 26,
//     getData (){ // another way of defining funcion
//         console.log(`My name is ${bioData1.myName} and my age is ${bioData1.myAge}`);
//     }
// }

// console.log(bioData1.myName);
// console.log(bioData1.myAge);
// bioData1.getData();

//2️⃣ What is this Object?
// => The definition of "this" object is tha it contain the current context.
// The this object can have different values depending on where it is placed.

// For Example 1
// console.log(this)

// For Example 2
// function myName(){
//     console.log(this);
// }
// myName();

// var myNames = "Daief Sikder"
// function myName1(){
//     console.log(this.myNames);
// }
// myName1();

// For Example 4
// const obj = {
//     myAge: 26,
//     myName() {
//         console.log(this)
//     }
// }
// obj.myName();

// 4️⃣ Destructuring in ES6
// The destructuring assignment systax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// ➡️ Array Destructing

// const myBioData = ['Vinod','Thapa',26];

// // let myFname = myBioData[0];
// // let myLname = myBioData[1];
// // let myAge = myBioData[2];

// // console.log(myFname);
// // console.log(myLname);
// // console.log(myAge);

// let [myFname, myLname, myAge] = myBioData;

// console.log(myFname);
// console.log(myLname);
// console.log(myAge);

// ➡️ Object Destructing

// const myBioData = {
//     myFname : "Vinod",
//     myLname: "thapa",
//     myAge: 26
// }

// let {myFname, myLname, myAge, myDegree = "MCS"} = myBioData;

// console.log(myFname);
// console.log(myLname);
// console.log(myAge);
// console.log(myDegree);

// 5️⃣ Object Properties

// ↗️ We can now use Dynamic Properties

// let myName = "Vinod";

// const myBio = {
//     [myName] : "Hello how are you?",
//     [20 + 6]: "is my age"
// }

// console.log(myBio);

// 👉 no need to write key:value if all are same. Write it once

// let myName = "Daief Sikder";
// let myAge = 26;
// const myBio = {myName, myAge};
// console.log(myBio);

// 6️⃣ Fat Arrow Function

// 👻 Normal Way of writting Function

// console.log(sum());
// function sum(){
//     let a = 5; b = 6;
//     let sum = a + b;
//     return `The sum of the two number is ${sum}`;
// }

// 👻 How to convert in into Fat Arrow Function

// const sum = () => `The sum of the two number is ${(a=5)+(b=6)}`;
// console.log(sum())

// 7️⃣ Spread Operator

// const colors = ['red','green','blue','white'];
// const myColors = ['red','green','blue','white','yellow','black'];

// // 2nd time add one more color on top and tell we need to write it again on myColor array too

// const MyFavColors = [...colors, "yellow","black"];
// console.log(MyFavColors);

// 8️⃣ String.pad()
// const message = "My name is Daief";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));

// let myName = "Daief".padStart(7);
// console.log(myName);

// let myName = "Daief".padEnd(7);
// console.log(myName);


// const person = {name: 'Daief', age: 87};
// console.log(Object.values(person));
// console.log(Object.entries(person));
// const arrObj = Object.entries(person);
// console.log(Object.fromEntries(arrObj));
// const numbers = [1,2,3,4,5,6];
// [first, second, ...others] = numbers;
// console.log(first);
// console.log(second);
// console.log(others);

// const arr = [
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_1','zone_2',['zone_1','zone_2']],
// ]

// // let flatArr = arr.reduce((accum, currVal) =>{
// //     return accum.concat(currVal);
// // })
// // console.log(flatArr);

// console.log(arr.flat(2)); // flat(2) - level of array is 2

// const arr1 = [
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_1','zone_2',['zone_1','zone_2',['zone_1','zone_2']]],
// ]

// console.log(arr.flat(3))// flat(3) - level of array is 3
// console.log(arr.flat(Infinity));

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(oldNum + 1)
// console.log(oldNum + 4)
// console.log(oldNum + 6)
// console.log(oldNum + 8)

// console.log(900719925470991n +12n);