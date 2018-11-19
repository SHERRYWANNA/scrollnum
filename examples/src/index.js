var Vue = require('vue');
import scrollNum from '../../src/index.js';

var container = new Vue({
    el: '.container',
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