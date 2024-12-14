function setOne(arr) {
    return [...new Set(arr)];
}

console.log(setOne([4,5,7,4,8,4,3,2]))

////

function getRideOf(tab, ...val){
    const alls = [...val].concat(tab);
    const arr1 = [...new Set(alls)];
    const res = arr1.filter(e => !val.includes(e));
    console.log(res) ;
}

getRideOf([5,2,7,8,5,1,5,3,1,7,4,6,9],5,3,9)