<template>
    <div class="sd-card">
        <div class="header">
            <div class="tagsContainer">
                <div class="sd-card-tag" v-for="tag in tags" :key="tag">{{tag}}</div>
            </div>

            <div class="header-bg" :style="{backgroundImage:'url('+headerImageUrl+')'}"></div>
        </div>
        <div class="content">
            <h2>
                <slot name="title"/>
            </h2>
            <div class="description">
                <slot name="desc"/>
            </div>
            <div class="serverConfiguration" v-show="showConfig">
                <slot name="config"/>
            </div>
            <div class="price" v-show="showPrice">
                <h3>￥{{price}}</h3>
                <span>CNY / year</span>
            </div>
            <div class="donate">
                <div class="sd-donated-button" v-random-border-color @click="clickDonate">
                    <span>捐助 | 支付宝 | AliPay</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sdCard",
        props: {
            headerImageUrl: String,
            tags: {
                type: Array,
                default: () => []
            },
            name: {
                type: String
            },
            showPrice:{
                type: Boolean,
                default: false
            },
            showConfig:{
                type: Boolean,
                default: false
            },
            price:{
                type: String
            }
        },
        data() {
            return {
                dialogVisible: false
            }
        },
        directives: {
            randomBorderColor: {
                inserted: function (el) {
                    let colors = ['#ff5722', '#795548', '#9c27b0', '#ff9800', '#e91e63'];
                    const randomNum = Math.ceil(Math.random() * 4)
                    //取预制颜色并赋值
                    el.setAttribute('style', 'border-color:' + colors[randomNum] + ';');

                }
            }
        },
        mounted() {
            console.log("当前的name:"+this.name)
        },
        methods:{
            clickDonate: function () {
                console.log("点击了按钮")
                this.$emit('donate-click',this.name)
            }
        }
    }
</script>

<style scoped>
    .serverConfiguration{
        color: #777777;
        margin: .625rem 0;

        font-size: 12px;
        letter-spacing: -.4px;

    }
    h3{
        display: inline-block;
        padding-right: .5rem;
    }
    .sd-card {
        box-sizing: border-box;
        margin-right: 1rem;
        width: 280px;
        border: 1px solid rgb(220, 222, 224);
        position: relative;
        border-radius: 16px;
        overflow: hidden;
    }

    .sd-card > .header {
        position: relative;
        height: 100px;

    }

    .sd-card > .header .header-bg {
        position: absolute;
        top: 0;
        left: 0;
        background-position: center center;
        background-size: cover;
        width: 100%;
        height: 100px;
        z-index: -1;
    }

    .tagsContainer {
        display: flex;
        display: -webkit-flex;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        bottom: .5rem;
        left: .8rem;
    }

    .sd-card-tag {
        margin-right: 5px;
        padding: 5px 8px;
        color: #4e5052;
        background: #fff;
        font-size: 13px;
        font-weight: 600;
        border-radius: 5px;
        cursor: default;
    }

    .content {
        padding: 1.3rem 1rem;
    }

    .content h2 {
        font-weight: 600;
        font-size: 1.2rem;
        cursor: default;
    }

    .content .description {
        font-size: 14px;
        color: #777777;
        padding-top: .5rem;
        display: -webkit-box;
        cursor: default;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .donate {
        width: 100%;
        height: 100%;
        padding-top: 15px;
    }

    .sd-donated-button {
        text-align: center;
        padding: 10px;
        border: 1px solid #777777;
        border-radius: 10px;
        line-height: 20px;
        cursor: pointer;
        background: #fff;
        transition: background-color .2s linear;
        -webkit-transition: background-color .2s linear;

    }

    .sd-donated-button:hover {
        background-color: #ececec;
        transition: background-color .2s linear;
        -webkit-transition: background-color .2s linear;
    }

    .sd-donated-button > span {
        -webkit-text-fill-color: transparent;
        background-image: -webkit-linear-gradient(bottom left, #795548, #7728a9, #607D8B);
        display: inline-block;
        -webkit-background-clip: text;
        color: #795548;
        user-select: none;
        -webkit-user-select: none;

    }
</style>