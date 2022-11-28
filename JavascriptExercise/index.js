// // Declaring a value for a variable is done with one equals sign:
// const x = 42;

// // The abstract comparison operator (two equals signs) is used to check if the values of two items are the same:
// if( x == "42") {
//     console.log("True")
// } else {
//     console.log("False")
// }

// // The strict equals operator (three equals signs) is used to check if the values AND types of two items are the same:
// if( x === "42") {
//     console.log("True")
// } else {
//     console.log("False")
// }

// // These two will be true because 42 === 42: they're the same in both value AND type:
// if( x == 42) {
//     console.log("True")
// } else {
//     console.log("False")
// }

// if( x === 42) {
//     console.log("True")
// } else {
//     console.log("False")
// }

// ================================================================================================

// Let's make x = 0 this time
// const x = 0;

// // How will this work out? Make a prediction:
// if( x == false) {
//     console.log("So 0 is false")
// } else {
//     console.log("So 0 is true")
// }

// if( x == null) {
//     console.log("So 0 is null")
// } else {
//     console.log("So 0 is null")
// }

// if( x === false) {
//     console.log("So 0 is STRICTLY equal to false")
// } else {
//     console.log("So 0 is NOT STRICTLY equal to false")
// }

// if( x === null) {
//     console.log("So 0 is STRICTLY equal to null?")
// } else {
//     console.log("So 0 is NOT STRICTLY equal to null?")
// }

// ================================================================================================

// {
//     var x = 42;
//     let y = 84;
//     const z = 126;
//   };
  
//   console.log("X is ", x);
//   console.log("Y is ", y);
  
//   // This console.log() won't even happen because of the error caused on line 8. Javascript will stop running and tell us what happened before it gets here.
//   console.log("Z is ", z);

  // ================================================================================================

// // Declaring and assigning the accountTypes variable:
// let accountTypes = ["savings", "checking", "credit card"];

// // The numbers in the examples below are called "indexes":
// console.log(accountTypes[0]); // Returns "savings"
// console.log(accountTypes[1]); // Returns "checking"
// console.log(accountTypes[2]); // Returns "credit card"

// // We can change or add new values to the array using bracket notation as well:
// accountTypes[3] = "line of credit";

// // accountTypes["country"] = "Canada";
// console.log(accountTypes);

// Our new array, after line nine, would be ["savings", "checking", "credit card", "line of credit"]

// Because we defined our array with let, however, we could overwrite the whole thing by simply reassigning the variable. The following would empty the variable, leaving us with an instantiated array with nothing inside:
// accountTypes = [];

// console.log(accountTypes);

// ================================================================================================

// let accountTypes = ["savings", "checking", "credit card"];

// // This may look like it's copying our full account types to become a new variable joesAccounts:
// let joesAccounts = accountTypes;

// // But if we add something to our NEW variable...
// joesAccounts.push("joesSecretStash");

// // It WILL show up as part of our original variable:
// console.log("This is Joe's accounts: ", joesAccounts, " and this is account types: ", accountTypes)

// ================================================================================================

// let accountTypes = ["savings", "checking", "credit card"];

// // Using the spread operator here will make Joe's accounts equal to the list from our original accountTypes variable: "savings", "checking", "credit card". The two arrays WILL NOT be linked, however:
// let joesAccounts = [...accountTypes];

// // Now, if we add something to our new variable...
// joesAccounts.push("joesSecretStash");

// // We will maintain the separation between joesAccounts and accountTypes, and only joesAccounts will be updated:
// console.log("This is Joe's accounts: ", joesAccounts, " and this is account types: ", accountTypes)

// ================================================================================================

// // Functional Deceleration
// function toFarenheitD(degreeCelsiusD) {
//     const answerD = (degreeCelsiusD * 9/5) + 32;
//     console.log(degreeCelsiusD, "degrees Celsius is ", answerD, "in Farenheit [Function Decleration]" );
// }
// toFarenheitD(100);

// // Functional Expression
// const toFarenheitE = function(degreeCelsiusE) {
//     const answerE = (degreeCelsiusE * 9/5) + 32;
//     console.log(degreeCelsiusE, "degrees Celsius is ", answerE, "in Farenheit [Function Expression]");
//     return (answerE);
// };
// toFarenheitE(100);

// // Arrow Function
// const toFarenheitA = ((degreeCelsiusA) => {
//     const answerA = (degreeCelsiusA * 9/5) + 32;
//     console.log(degreeCelsiusA, "degrees Celsius is ", answerA, "in Farenheit [Function Arrow]");
// });
// toFarenheitA(100);

// ================================================================================================

// if condition
// if(condition) {
//     // do this
// }
// else if (someOtherCondition) {
//     // do this
// }
// else {
//     // do this
// }
// -------------------------------------------------------------------------------------------------
// for loop
// for (let i = 0; i < 5 ; i++) {
//     // do this
// }
// -------------------------------------------------------------------------------------------------
// of loop
// for (const element of object) {
//     // do this
// }
// -------------------------------------------------------------------------------------------------
// in loop
// for(const element in array) {
//     // do this
// }
// -------------------------------------------------------------------------------------------------
// while
// while (x < 5) {
//     // do this
// }

// ================================================================================================

// const numbers = [4, 9, 16, 25];
// const doubleNumbers = numbers.map((num) => num * 2);
// console.log("numbers", numbers);
// console.log("doubleNumbers", doubleNumbers);

// ================================================================================================
// // OOP in Javascript
// class Customer {
//     constructor(firstName, lastName) {
//         let firstname = firstName;
//         let lastname = lastName;
//         this.getName = function() {
//             return(`The customer's first name is ${firstname}, and their last name is: ${lastname}`);
//         }
//     }
// }
// let newCustomer = new Customer('John', 'Doe');
// console.log(newCustomer.getName());

// ================================================================================================
// // Set
// const accounts = new Set();

// accounts.add("checking");
// accounts.add("savings");
// accounts.add("credit card");
// accounts.add("tobeDeletedTest")
// console.log("After adding three items: ", accounts); // prints array before deleted an item.

// accounts.delete("tobeDeletedTest");

// console.log(accounts); // prints array after .delete method is called.

// -------------------------------------------------------------------------------------------------
// let numArray = [1, 1, 1, 1, 2, 2, 2, 2, 7, 8, 9]

// let numSet = new Set(numArray)

// console.log("Here is numArray: ", numArray);
// console.log("Here is numSet: ", numSet);

// console.log("NumArray length: ", numArray.length);
// console.log("NumSet length: ", numSet.size);

// ================================================================================================

// // Promise.all
// Promise.all([promise1, promise2])
//     .then(([promise1Result, promise2Result]) => console.log('Results', promise1Result, promise2Result))

// ================================================================================================
// // Map
// let map = new Map();

// map.set("name", "John");
// map.set("age", 28);
// map.set("website", "hurix");
// map.set("location", "London");

// console.log(map);

// ================================================================================================

class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getEmployeeDetails() {
        return "Name: " + this.name + " and Age: " + this.age;
        // return "Name: " + name + " and Age: " + age;
    }
}

const empObject = new Employee("David", 29);
console.log(empObject.getEmployeeDetails());

var promise = new Promise(function(resolve, reject) {
    if(Math.random() > 0) {
        resolve();
    }
    else {
        reject();
    }
});
promise.
    then(() => {
        console.log('Success, Promise resolved');
    })
    .catch(() => {
        console.log('Some error has occurred');
    });

// ================================================================================================