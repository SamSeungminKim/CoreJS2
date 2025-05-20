// Core JavaScript Practice by Seungmin Kim

Array.prototype.map = function(callback, thisArg) {
  var mappedArr = [];
  for (var i = 0; i < this.length; i++) {
    // var mappedValue = callback.call(thisArg || window, this[i], i, this);
    var mappedValue = callback.call(thisArg || window, i, this[i], this);
    mappedArr[i] = mappedValue;
  }
  return mappedArr;
};


// Add ex4_04 example for test
var newArr3 = [10, 20, 30].map(function(index, currentValue) {
  console.log(index, currentValue);
  return currentValue + 5;
});
console.log(newArr3);