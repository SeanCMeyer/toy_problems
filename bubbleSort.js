var bubbleSort = function(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i + 1;
    if (array[i] > array[j]) {
      [array[i], array[j]] = [array[j], array[i]];
      bubbleSort(array);
    }
  }
  return array;
};
