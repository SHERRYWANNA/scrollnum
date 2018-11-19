<template>
<div class="scrollnums f-clearil"> 
    <div class="scrollnums_content" v-for="n in numArr"> 
        <scroll-num :num="n.toString()" :numclass="numberClass" v-if="isNumber(n)"></scroll-num> 
        <span class="scrollnums_point" :class="[numberClass]" v-else>{{n}}</span> 
    </div>
</div>
</template>

<script type="text/javascript">
import singlescrollnum from './singlescrollnum.vue';

export default {
    name: 'scrollnum',
    props: {
        numbers: {
            type: String,
            default() {
                return '0.0';
            }
        },
        numberclass: {
            type: String,
            default() {
                return '';
            }
        }
    },
    data() {
        return {
            numArr: ['0'],
            numberClass: this.numberclass
        };
    },
    components: {
        'scroll-num': singlescrollnum
    },
    methods: {
        isNumber(value) {
            return /^\d$/.test(value);
        }
    },
    watch: {
        numbers: {
            handler(newValue, oldValue) {
                if (newValue) {
                    this.numArr = newValue.toString().split('');
                } else {
                    this.numbers = '0';
                }
            },
            immediate: true
        }
    }
};
</script>

<style>
    .scrollnums_content {
        display: inline-block;
        vertical-align: middle;
    }
    .scrollnums_point {
        line-height: 1em;
    }
</style>