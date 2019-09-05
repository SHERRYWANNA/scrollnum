<template>
<div class="scrollnum"> 
    <div class="scrollnum_container" :class="[numclass]">
        <span class="scrollnum_content" :style="scrollStyle" ref="content">
            <b v-for="n in 20" class="scrollnum_num">{{(n - 1)%10}}</b>
        </span>
    </div>
</div>
</template>

<script type="text/javascript">
export default {
    name: 'singlescrollnum',
    data() {
        return {
            animateTime: 0.25,
            class: this.numclass,
            circleNum: 10,
            numOffset: 0,
            scrollStyle: {
                top: "100%",
                webkitTransitionDuration: "",
                oTransitionDuration: "",
                transitionDuration: ""
            },
            toNextPage: 0
        };
    },
    props: {
        num: {
            type: String,
            default() {
                return '0';
            },
            validator(value) {
                return /^\d$/.test(value.toString());
            }
        },
        numclass: {
            type: String,
            default() {
                return '';
            }
        }
    },
    methods: {
        retrunToFirstPage() {
            this.toNextPage = 0;
            this.numOffset = -10;
        },
        setAnimationStyle() {
            var _value = this.numOffset < 0 ? this.numOffset + 10 : this.numOffset,
                _topNum = this.toNextPage ? this.num + 10 : this.num,
                _topStyle = '-' + (_topNum*100) + '%',
                _transitionTime = 10 === _value ? '0s' : (_value * this.animateTime + 's'),
                _style = {};

            ["webkitTransitionDuration", "oTransitionDuration", "transitionDuration"].forEach((item) => {
                _style[item] = _transitionTime;
            });
            
            ["top"].forEach((item) => {
                _style[item] = _topStyle;
            });

            this.scrollStyle = _style;
        },
        addNumScrollEndEvent() {
            this.addAnimationEndEvent(this.$refs.content, () => {
                this.retrunToFirstPage();
            });
        },
        addAnimationEndEvent(el, fn) {
            el.addEventListener('webkitTransitionEnd', () => {
                fn();
            });
            el.addEventListener('oTransitionEnd', () => {
                fn();
            });
            el.addEventListener('transitionEnd', () => {
                fn();
            });
        }
    },
    watch: {
        num: {
            handler(targetNum, nowNum) {
                targetNum = parseInt(targetNum);
                nowNum = parseInt(nowNum);
                if (isNaN(nowNum)) {
                    this.setAnimationStyle();
                    nowNum = 0;
                }
                if (targetNum === nowNum) {
                    return;
                }
                if (targetNum < nowNum) {
                    this.toNextPage = 1;
                }
                this.numOffset = targetNum - nowNum;
                this.num = targetNum;
            },
            immediate: true
        },
        numOffset: {
            handler(newValue, oldValue) {
                if (newValue) {
                    this.setAnimationStyle();
                    this.numOffset = 0;
                } else if (!oldValue) {
                    this.numOffset = 0;
                    this.setAnimationStyle();
                }
            },
            immediate: true
        }
    },
    mounted() {
        this.addNumScrollEndEvent();
    }
};
</script>

<style>
    .scrollnum_container {
        position: relative;
        height: 1em;
        overflow: hidden;
    }
    .scrollnum_container:after {
        content: '9';
        opacity: 0;
    }
    .scrollnum_content {
        height: 20em; 
        display: block;  
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transition-property: top;
        -o-transition-property: top;
        transition-property: top;
    }
    .scrollnum_num {
        display: block;
        line-height: 1em;
        height: 1em;
    }

    .scrollnums_point {
        line-height: 1em;
    }
</style>