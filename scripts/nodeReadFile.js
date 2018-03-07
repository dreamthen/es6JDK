const fs = require("fs");

function readFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, "utf-8", (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

function* read() {
    let a = yield readFile("../file/1.txt");
    console.log(a);
    let b = yield readFile("../file/2.txt");
    console.log(b);
    return b;
}

co(read).then((data) => {
    console.log(`end: ${data}`);
}, () => {

});

function co(gen) {
    let it = gen();
    return new Promise((resolve, reject) => {
        (function nexter(lastVal) {
            let {value, done} = it.next(lastVal);
            if (done) {
                resolve(value);
            } else {
                value.then(nexter, reject);
            }
        })();
    });
}