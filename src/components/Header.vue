<!--主页上的Header-->
<template>
    <div class="sd-header">
        <div class="sd-container">
            <div class="header-content-container">
                <div class="header-content">
                    <div class="header-logo-container no-select">
                        <img :src="logoUrl" alt="Logo" v-if="hasLogo" ondragstart='return false;'>
                        <img src="@/assets/logo.png" alt="" v-if="hasLogo === false" ondragstart='return false;'>
                        <template v-if="hasLogoText">
                            <div class="Logo-text">
                                {{logoText}}
                            </div>
                        </template>
                        <template v-if="hasLogoText === false">
                            <div class="Logo-text">
                                {{logoTextDefault}}
                            </div>
                        </template>
                    </div>
                    <div class="header-social-container">
                        <template v-if="orgFlag">
                            <!--组织标识-->
                            <el-tag type="info" style="margin-right: 10px;cursor: default;user-select: none;-webkit-user-select: none;">
                                OPEN PRO ORGANIZATION
                            </el-tag>
                        </template>
                        <social-button
                                icon="icon-home"
                                placement="top"
                                href="https://www.imsle.com"
                                content="博客"
                                />
                        <social-button content="Github"
                                       href="JavaScript:;"
                                       icon="icon-github1"
                                       placement="top"
                                       icon-font-size='22'/>

                        <div>

                        </div>
                    </div>
                    <div class="header-desc-container">
                        {{descriptionText}}
                    </div>
                </div>
            </div>
            <div class="header-bg"></div>
        </div>
    </div>
</template>

<script>


    import SocialButton from "./subComponents/socialButton";

    export default {
        name: "Header",
        components: {
            SocialButton

        },
        data() {
            return {
                logoUrl: '',
                hasLogo: false,
                hasLogoText: false,
                logoText: 'LOGO文字信息',
                logoTextDefault: 'SEALE\'S DONATION WEBSITE',
                orgFlag: true,
                descriptionText: '欢迎您来到对我的捐助页面，您可以选择一些项目对我进行捐助，以期项目能够得到良好的发展，和可持续化地开发！'
            }
        }
    }
</script>

<style scoped>
    .sd-header {
        width: 100%;
        height: 100%;
        border-bottom: 1px solid #eeeeee;
        box-shadow: -6px 6px 7px 0 #f1f1f1;
    }

    .sd-container {
        width: 1280px;
        margin: 0 auto;
    }

    .header-content-container {
        padding-top: 3rem;
        padding-bottom: 2rem;

    }

    .header-content {
        display: flex;
        display: -webkit-flex;
        flex-wrap: nowrap;
        flex-direction: column;
    }

    .header-content > div {
        margin-top: 1rem;
    }

    .header-content > div:first-child {
        margin: 0;
    }

    .header-logo-container > img {
        max-width: 10rem;
        height: auto;
    }

    .Logo-text {
        padding-top: .85rem;
        font-size: 2rem;
        font-weight: 600;
        color: #000;
    }

    .header-social-container {
        display: flex;
        display: -webkit-flex;
        justify-content: flex-start;
        align-items: center;
    }

</style>