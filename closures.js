// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

function createFunction() {
  const hiHi = () => console.log("hello");
  return hiHi;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var function1 = createFunction();
// function1();

function createFunctionPrinter(input) {
  const saySomething = () => console.log(input);
  return saySomething;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var printSample = createFunctionPrinter('sample');
// printSample();
// var printHello = createFunctionPrinter('hello');
// printHello();

function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
  const alsoAddByY = y => {
    console.log(x + y);
    return x + y;
  };

  return alsoAddByY;
}

var addByTwo = addByX(2);
var addByThree = addByX(3);

// // now call addByTwo with an input of 1
// addByTwo(1)

// // now call addByTwo with an input of 2
// addByTwo(2)

//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let value;
  const inner = temp => {
    if (!value) {
      value = func(temp);
      return value;
    } else {
      return value;
    }
  };
  return inner;
}

var onceFunc = once(addByTwo);
var twiceFunc = once(addByThree);

// // UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6
// console.log(twiceFunc(5)); //should log 8
// console.log(twiceFunc(400000)); //should log 8

function after(count, func) {
  let timesRun = 1;

  const runCheck = () => {
    console.log(`I've run ${timesRun} times!!`);
    timesRun !== count ? timesRun++ : func();
  };
  return runCheck;
}

var called = function() {
  console.log("hello");
};
var afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed

function delay(func, wait) {
  setTimeout(() => {
    func.call(...arguments);
  }, wait);
}
