# scrollnum

基于vue的数字向下滚动组件，构建工具使用webpack。

#### 安装

###### npm包名： @arni/scrollnum

```javascript
npm i -D @arni/scrollnum
```

##### 开发：

```javascript
安装： 根目录下执行 npm install
环境： npm run server (开发环境)
webpack没有打开open开关所以不会自动打开浏览器，具体页面访问本地服务器http://localhost:8080/examples/index.html。
```

##### 使用：

```html
<!-- 
numbers: 显示的数值
numberclass: 数字的样式
-->
<scroll-num :numbers="showTotalAmount" :numberclass="'f_s120 f-bold f_orange'"></scroll-num>
<button class="f_btn" @click="addNum">数字随机增长</button>
```

```javascript
import scrollNum from '@arni/scrollnum';

var app = new Vue({
    components: {
        scrollNum
    },
    data: {
        showTotalAmount: ''
    },
    methods: {
        addNum() {
            let _num = Math.ceil(Math.random() * 100);
            _num = _num + parseInt(this.showTotalAmount ? this.showTotalAmount : '0');
            this.showTotalAmount = _num;
        }
    }
});
```

#### 版本更新

- 1.0.0    基本完成功能
