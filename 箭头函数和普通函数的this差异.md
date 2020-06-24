## 箭头函数和普通函数的this差异

   箭头函数是es6新增的方法，可以更加简洁的编写函数但是和普通的函数相比，它的this指向不同。下文通过不同的情况下两种方法的this指向来解释这两种方法的this差异。
   
   1. 直接在window环境下编写一个函数
   ```
   // 箭头函数
   () => {
       console.log(this) => windows
   }
   // 普通函数
   function() {
       console.log(this) => windows
   }
   ```

   2. 在对象中编写一个函数
   ```
   // 情况一
   let a = () => {
       console.log(this)
   }
   let b = function () {
       console.log(this)
   }
   let c = {
       funA: a,
       funB: b
   }
   c.funA() => windwos
   c.funB() => {funA: a, funB: b}
   ```

   3. 在一个函数中编写箭头函数以及普通函数
   ```
   function a () {
       let b = () => {
           console.log(this)
       }
       function c () {
           console.log(this)
       }
       b() => windows
       c() => windows
   }
   a()

   // 在这边看不出差异，但是如果把a函数放入一个对象中就能体现出差异了
   let d = {
       funA: a
   }
   d.funA()
   => {funA: a}
   => windows

   // 箭头函数如果是通过调用的方式存在函数中，this的指向也不同
   let b = () => {
       console.log(this)
   }
   let c = function() {
       console.log(this)
   }
   function a () {
       b()
       c()
   }
   let d = {
       funA : a
   }
   d.funA()
   => windows
   => windows
   ```
   从上边的例子可以看出箭头函数的this指向和上下文有关。
   
   在第一个例子中函数a的this指向windows，那么箭头函数也指向windows，在第二个例子中函数a被包裹在对象d中，this指向对象d，此时箭头函数b的this也指向了d对象。

   从普通函数a和普通函数b的this指向可以看出，如果普通函数没有被调用的话this指向windows，如果被调用那么this指向调用它的上一级对象

   第三个例子与第二个例子相似，但是为什么箭头函数的this指向不同呢，其实是因为箭头函数的this获取到了之后就不能进行改变了，js有call，apply等方法可以改变函数的箭头指向但是对箭头函数无效