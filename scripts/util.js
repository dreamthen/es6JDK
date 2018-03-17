// define(function () {
//     return {
//         getDate(date, type) {
//             if (type === 1) {
//                 return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(-2)}-${`0${date.getDate()}`.slice(-2)}`;
//             }
//             if (type === 2) {
//                 return `${date.getFullYear()}-${`0${date.getMonth()}`.slice(-2)}-${`0${date.getDate()}`.slice(-2)} ${`0${date.getHours()}`.slice(-2)}`
//             }
//         }
//     }
// });
module.exports = {
    getDate(date, type){
        if(type === 1){
            return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(-2)}-${`0${date.getDate()}`.slice(-2)}`;
        }
        if(type === 2){
            return `${date.getFullYear()}-${`0${date.getMonth()}`.slice(-2)}-${`0${date.getDate()}`.slice(-2)} ${`0${date.getHours()}`.slice(-2)}`;
        }
    }
};