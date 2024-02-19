const add = function(a, b) {
    return a + b;
  };
  
const subtract = function(a, b) {
      return a - b;
};
  
const divide = function(a, b) {
    return a / b;
};
  
const multiply = function(a) {
    let total = 1;
    for (let i = 0; i < a.length; i++) {
      total = total * a[i];
    }
    return total;
};