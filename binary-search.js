
function binarySearch(sortedArray, elToFind) {
  var lowIndex = 0;
  var highIndex = sortedArray.length - 1;
  while (lowIndex <= highIndex) {
    var midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (sortedArray[midIndex] == elToFind) {
      return midIndex;
    } else if (sortedArray[midIndex] < elToFind) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  } return null;
}

var sortedRainbow = ["blue", "green", "indigo", "orange", "red", "violet", "yellow"];
binarySearch(sortedRainbow, "green"); // returns 1
binarySearch(sortedRainbow, "white"); // returns null
