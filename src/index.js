module.exports = function longestConsecutiveLength(array) {
  if (array.length === 0) return 0;
  let max = array[0],
  min = array[0],
  obj = {},
  countSequence = 1,
  currentKey,
  currentCount = 1;
  array.forEach(element => {
    if (element > max) max = element; 
    else if (element < min) min = element;
    obj[element] = true;
  });
  for (let key in obj) {
    if (!currentKey) currentKey = key;
    else if (key - currentKey === 1) currentCount++;
    else {
      if (currentCount > countSequence) countSequence = currentCount;
      currentCount = 1;
    }
      currentKey = key;
  }
  return countSequence;
}
