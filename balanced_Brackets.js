// Balanced Brackets:
// Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets []
// would be considered valid in code and mathematics (is balanced).

// ***Examples***
// Input:	                    Output:
// "(x + y) - (4)"	            true
// "(((10 ) ()) ((?)(:)))"	    true
// "[{()}]"	                    true
// "(50)("              	    false
// "[{]}"               	    false

const compare = (open, close) => {
  const brackets = { "{": "}", "[": "]", "(": ")" };
  return brackets[open] === close ? true : false;
};

const isBalanced = str => {
  const open = { "(": "(", "[": "[", "{": "{" };
  const closed = { ")": ")", "]": "]", "}": "}" };
  const openStack = [];
  const closedQueue = [];

  if (closed[str[0]]) return false;

  Array.prototype.forEach.call(str, char => {
    if (open[char]) openStack.push(char);
    if (closed[char]) closedQueue.push(char);
  });
  if (openStack.length !== closedQueue.length) return false;
  while (openStack.length && closedQueue.length) {
    if (!compare(openStack.pop(), closedQueue.shift())) return false;
  }
  return true;
};

console.log(isBalanced("(x + y) - (4)"));
console.log(isBalanced("(((10 ) ()) ((?)(:)))"));
console.log(isBalanced("[{()}]"));
console.log(isBalanced("(50)("));
console.log(isBalanced("[{]}"));
console.log(isBalanced(")))()((("));
console.log(isBalanced("}"));
