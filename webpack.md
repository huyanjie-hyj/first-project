##### webpack入口文件学习笔记
webpack的配置文件从webpack.config.js开始进行记录  
* 顶部引入的文件先不看，运行代码从module.exports中的entry字段开始，该字段标明了运行的入口文件，使用的是相对路径，支持多文件引用，
* 同样的地方output字段代表了文件的输出地址，有path和filename两个字段，path字段表示文件的输出地址，一般会引用__dirname，代表了所在文件的目录，属于node.js中的部分。filename代表的是生成文件的名字，可以自行取名，但是如果entry中是一个多入口的对象，那么filename需要就需要动态生成名字了，我现在用的就是通过[name]获取entry中对应入口的名字来取名。
* webpack可以引入loader进行代码的编译，在写代码的时候可能使用多种的语法css，less，es6等等，有些浏览器是无法识别的，解决这些问题的方法就是这个loader，通过module中的rule设置test和user，test中使用的是正则，筛选出相应的文件，user是使用的loader名字。
