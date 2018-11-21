var Vue = require('vue');
import scrollNum from '../../src/index.js';

var container = new Vue({
    el: '.container',
    components: {
        scrollNum
    },
    data: {
        showTotalAmount: '000'
    },
    methods: {
        addNum() {
            let _num = Math.ceil(Math.random() * 100);
            _num = (_num + parseInt(this.showTotalAmount)).toString();
            
            this.showTotalAmount = this.addZero(_num, 3);
        },
        addZero(num, length) {
            num = num.toString();
            
            if (num.length === length) {
                return num;
            } 
            if (num.length > length) {
                num = (parseInt(num)%1000).toString();
            } 
            if (num.length < length) {
                for (let i = 0, len = length - num.length; i < len; i++) {
                    num = '0' + num;
                }
            }
            return num.toString();
        }
    }
});