// define(['./util.js'], function (util) {
//     return {
//         getAUtil(date) {
//             return util.getDate(date, 1);
//         }
//     }
// });
let util = require("./util");
module.exports = {
    getAUitil(date) {
        return util.getDate(date, 2);
    }
};