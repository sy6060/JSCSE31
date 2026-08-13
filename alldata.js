let c=true;
console.log("data type of c is",typeof c);
let s=Number.MAX_SAFE_INTEGER;
console.log("max limit of the number is ",s);
console.log(s+1);  //deos not work properly
//unpredictable result after this range
let a=BigInt(s+3);
console.log(a);
console.log(a+BigInt(5));
//bigInt and normal number are diff data types 
// so they wont be operated together
let x;
console.log(typeof x);  //undefined 
let y=null;
console.log(typeof y);  //object