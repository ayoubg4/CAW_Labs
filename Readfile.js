const fs = require("fs");
function readfile(a){
    const txt = fs.readFileSync(a)
    console.log(txt.toString());
}
readfile("./file.txt");