// Core JavaScript Practice by Seungmin Kim

var outer = function() {
  var a = 1;
  var inner = function() {
    console.log(++a);
  };
  inner();
};
outer();