/* var Name = "john";
console.log(Name) */

/* let myName = "john";
console.log(myName);
myName = "alex";
console.log(myName); */

//in let everything is like const but just we can reassign it which is not possible in const
//we can also change data type but not redeclare;
//cosnt<<let<<var level of strictness we can redeclare var too
//var is globaly scoped let and const block scoped

//string Interpolation

/* let firstName = "Rishav";
let lastName = "Raj";

console.log(firstName + " " + lastName);

let fullName = `${firstName} ${lastName}`;
console.log(fullName); */

//Default prams

/* function addTwoNumbers(num1, num2) {
    return num1 + num2;
}; */

/* let addTwoNumbers = (num1,num2) => {
    return num1 + num2;
};
console.log(addTwoNumbers(1, 2));  */  //no preprocessing ke liye

/* let addTwoNumbers = (num1, num2) => num1 + num2;
console.log(addTwoNumbers(1,2));  */ //upar aur niche dono same he

//rest and spread operator

//they are capable in array and object in js 

/* let array = [5, 10, 15, 20, 25]; */
// spread denoted with ...
 
//console.log(...array); when we use spread operator to take out the varibales from contagious memory location
//we use spread operator to make copy of array

//console.log(array);

//rest also ...

/* let testFunction = (...args) => {

}
 */

//for object

let object = {
    name: "john",
    age: 24,
    city: "New York",
};

let object2 = { ...object};
console.log(object2);

//if object is declared under object shallow clonong happens like we declare a object state with city newyork and we reassign it newwark in object 2 so newark is also visible in  object thats shallow 
//cloning not deep cloning

//for deep cloning json.parse(json.stringfy(object))
//in array everything id deepcloned




