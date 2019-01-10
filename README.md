Render a Angularjs1 Component in React with "angular2react" Demo
================================================================

使用"angular2react"可以把一个angular component包装成react的组件，并且以react的方式去调用它。

相比完全纯手工，代码精简很多（参看另一个没用angular2react的例子）。

需要注意的是：在获取`$injector`的时候，必须执行类似的操作：

```
angular.bootstrap(document.createElement('div'), ['moduleName'])
```

也就是说，必须bootstrap某个module，那个`module.run()`方法才会被执行。而这一点在angular2react的文档上没有提到。

对于简单的component可以很方便的转换，对于复杂的还没有尝试。

```
npm install
npm start
```

