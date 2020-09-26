<template>
  <svg class="icon default" aria-hidden="true" :style="{ fontSize:size+'px' }">
    <use :xlink:href="'#'+icon"></use>
  </svg>
</template>

<script>
export default {
  name: "iconFont",
  props: {
    icon: String,
    size: {
      type: Number,
      default: 20
    }
  },
  mounted() {
    console.log('当前的size:'+this.size)
  }
}
</script>

<style scoped>
.icon.default {
  margin: 0 5px;
}
</style>