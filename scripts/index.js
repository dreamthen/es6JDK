{
    // const object = {
    //         name: "Gary",
    //         age: 18
    //     },
    //     object_ano = {
    //         name: "Gary Yin",
    //         sexy: "boy"
    //     };
    // console.log(Object.assign(object, object_ano));
    // let splitUrlFunc = (url) => {
    //     let query = url.slice(url.lastIndexOf("?") + 1),
    //         param = query.split("&"),
    //         arrOutObj = new Map();
    //     for (let paramItem of param) {
    //         let innerParam = paramItem.split("=");
    //         arrOutObj.set(innerParam[0], innerParam[1]);
    //     }
    //     return arrOutObj;
    // };
    // let queryMap = splitUrlFunc("/#/app/shop/vas/bid/index?showContract=1&reload=1520320829863&shopId=324965008");
    // console.log(queryMap.get("showContract"));
    //迭代器
    let obj = {
        name: "Gary",
        age: 24,
        hobby: ["basketball", "tennis"],
        [Symbol.iterator]() {
            let self = this,
                arr_this = Object.keys(self),
                leg = arr_this.length,
                index = 0;
            return {
                next() {
                    if (index < leg) {
                        return {
                            value: self[arr_this[index++]],
                            done: false
                        }
                    } else {
                        return {
                            value: self[arr_this[index++]],
                            done: true
                        }
                    }
                }
            }
        }
    };
    for (let item of obj) {
        console.log(item);
    }
    // function* ajax() {
    //     yield new Promise((resolve, reject) => {
    //         resolve({})
    //     });
    // }
    // function getData() {
    //     let ajaxResult = ajax(),
    //         nextResultValue = ajaxResult.next().value;
    //     nextResultValue.then((data) => {
    //         if (data && data.grade) {
    //             console.log(data);
    //         } else {
    //             console.log("wait");
    //             setTimeout(() => {
    //                 getData();
    //             }, 1000);
    //         }
    //     }, () => {
    //
    //     });
    // }
    // getData();
    // 控制器 Generator
}