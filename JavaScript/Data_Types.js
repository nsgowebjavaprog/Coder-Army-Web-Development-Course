// // // // // 1.let var name should be once in a block

// // // // let name = "NSLONI"
// // // // let age = 20
// // // // console.log("My name is " + name + " and I am " + age + " years old.")


// // // // // Not changeable
// // // // const account_number = 123456789
// // // // console.log("My account number is " + account_number)

// // // // // Error
// // // // // const account_number = 123456789923223

// // // // // 3. var can be used multiple times in a block
// // // // var name1 = "NSLONI"
// // // // var name1 = "NSLONI"
// // // // console.log("My name is " + name1)


// // // if(true){
// // //     var name1 = "NSLONI-NS"
// // // }
// // // console.log("My name is " + name1)


// // // // if(true){
// // // //     let name2 = "NSLONI-NS-2"
// // // // }
// // // // console.log("My name is " + name2) // Error


// // // -----------------------------------------------------Data-Types-------------------------------------------------------

// // // Primitive Data Types 
// // // --> number, string, boolean, null, undefined, bigint, symbol

// // // Non-Primitive Data Types
// // // --> object, array, function

// // // number,

// // let a = 10
// // let b = 20.5
// // console.log("Value of a is " + a)

// // // string,

// // let name = "NSLONI"
// // console.log("My name is " + name)

// // //  boolean,

// // let isLoggedIn = true
// // console.log("Is user logged in? " + isLoggedIn)

// // //  null,
// // let emptyValue = null
// // console.log("Value is " + emptyValue)

// // //  undefined,
// // let userName
// // console.log("User name is " + userName)

// // //  bigint,
// // let bigNumber = 1234567890123456789012345678901234567890n
// // console.log("Big Number is " + bigNumber)

// // //  symbol
// // const sym = Symbol("id")
// // console.log("Symbol is -----> " + sym.toString())


// // ARRAY

// let fruits = ["Apple", "Banana", "Orange", 100, true, null]
// console.log(fruits)
// console.log(typeof fruits) // object


// // OBJECT
// let person = {
//     name: "NSLONI",
//     age: 20,
//     account_number: 123456789,
//     isLoggedIn: true
// }
// console.log(person)

// // FUNCTION

// let fun_add = function add(a, b) {
//     return a + b
// }

// console.log("Sum is " + add(10, 20))
// // console.log(fun_add) //  [Function: add]



let a = 20
console.log(typeof a) // number

let name = "NSLONI"
console.log(typeof name) // string

let isLoggedIn = true
console.log(typeof isLoggedIn) // boolean

let emptyValue = null
console.log(typeof emptyValue) // object (this is a bug in JS)

let userName
console.log(typeof userName) // undefined

let bigNumber = 1234567890123456789012345678901234567890n
console.log(typeof bigNumber) // bigint

const sym = Symbol("id")
console.log(typeof sym) // symbol


