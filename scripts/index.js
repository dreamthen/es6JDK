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
    // let obj = {
    //     name: "Gary",
    //     age: 24,
    //     hobby: ["basketball", "tennis"],
    //     [Symbol.iterator]() {
    //         let self = this,
    //             arr_this = Object.keys(self),
    //             leg = arr_this.length,
    //             index = 0;
    //         return {
    //             next() {
    //                 if (index < leg) {
    //                     return {
    //                         value: self[arr_this[index++]],
    //                         done: false
    //                     }
    //                 } else {
    //                     return {
    //                         value: self[arr_this[index++]],
    //                         done: true
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // };
    // for (let item of obj) {
    //     console.log(item);
    // }
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
    // let obj = {},
    //     arr = [],
    //     f = function () {
    //     };
    // obj["name"] = "Gary";
    // arr["name"] = "Gary";
    // f["name"] = "Gary";
    //对象、数组和函数都有__proto__隐式原型
    // console.log(obj.__proto__, arr.__proto__, f.__proto__);
    //函数又有prototype显式原型
    // console.log(f.prototype);
    //构造函数引用的对象隐式原型指向构造函数的显式原型
    // console.log(obj.__proto__ === Object.prototype);
    // function Person(name, age) {
    //     this.name = name;
    // }
    // Person.prototype.alertName = function () {
    //     alert(this.name);
    // };
    //引用p的隐式原型指向其构造函数的显式原型
    //如果在引用p上不存在的属性,会在其隐式原型(即其构造函数的显式原型)上面去找
    // let p = new Person("Gary");
    // p.printName = function () {
    //     console.log(this.name);
    // };
    // p.printName();
    // p.alertName();
    // console.log(p.__proto__ === Person.prototype);
    // for (let key in p) {
    //     if (p.hasOwnProperty(key)) {
    //         console.log(key);
    //     }
    // }
    // console.log(p.toString());
    // console.log(p.__proto__.__proto__ === Object.prototype);
    // console.log(p instanceof Person, p instanceof Object);
    // function f(o) {
    //     function F() {
    //     }
    //
    //     F.prototype = o;
    //     return new F();
    // }
    // function extend(subClass, superClass) {
    //     let p = f(superClass.prototype);
    //     subClass.prototype = p;
    //     p.constructor = subClass;
    // }
    // function Person(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }
    // Person.prototype.introduceMyself = function () {
    //     console.log(`Hello,everybody~${this.name}, ${this.age} year's old.`);
    // };
    // function Gary(name, age, hobby) {
    //     Person.call(this, name, age);
    //     this.hobby = hobby;
    // }
    // extend(Gary, Person);
    // Gary.prototype.introduceMyself = function () {
    //     console.log(`Hello,everybody~${this.name}, ${this.age} year's old. I like ${this.hobby}!`);
    // };
    // Gary.prototype.sayHobby = function () {
    //     console.log(this.hobby);
    // };
    // let gary = new Gary("Gary", 25, "basketball");
    // gary.introduceMyself();
    // gary.sayHobby();
    // console.log(gary.__proto__.__proto__.__proto__ === Object.prototype);
    // function Elem(id) {
    //     this.elem = document.getElementById(id);
    // }
    // Elem.prototype.html = function (val) {
    //     let elem = this.elem;
    //     if (val) {
    //         elem.innerHTML = val;
    //         return this;
    //     } else {
    //         return elem.innerHTML;
    //     }
    // };
    // Elem.prototype.on = function (type, fn) {
    //     let elem = this.elem;
    //     elem.addEventListener(type, fn);
    //     return this;
    // };
    // let clearlove = new Elem("clearlove");
    // console.log(clearlove.html());
    // clearlove.html("<h1>clearlove57</h1>").on("click", function (e) {
    //     console.log("clearlove clicked");
    // }).html("<h2>clearlove66</h2>");
    // console.log(clearlove.__proto__ === Elem.prototype);
    // console.log(clearlove.__proto__.__proto__ === Object.prototype);
    // console.log(a);
    // var a = "aaa 3a好牌";
    // func("Gary");
    // function func(name) {
    //     console.log(name, age);
    //     var age = 26;
    // }
    // var name = 'yinwenkai';
    // function f() {
    //     console.log(this.name);
    // }
    // f();
    // var person = {
    //     name: "Gary",
    //     getName() {
    //         console.log(this.name);
    //     }
    // };
    // person.getName();
    // person.getName.call({name: "yinwenkai"});
    // let f = person.getName;
    // f.call({name: "Gary Yin"});
    // function f(name, age) {
    //     console.log(this.hobby, age, name);
    // }
    // f.call({hobby: "basketball"}, "Gary", 24);
    // f.apply({hobby: "volleyball"}, ["Gary Yin", 25]);
    // f.bind({hobby: "tennis"}, "yinwenkai", 22)();
    // var f = function (name, age) {
    //     console.log(this.hobby, age, name);
    // }.bind({hobby: "uncle chen"});
    // f("yin kai wen", 27);
    // function project() {
    //     var car = "benz";
    //     return function () {
    //         console.log(car);
    //     };
    // }
    // var car_container = project(),
    //     car = "bmw";
    // car_container();
    // function timer() {
    //     console.log("world");
    // }
    // setTimeout(timer, 1000);
    // function setTimerout(fn, timer) {
    //     var time = timer;
    //     fn(time);
    // }
    // setTimerout(function f(time) {
    //     console.log(time);
    // }, 1000);
    // new绑定
    // 显式绑定
    // 隐式绑定
    // 上下文绑定
    // for (let i = 0; i < 10; i++) {
    // for (var i = 0; i < 10; i++) {
    //     var a = document.createElement("a");
    //     a.innerHTML = `${i}<br />`;
    // a.addEventListener("click", function eventListener(e) {
    //     console.log(i);
    // });
    //     a.addEventListener("click", (function eventListener(i) {
    //         return function (e) {
    //             console.log(i);
    //             e.stopImmediatePropagation();
    //         };
    //     })(i));
    //     document.body.appendChild(a);
    // }
    // function isFirstLoad() {
    //     let isFirst = [];
    //     return function (num) {
    //         if (isFirst.indexOf(num) !== -1) {
    //             return false;
    //         } else {
    //             isFirst.push(num);
    //             return true;
    //         }
    //     }
    // }
    // let firstLoad = isFirstLoad();
    // console.log(firstLoad(10));
    // console.log(firstLoad(10));
    // console.log(firstLoad(20));
    // console.log(firstLoad("Gary"));
    // console.log(firstLoad("Gary"));

}