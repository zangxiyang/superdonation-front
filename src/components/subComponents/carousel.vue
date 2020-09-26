<template>

    <div>
        <div class="arrow">
            <span id="arrow-left" @click="arrowClick('left')"  :style="{opacity:hasLeft,cursor:cursorL}">
                <IconFont icon="icon-fingerpointleft" :size="30"/>
            </span>
            <span id="arrow-right" @click="arrowClick('right')" :style="{opacity:hasRight,cursor:cursorR}">
                <IconFont icon="icon-fingerpointright" :size="30"/>
            </span>

        </div>
        <div class="main-carousel" ref="carousel-main">
            <slot/>
        </div>
    </div>
</template>

<script>
    import Flickity from 'flickity'
    import 'flickity/dist/flickity.min.css'
    import IconFont from "./iconFont";

    export default {
        name: "carousel",
        components: {IconFont},
        props: {},
        data() {
            return {
                hasLeft: 0,
                hasRight: 1,
                cursorL: 'default',
                cursorR: 'pointer',
                flick: ''
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                // let ele = document.querySelector('.main-carousel') 会导致组件冲突
                let ele = this.$refs['carousel-main']
                this.flick = new Flickity(ele, {
                    prevNextButtons: false,
                    pageDots: false,
                    adaptiveHeight: true,
                    cellAlign: 'left',
                    draggable: false,
                    percentPosition: false
                })

                //绑定监听事件
                this.flick.on('change', (index) => {
                    //对按钮进行控制
                    if (index === 0){
                        //此时为第一个
                        this.hasLeft = 0
                        this.cursorL = 'default'
                        this.hasRight = 1
                        this.cursorR = 'pointer'
                    }else if (index === this.flick.cells.length - 1){
                        // 最后一个
                        this.hasRight = 0
                        this.cursorR = 'default'
                        this.hasLeft = 1
                        this.cursorL = 'pointer'
                    }else {
                        //中间
                        this.hasRight = 1
                        this.cursorL = 'pointer'
                        this.hasLeft = 1
                        this.cursorR = 'pointer'
                    }
                })
                if (this.flick.cells.length === 1){
                    // 当前单元格只有一个
                    this.cursorR = 'not-allowed'
                }
            },
            arrowClick(arrowIndex) {
                switch (arrowIndex) {
                    case 'left':
                        if (this.hasLeft === 1) this.flick.previous()
                        break;
                    case 'right':
                        if (this.hasRight === 1) this.flick.next()
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    .arrow {
        text-align: right;
    }

    .arrow > #arrow-left, #arrow-right {
        transition:  opacity .2s linear;
        -webkit-transition: opacity .2s linear;
    }
</style>