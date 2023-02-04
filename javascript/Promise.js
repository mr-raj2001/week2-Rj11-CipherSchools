//promise is something which gets selected or rejeted
// java is asynchronous language


let num1 = 10;
let num2 = 15;

let promise = new Promise( (done, notdone) => {
    let sum = num1 + num2;
    if(sum > 24){
        done();
    } else{
        notdone();
    }

});


//.then happens only  when the promise is fulfilled and .catch happens when promise is not fulfilled
promise.then( () => {
    console.log("Promise was fulfilled");
}).catch(() => {
    console.log("Promise was not fulfilled");
});