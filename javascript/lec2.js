//.map .oreach .filter .find .sort all things are based on arrays

//1 .map

/* let array = [1,2,3,4,5]; */
 //let newArray = [];

 /* for(let i =0; i < array.length; i++){
    newArray[i] = array[i] * array[i];
 }

 console.log(newArray);
 */
 //this entire uper function is mathematical form of .map function
 //it says us new array based on new array based on some computsion logic
//in js a funciton is also a js object

/* function functionForMap(element) {
    return element * element;
}
let newArray = array.map(functionForMap);
console.log(newArray); */

//2. for each

/* let array = [1,2,3,4,5];
array.forEach((element, index) => {
 console.log(element); }
);  //return type is void whereas .map rerurn array
 */
//.3 .filter

 /* let array = [10,20,30,40,50,111]; */

/* let newArray = array.filter((element) => element >= 30);
console.log(newArray); */
 
//.find

/* let temp = array.find((value) => {
    return value > 20;
});

console.log(temp); */  //output will only be 30

/* let sortedArray = array.sort( );
console.log(sortedArray); */ //sorting by default in lexigaphical order

//we use comparator function for proper sorting

//object destructuring 

/* let details = {
    name: "alex",
    age: 24,
    adress: {
        street:  "Brooklyn",
        city: "New York",
        state: "Ny",
    },
};

let { name: myName, age} = details;
console.log(myName, age);
 */


//objec mathcing

//classes

class Animal {
    noOfLegs;
    color;
    family;

    constructor(noOfLegs, color, family) {
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
    }
}


let animal = new Animal(4, "brown", "rodent");
console.log(animal);


//string interporaltion
