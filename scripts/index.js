// const $ = window.$;
// {
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
// 异步的场景:定时情况、网络请求以及事件绑定
//定时情况
// console.log("start");
// setTimeout(function timer() {
//     console.log("timer");
// }, 1000);
// console.log("end");
//网络请求
// console.log("start");
// $.get("../data/data.json", function success(data) {
//     console.log(data);
// });
// $.ajax({
//     url: "../data/data/json",
//     type: "post",
//     dataType: "json",
//     data: JSON.stringify({
//         symbol: "boolean"
//     }),
//     contentType: "application/json",
//     timeout: 10000,
//     success(data) {
//         console.log(data);
//     }
// });
// $.ajax({
//     url: "../data/data.json",
//     type: "get",
//     dataType: "json",
//     data: {
//         symbol: "boolean"
//     },
//     contentType: "application/json",
//     success(data) {
//         console.log(data);
//     }
// });
// console.log("end");
//事件绑定
// console.log("start");
// let btn = document.getElementById("btn");
// btn.addEventListener("click", function (e) {
//     console.log("clicked");
//     e.stopImmediatePropagation();
// });
// console.log("end");
// console.log(100);
// console.log(200);
// alert(200);
// console.log(300);
// console.log("start");
// let image = document.createElement("img");
// image.onload = function () {
//     console.log("loaded");
// };
// image.src = "https://www.1jtec.com/images/keryiBarter_description_bg.png";
// document.body.appendChild(image);
// console.log("end");
// 定时情况
// 网络请求
// 事件绑定
// JS是单线程的,代码在执行时,如果遇到异步请求、定时和事件等情况,会先将异步暂存起来,不能一起执行,只能等到所有代码执行完毕之后,再将暂存的代码解封并进行执行
// 1 3 5 2 4
// 定时情况、网络请求以及事件绑定
// function dateFormate(dateString) {
//     let date = new Date(dateString);
//     return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(-2)}-${`0${date.getDate()}`.slice(-2)}`;
// }
// console.log(dateFormate("2017-06-11"));
// 写一个能遍历对象和数组通用的forEach函数
// function forEach(obj) {
//     switch (Object.prototype.toString.call(obj)) {
//         case "[object Object]":
//             for (let item in obj) {
//                 console.log(obj[item]);
//             }
//             break;
//         case "[object Array]":
//             for (let arrItem of obj) {
//                 console.log(arrItem);
//             }
//             break;
//         default:
//             return false;
//     }
//     return true;
// }
// forEach({name: "Gary", age: 26, hobby: ["basketball", "volleyball"]});
// forEach(["name", "age", "hobby", 24, false, 26, {carName: "benz"}]);
// 获取随机数,要求是长度一致的字符串格式
// 1-1001之间的随机数
// toFixed,toExponential,toPrecision
// let random = Math.random() * 1000 + 1;
// let randomString = random.toPrecision(4);
// console.log(typeof randomString, randomString);
// Date
// console.log(Date.now());
// let date = new Date();
// console.log(date.getTime());
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate() + 1);
// console.log(date.getHours() + 1);
// console.log(date.getMinutes() + 1);
// console.log(date.getSeconds() + 1);
// Math
// console.log(Math.random());
// Array
// let arr = ["name", "age", "number", "hobby", 24, false, 26, {carName: "benz"}];
// arr.forEach(function arrForEach(arrItem, arrIndex) {
//     console.log(arrItem);
// });
// console.log(arr.every(function arrEvery(everyItem, everyIndex) {
//     if (everyItem >= 20) {
//         return true;
//     }
// }));
// console.log(arr.some(function arrEvery(everyItem, everyIndex) {
//     if (everyItem > 24) {
//         return "very well";
//     }
// }));
// function forEach(obj, fn) {
//     switch (Object.prototype.toString.call(obj)) {
//         case "[object Array]":
//             obj.forEach(function arrForeach(item, index) {
//                 fn(index, item);
//             });
//             break;
//         case "[object Object]":
//             for (let key in obj) {
//                 fn(key, obj[key]);
//             }
//             break;
//         default:
//             return false;
//     }
//     return true;
// }
// let obj = {name: "Gary", age: 26, hobby: ["basketball", "volleyball"]},
//     arr = ["name", "age", "hobby", 24, false, 26, {carName: "benz"}];
// forEach(arr, function arrFunc(index, item) {
//     console.log(`${index} | ${item}`);
// });
// forEach(obj, function objFunc(key, value) {
//     console.log(`${key} | ${value}`);
// });
// }
//权限code显示or隐藏sdk
// const application = (function () {
//     var block = "block",
//         none = "none";
//     return {
//         //判断对象是否为空
//         isEmpty: function (obj) {
//             for (var key in obj) {
//                 return false;
//             }
//             return true;
//         },
//         //获取拥有自定义属性的dom节点数组闭包
//         hasDataCodeAttribute(dom, attribute) {
//             var attributeArr = [];
//             return (function getAttributeArr(dom, attribute) {
//                 var childNodes = dom.childNodes,
//                     length = childNodes.length;
//                 if (length <= 0) {
//                     return false;
//                 }
//                 for (var i = 0; i < length; i++) {
//                     if (childNodes[i].nodeType === 1) {
//                         if (childNodes[i].hasAttribute(attribute)) {
//                             attributeArr.push(childNodes[i]);
//                         }
//                         getAttributeArr(childNodes[i], attribute);
//                     }
//                 }
//                 return attributeArr;
//             })(dom, attribute);
//         },
//         //根据权限code显示or隐藏节点元素
//         codeAuthorityControl: function (dom, attribute, codeList) {
//             //虚拟dom,获取其所有的子节点
//             dom = dom || {};
//             attribute = attribute || "data-code";
//             codeList = codeList || [];
//             var self = this;
//             if (self instanceof Object && self !== window) {
//                 //判断dom对象是否为空对象
//                 if (!self.isEmpty(dom)) {
//                     //获取拥有自定义属性的dom节点数组
//                     var attributeArr = self.hasDataCodeAttribute(dom, attribute),
//                         attributeArrLength = attributeArr.length;
//                     for (var i = 0; i < attributeArrLength; i++) {
//                         //判断权限code数组中是否存在节点元素的attribute属性code的标识位
//                         var flag = false,
//                             attributeName = attributeArr[i].getAttribute(attribute);
//                         for (var j = 0; j < codeList.length; j++) {
//                             if (attributeName === codeList[j].toString()) {
//                                 flag = true;
//                                 break;
//                             }
//                         }
//                         if (flag) {
//                             attributeArr[i].style.display = block;
//                         } else {
//                             attributeArr[i].style.display = none;
//                         }
//                     }
//                 } else {
//                     //抛出一个类型错误
//                     throw new TypeError("请传入节点的虚拟dom");
//                 }
//             } else {
//                 //抛出一个引用错误
//                 throw new ReferenceError("window对象中没有您指定的方法");
//             }
//         }
//     }
// })();
// var clearLove = document.getElementById("clearlove67");
// application.codeAuthorityControl(clearLove, "", []);
//导出权限code显示or隐藏sdk
// export default application;
// function destructuringArray(arr, formatter) {
//     function formatterToArray(formatter) {
//         let formatterToArrayArr = [];
//         return (function formatterToArrayFunc(formatter) {
//             let regExp = /\[(.*)\]/,
//                 removeBracketContent = formatter.replace(regExp, "$1"),
//                 removeInnerContent = removeBracketContent.replace(regExp, ""),
//                 innerContrent = regExp.exec(removeBracketContent) && regExp.exec(removeBracketContent)[0],
//                 removeInnerContentArr = removeInnerContent.split(",");
//             formatterToArrayArr = [...formatterToArrayArr, removeInnerContentArr];
//             innerContrent && formatterToArrayFunc(innerContrent);
//             return formatterToArrayArr;
//         })(formatter);
//     }
//     function arrToFormatterArray(arr) {
//         let arrToFormatterArrayArr = [];
//         return (function arrToFormatterArray(arr) {
//             if (Object.prototype.toString.call(arr) === "[object Array]") {
//                 arrToFormatterArrayArr = [...arrToFormatterArrayArr, arr];
//                 for (let arrItem of arr) {
//                     arrToFormatterArray(arrItem);
//                 }
//             }
//             return arrToFormatterArrayArr;
//         })(arr);
//     }
//     let formatterToArrayArr = formatterToArray(formatter),
//         arrToFormatterArrayArr = arrToFormatterArray(arr),
//         formatterObj = {};
//     for (let [formatterKey, formatterValue] of formatterToArrayArr.entries()) {
//         for (let [key, value] of formatterValue.entries()) {
//             if (value !== "") {
//                 formatterObj[value] = arrToFormatterArrayArr[formatterKey][key];
//             }
//         }
//     }
//     return formatterObj;
// }
// let result = destructuringArray([1, [2, 7, [5, 6]], 3], "[a,[b,,d],c]");
// console.log(result);
// 树
// property prototype
// attribute
// var clearlove = document.getElementById("clearlove"),
//     li = document.getElementsByTagName("li"),
//     liByClass = document.getElementsByClassName("ulLi"),
//     liUlByName = document.getElementsByName("liUl"),
//     liSelector = document.querySelectorAll("li");
// var ul = liByClass[0].parentNode,
//     ul_end = liByClass[1].parentNode;
// ul_end.removeChild(liByClass[1]);
// ul_end.appendChild(liByClass[2]);
// var ul = liByClass[0].parentNode;
// var ul = liByClass[0].parentElement;
// console.log(ul, ul.childNodes, ul.childNodes[0].nodeName, ul.childNodes[1].nodeName, ul.childNodes[0].nodeType, ul.childNodes[1].nodeType);
// var li_new = document.createElement("li");
// li_new.innerHTML = "clearlove100";
// document.body.appendChild(li_new);
// console.log(clearlove, li[0], liByClass[1], liUlByName[2], liSelector[1]);
// console.log(clearlove.id, li[0].className);
// li[0].className = "liUlReverse";
// console.log(li[0].style.display);
// li[0].style.display = "none";
// console.log(li[0].nodeName, li[0].nodeType); //LI 1
// console.log(li[1].getAttribute("data-code"));
// li[0].setAttribute("data-code", "0004");
// property只是对一个JS对象属性的修改
// attribute则是对html标签属性的修改
// console.log(navigator.userAgent);
// function isChrome(userAgent) {
//     return navigator.userAgent.indexOf(userAgent) !== -1;
// }
// console.log(isChrome("Chrome"));
// console.log(screen.width, screen.height);
// console.log(location, location.href, location.host, location.hostname, location.port, location.pathname, location.search, location.hash);
// history.back();
// history.forward();
// history.go(1);
// history.go(-1);
// function urlSearchSplit(url) {
//     let param = url.slice(url.indexOf("?") + 1),
//         paramArray = param.split("&"),
//         paramObj = {};
//     for (let paramItem of paramArray) {
//         let paramInnerArray = paramItem.split("=");
//         paramObj[paramInnerArray[0]] = paramInnerArray[1];
//     }
//     return paramObj;
// }
// console.log(urlSearchSplit(window.location.search));
// function DurationDateArray(beginDate, endDate) {
//     var beginTime = new Date(beginDate).getTime(),
//         endTime = new Date(endDate).getTime(),
//         dayTime = 1000 * 60 * 60 * 24,
//         result = [];
//
//     function getDayTime(date) {
//         let date_new = new Date(date);
//         return `${date_new.getFullYear()}-${`0${date_new.getMonth() + 1}`.slice(-2)}-${`0${date_new.getDate()}`.slice(-2)}`;
//     }
//
//     for (let i = beginTime; i <= endTime; i += dayTime) {
//         let day = getDayTime(i);
//         result = [...result, day];
//     }
//     return result;
// }
// let DurationArr = DurationDateArray('2018-9-10', '2018-11-13');
// console.log(DurationArr);
// let appEvent = {
//     getEvent(event) {
//         return event ? event : window.event;
//     },
//     getTarget(event) {
//         return event.target ? event.target : event.srcElement;
//     },
//     stopPropagation(event) {
//         if (event.stopPropagation) {
//             event.stopPropagation();
//         } else {
//             event.cancelBubble = true;
//         }
//     },
//     preventDefault(event) {
//         if (event.preventDefault) {
//             event.preventDefault();
//         } else {
//             event.returnValue = false;
//         }
//     },
//     addEventListenerHandler(ele, type, fn) {
//         if (ele.addEventListener) {
//             ele.addEventListener(type, fn);
//         } else {
//             ele.attachEvent(`on${type}`, fn);
//         }
//     },
//     removeEventListenerHandler(ele, type, fn) {
//         if (ele.removeEventListener) {
//             ele.removeEventListener(type, fn);
//         } else {
//             ele.detachEvent(`on${type}`, fn);
//         }
//     }
// };
// function bindEvent(ele, type, selector, fn) {
//     // appEvent.addEventListenerHandler(ele, type, fn);
//     // appEvent.addEventListenerHandler(ele, type, fn);
//     if (!fn) {
//         fn = selector;
//         selector = null;
//     }
//     ele.addEventListener(type, function addEvent(e) {
//         var target;
//         if (selector) {
//             target = e.target;
//             if (target.matches(selector)) {
//                 fn.call(target, e);
//             }
//         } else {
//             fn(e);
//         }
//     });
// }
// let clearlove = document.getElementById("clearlove67");
// bindEvent(clearlove, "click", "li", function (e) {
//     console.log(this.innerHTML);
// });
// bindEvent(clearlove, "click", function (e) {
//     console.log(clearlove.innerHTML);
// });
// let clearlove = document.getElementById("clearlove67"),
//     clearloveInner = document.getElementById("clearlove");
// bindEvent(clearlove, "click", function (e) {
//     let event = appEvent.getEvent(e),
//         target = appEvent.getTarget(event);
//     console.log(target);
//     console.log(target.childNodes);
// });
// bindEvent(clearloveInner, "click", function (e) {
//     let event = appEvent.getEvent(e),
//         target = appEvent.getTarget(event);
//     console.log(target);
//     appEvent.stopPropagation(event);
//     appEvent.preventDefault(event);
// });
// ajax
//跨域:协议、域名和端口有一个不相同，就是跨域
//跨域:协议(http或者https等)、域名和端口，有一个不相同就是跨域
// var xhr = new XMLHttpRequest();
// xhr.open("get", "../data/data.json", true);
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             var data = JSON.parse(xhr.responseText);
//             console.log(data.header);
//         }
//     }
// };
// xhr.send(null);
// var xhr = new XMLHttpRequest();
// xhr.open("get", "../data/data.json", true);
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             console.log(JSON.parse(xhr.responseText));
//         }
//     }
// };
// xhr.send(null);
// 三种标签可以进行跨域
// img src
// link href 可利用CDN,CDN跨域
// script src 可利用CDN,CDN跨域 JSONP跨域
// document.cookie = "name:Gary,age:24";
// console.log(document.cookie);
// cookie能存储的量:4kb
// API太简易,使用难苛
// var person = {
//     name: "Gary",
//     age: 24,
//     hobby: ['basketball', 'tennis']
// };
// localStorage.setItem("person", JSON.stringify(person));
// console.log(JSON.parse(localStorage.getItem("person")));
// localStorage.removeItem("person");
// console.log(JSON.parse(localStorage.getItem("person")));
// sessionStorage.setItem("person", JSON.stringify(person));
// console.log(JSON.parse(sessionStorage.getItem("person")));
// localStorage和sessionStorage存储量大:5M
// API易用且效率高
// targetArray = ["2018-02-18", "2018-02-23", "2018-02-28", "2018-03-05", "2018-03-10", "2018-03-15"]
// tempArray = [['2018-02-23','2018-02-28'], ['2018-03-10', '2018-03-15']]
// [{form: 1, to: 2}, {from: 4, to: 5}]
// function tempToTargetPostion(targetArray, tempArray) {
//     var result = [];
//     for (let [index, value] of tempArray.entries()) {
//         let resultObj = {};
//         for (let [targetIndex, targetValue] of targetArray.entries()) {
//             switch (targetValue) {
//                 case value[0]:
//                     resultObj["from"] = targetIndex;
//                     break;
//                 case value[1]:
//                     resultObj["to"] = targetIndex;
//                     break;
//                 default:
//                     break;
//             }
//         }
//         result = [...result, resultObj];
//     }
//     return result;
// }
// let targetArray = ["2018-02-18", "2018-02-23", "2018-02-28", "2018-03-05", "2018-03-10", "2018-03-15"],
//     tempArray = [['2018-02-23', '2018-02-28'], ['2018-03-10', '2018-03-15'], ['2018-02-28', '2018-04-18']];
// let resultObjArr = tempToTargetPostion(targetArray, tempArray);
// console.log(resultObjArr);
// function durationDateString(beginDate, endDate) {
//     let beginTime = new Date(beginDate).getTime(),
//         endTime = new Date(endDate).getTime(),
//         dayTime = 1000 * 60 * 60 * 24,
//         resultArr = [];
//     function formatterDate(dateTime) {
//         let date = new Date(dateTime);
//         return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(-2)}-${`0${date.getDate()}`.slice(-2)}`;
//     }
//     for (let i = beginTime; i <= endTime; i += dayTime) {
//         let dayFormatter = formatterDate(i);
//         resultArr = [...resultArr, dayFormatter];
//     }
//     return resultArr;
// }
// let result = durationDateString('2018-09-10', '2018-11-08');
// console.log(result);