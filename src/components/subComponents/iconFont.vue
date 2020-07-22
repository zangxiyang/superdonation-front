<template>
    <svg class="icon default" aria-hidden="true" style="font-size: 20px">
        <use :xlink:href="'#'+icon"></use>
    </svg>
</template>

<script>
    export default {
        name: "iconFont",
        props:{
            icon: String
        }
    }
</script>

<style scoped>
.icon.default{
    margin: 0 5px;
}
</style>