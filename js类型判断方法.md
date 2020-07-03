##　js类型判断方法

    ```
    console.log(Object.prototype.toString.call("jerry"));//[object String]
    console.log(Object.prototype.toString.call(12));//[object Number]
    console.log(Object.prototype.toString.call(true));//[object Boolean]
    console.log(Object.prototype.toString.call(undefined));//[object Undefined]
    console.log(Object.prototype.toString.call(null));//[object Null]
    console.log(Object.prototype.toString.call({name: "jerry"}));//[object Object]
    console.log(Object.prototype.toString.call(function(){}));//[object Function]
    console.log(Object.prototype.toString.call([]));//[object Array]
    console.log(Object.prototype.toString.call(new Date));//[object Date]
    console.log(Object.prototype.toString.call(/\d/));//[object RegExp]
    function Person(){};
    console.log(Object.prototype.toString.call(new Person));//[object Object]
    ```