/*for of is used to iterate over iterable objects like arrays,
 strings, maps, sets, etc. It allows you to loop through the
  values of an iterable object.*/

  string = "Hello, World!";
  let c=0;
  for (const char of string) {
   c++;
  }
  console.log("Total characters: " + c);

  let a=[1, 2, 3, 4, 5];
  let sum=0;
  for (const num of a) {
   sum += num;
  }
  console.log("Sum of array elements: " + sum);