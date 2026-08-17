//for each loop is used to iterate over arrays and perform a specified action 
// for each element in the array. It does not return a value and cannot be broken out of like a traditional loop.
let arr = [1, 2, 3, 4, 5];
let total = 0;
arr.forEach(function(num) {
  total += num;
});
console.log("Total sum using forEach: " + total);

//difference bw for each and for of is that forEach is a method of the array object and can only be used on arrays, while for of can be used on any iterable object. 
// Additionally, forEach does not return a value and cannot be broken out of, while for of can be used with break and continue statements.
