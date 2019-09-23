var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;

};

var testArray = [7, 9, 4];

console.log(testArray);

swap(testArray, 0, 1);
assertEqual(testArray, [9, 7, 4]);
swap(testArray, 2, 0);
assertEqual(testArray, [4, 7, 9]);
swap(testArray, 2, 1 );
assertEqual(testArray, [4, 9, 7]);
