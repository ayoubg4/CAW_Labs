const fs = require("fs");
function readfile(a){
    const txt = fs.writeFileSync("./exo4.txt",a)
}
readfile("ayoub brs");