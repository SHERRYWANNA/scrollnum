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
            let _num = Math.random() * 50;

            this.showTotalAmount = parseInt(_num + this.showTotalAmount);
        }
    }
});