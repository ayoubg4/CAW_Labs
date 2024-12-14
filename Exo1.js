let v1 = 2;
let v2 = 3;
console.log(v1);
console.log(v2);
[v1,v2] = [v2,v1];
console.log(v1);
console.log(v2);

///

const numbers = [ 1, 2, 3 ];
const letters = [ "a", "b", "c" ]
const foods = ["mango", "pecan pie" ];
const alls = numbers.concat(letters.concat(foods));

console.log(alls);

///////

let strng = "javascript";
const sprStrn = [...strng];
console.log(sprStrn);

/////

/*
a/ args will be contain [3,'A','B','C']
b/ args will be contain []
c/ args will be contain ['c','d']
*/

