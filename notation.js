function mean(notes){
    let res = 0;
    let c = 0
    notes.forEach(e => {
        res+=e;
        c++;
    });
    return res/c;
}
console.log(mean([15,10,12,10,15]));
module.exports = mean;




