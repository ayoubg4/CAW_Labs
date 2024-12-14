function exf(a,n){
    let res = [];
    for (let index = 0; index < n; index++) {
        res.push(a);
    }
    return res;
}
exf('echo',5);
exf('js from server',10)

module.exports = exf;