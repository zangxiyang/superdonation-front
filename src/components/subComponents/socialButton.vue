<template>
    <el-tooltip :content="content" effect="light" :placement="placement" style="margin-right: 10px">
        <a :href="href" target="_blank">
            <svg class="icon default" aria-hidden="true" :style="{fontSize:iconFontSize+'px'}">
                <use :xlink:href="'#'+icon"></use>
            </svg>
        </a>
    </el-tooltip>
</template>

<script>

    export default {
        name: "socialButton",
        props:{
            content: String,
            href: String,
            icon: String,
            placement: String,
            iconFontSize: String
        },

    }
</script>

<style scoped>
svg{
    font-size: 20px;
}
</style>