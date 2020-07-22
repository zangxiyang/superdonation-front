<template>
    <div class="content">
        <h2>
            <span class="title">{{title}}</span>
            <el-tag class="title" effect="dark" type="danger">{{titleEng}}</el-tag>
        </h2>
        <div class="desc">
            <div class="desc-zh">
                <slot name="desc-zh"/>
            </div>
            <div class="desc-en">
                <slot name="desc-en"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "containerTitle",
        props:{
            title: String,
            titleEng: String
        }
    }
</script>

<style scoped>
    .desc > .desc-zh,.desc-en{
        padding: 10px 0;
        font-size: 14px;
        color: #777;
    }
    h2 {
        color: rgb(20, 20, 20);
        font-size: 2rem;
        line-height: 36px;
        font-weight: normal;
        display: -webkit-flex;
        display: flex;
        align-items: center;
    }
    h2 > .title {
        margin-right: 10px;
    }

</style>