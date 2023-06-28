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