/////////////////
//             //
// CHALLENGE 1 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log("Start of Challenge 1");

console.log("I am at the beginning of the code");
setTimeout(() => console.log("I am in the setTimeout callback function"), 0);
console.log("I am at the end of the code");

console.log("End of Challenge 1");
*/ // (do not alter this line)

/////////////////
//             //
// CHALLENGE 2 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log("Start of Challenge 2");
const sayHello = setInterval(() => console.log("Interval Hello!"), 2000);

setTimeout(() => clearInterval(sayHello), 10000);
console.log("End of Challenge 2");
*/ // (do not alter this line)

/////////////////
//             //
// CHALLENGE 3 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log("Start of Challenge 3");

everyXsecsForYsecs = (func, delay, duration) => {
  let initialInterval = delay * 1000;
  let interval = initialInterval;
  let runTime = duration * 1000;
  let numOfExecutions = Math.floor(runTime / interval);

  while (numOfExecutions) {
    setTimeout(async () => await func(), interval);
    interval += initialInterval;
    numOfExecutions--;
  }

  //   const runID = setInterval(() => func(), interval);
  //   setTimeout(() => clearInterval(runID), runTime);
};

sayHowdy = () => console.log("Howdy");

everyXsecsForYsecs(sayHowdy, 1, 5);

console.log("End of Challenge 3");
// */// (do not alter this line)

/////////////////
//             //
// CHALLENGE 4 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log("Start of Challenge 4");
// ...your code below

console.log("End of Challenge 4");
// */// (do not alter this line)

/////////////////
//             //
// CHALLENGE 5 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log("Start of Challenge 5");
// ...your code below

// ...your code above
document.body.style.background = "#def";
console.log("End of Challenge 3");
// */// (do not alter this line)

/////////////////
//             //
// CHALLENGE 6 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log("Start of Challenge 6");
var dataReceived;

function ajaxSimulate(id, callback) {
  var database = ["Aaron", "Barbara", "Chris"];
}
// ...your code below

console.log("End of Challenge 6");
// */// (do not alter this line)

/////////////////
//             //
// CHALLENGE 7 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log("Start of Challenge 7");
// ...your code below

console.log("End of Challenge 7");
// */// (do not alter this line)

/////////////////
//             //
// CHALLENGE 8 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log("Start of Challenge 8");
// ...your code below

console.log("End of Challenge 8");
// */// (do not alter this line)

/////////////////
//             //
// CHALLENGE 9 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log("Start of Challenge 9");
// ...your code below

console.log("End of Challenge 9");
// */// (do not alter this line)
