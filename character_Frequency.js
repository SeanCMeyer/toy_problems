// Character Frequency
// Write a function that takes as its input a string and returns an array of arrays as shown below
// sorted in descending order by frequency and then by ascending order by character.

// ******Examples******
// Input:	                Output:
// "aaabbc"	                [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// "mississippi"	        [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// ""	                    [ ]

// function characterFrequency (string) {
//   return string.split('')                                            space / time = O(n)
//   .filter((char, i) => count(char, string.slice(0,i+1)) < 2)
//   .map(char => [char, count(char, string)])
//   .sort()
//   .sort((a, b) => b[1] - a[1]);
// }

// function count(char, string) {
//   return string.split('').filter(c => c === char).length;
// }

// The solution above has time and space complexity flaws.

function characterFrequency(string) {
  const frequencyLibrary = {};
  const result = [];
  Array.prototype.forEach.call(string, char => {
    frequencyLibrary[char]
      ? (frequencyLibrary[char][1] += 1)
      : (frequencyLibrary[char] = [char, 1]);
  });
  for (let tuple in frequencyLibrary) {
    result.push(frequencyLibrary[tuple]);
  }
  for (let tuple of result) {
  }
  return result;
}

const sortTuples = () => {};

// console.log(characterFrequency("aaabbc"));
console.log(characterFrequency("mississippi"));
