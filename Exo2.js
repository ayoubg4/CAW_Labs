const arr = [3,5,8];
const plus_one = arr.map(n => n+1);

////

function double(arr){
    return arr.map(val => val*2);
}
////

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
const { a, b } = obj.numbers;
/////
function add(a,b){
    (a===0) ? a = 0 : a = a||10;
    (b===0) ? b = 0 : b = b||10;
    return a+b;
}
