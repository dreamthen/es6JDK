{
    const object = {
            name: "Gary",
            age: 18
        },
        object_ano = {
            name: "Gary Yin",
            sexy: "boy"
        };
    console.log(Object.assign(object, object_ano));
    let splitUrlFunc = (url) => {
        let query = url.slice(url.lastIndexOf("?") + 1),
            param = query.split("&"),
            arrOutObj = new Map();
        for (let paramItem of param) {
            let innerParam = paramItem.split("=");
            arrOutObj.set(innerParam[0], innerParam[1]);
        }
        return arrOutObj;
    };
    let queryMap = splitUrlFunc("/#/app/shop/vas/bid/index?showContract=1&reload=1520320829863&shopId=324965008");
    console.log(queryMap.get("showContract"));
}