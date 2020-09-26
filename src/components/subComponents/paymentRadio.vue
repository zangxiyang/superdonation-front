<template>
  <label class="sp-radio"
         :class="{'checked':model===value,'disabled':disabled}"
         @click="updateVal"
         :disabled="disabled">
    <label class="sp-payment-radio" >
      <input type="hidden" ref="radio" :value="value" >
    </label>
    <span v-if="isIcon">
      <IconFont :icon="IconFontName" :size="size"/>
    </span>
  </label>
</template>

<script>
import IconFont from "@/components/subComponents/iconFont";

export default {
  name: "paymentRadio",
  model: {
    prop: 'model',
    event: 'change'
  },
  components: {IconFont},
  props: {
    IconFontName: {
      type: String,
      required: false
    },
    size:{
      type: Number,
      default: 50
    },
    isIcon: {
      type: Boolean,
      default: false,
      required: false
    },
    value: {
      type: [String, Number],
      required: true
    },
    model: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return{

    }
  },
  methods: {
    updateVal: function () {//当用户点击radio时,触发change事件更新v-model
      if (!this.disabled){
        //判断当前是否禁用
        this.$emit('change', this.$refs.radio.value);
      }
    }
  },
  watch: {
    //监听

  },
  mounted() {
    if (this.checked === true && !this.disabled) this.updateVal();
  }
}
</script>

<style scoped>
.sp-radio{
  display: flex;
  display: -webkit-flex;
  align-items: center;
  border: 1px solid #a8a8a8;
  margin-right: 15px;
  padding: 0 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: .3s linear;
  -webkit-transition: .3s linear;
}
.sp-radio.checked{
  border-color: #409EFF;
  transition: .2s ease-in;
  -webkit-transition: .2s ease-in;
}
.sp-radio.disabled{
  border-color: #ccc;

}
.sp-radio.disabled >span{
  filter: drop-shadow(#ccc 10000px 0);
  transform: translateX(-10000px);
  overflow: hidden;
}


</style>