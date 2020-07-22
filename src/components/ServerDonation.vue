<template>
    <div class="ServerDonationContainer">
        <ContainerTitle
                title="捐助服务器"
                title-eng="SERVER DONATION">
            <span slot="desc-zh">
                您可以选择对我们捐助服务器来继续提升我们的服务能力！
            </span>
            <span slot="desc-en">
                You can donate the server to us for improving our service!
            </span>
        </ContainerTitle>

        <carousel>
            <sd-card header-image-url="https://img.alicdn.com/tfs/TB1gkmIvhz1gK0jSZSgXXavwpXa-2880-584.jpg"
                     :tags="['阿里云','服务器']"
                     v-on:donate-click="clickDonateButton"
                     name="阿里云服务器"
                     :show-price="true"
                     :show-config="true"
                     price="114"
            >
                <div slot="title">阿里云服务器</div>
                <div slot="desc">
                    您可以选择赞助我们服务器，如果我们收到的的捐助款项较多，我们会根据服务内容进行配置的更改。感谢支持！
                </div>
                <div slot="config">
                    1核2G / 1M 带宽 / 40G 系统盘
                </div>
            </sd-card>
            <sd-card header-image-url="https://img.alicdn.com/tfs/TB1gkmIvhz1gK0jSZSgXXavwpXa-2880-584.jpg"
                     :tags="['阿里云','服务器']"
                     v-on:donate-click="clickDonateButton"
                     name="阿里云服务器"
                     :show-price="true"
                     :show-config="true"
                     price="448"
            >
                <div slot="title">阿里云服务器</div>
                <div slot="desc">
                    您可以选择赞助我们服务器，如果我们收到的的捐助款项较多，我们会根据服务内容进行配置的更改。感谢支持！
                </div>
                <div slot="config">
                    1核2G / 5M 带宽 / 40G 系统盘
                </div>
            </sd-card>

        </carousel>
    </div>
</template>

<script>
    import ContainerTitle from "./subComponents/containerTitle";
    import Carousel from "./subComponents/carousel";
    import SdCard from "./subComponents/sdCard";
    export default {
        name: "ServerDonation",
        components: {SdCard, Carousel, ContainerTitle},
        data(){
            return{
                name: '',
                serverPrice: 0,

            }
        },
        methods:{
            clickDonateButton: function (name) {
                this.name = name
            }
        }
    }
</script>

<style scoped>

    .ServerDonationContainer{
        padding-top: 5rem;
        width: 1280px;
        margin: 0 auto;
    }

</style>