<template>
  <div class="sp-payment-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "paymentRadioGroup",
  props:{

  }
}
</script>

<style scoped>
.sp-payment-group{
  display: flex;
  display: -webkit-flex;
  justify-content: flex-start;
  -webkit-justify-content: flex-start;
  align-items: center;
  -webkit-align-items: center;
}
</style>