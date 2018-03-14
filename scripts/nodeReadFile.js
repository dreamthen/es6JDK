const fs = require("fs");

function readFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, "utf-8", (error, data) => {
            if (error) return reject(error);
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
    console.log(data);
}, () => {

});

function co(gen) {
    let lg = gen();
    return new Promise((resolve, reject) => {
        (function next(lastValue) {
            let lgObject = lg.next(lastValue),
                value = lgObject.value,
                done = lgObject.done;
            if (done) {
                resolve(value);
            } else {
                value.then(next, reject);
            }
        })();
    });
}