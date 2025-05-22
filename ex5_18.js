// Core JavaScript Practice by Seungmin Kim

var curry5 = function(func) {
  return function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return func(a, b, c, d, e);
          };
        };
      };
    };
  };
};
var getMax = curry5(Math.max);
console.log(getMax(1)(2)(3)(4)(5));

var getMin = curry5(Math.min);
console.log(getMin(1)(2)(3)(4)(5));


var curry6 = func => a => b => c => d => e => f => func(a,b,c,d,e,f);
var getMax2 = curry6(Math.max);
console.log(getMax2(1)(2)(3)(4)(5)(6));