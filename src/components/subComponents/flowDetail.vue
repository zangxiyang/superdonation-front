<template>
  <div class="flowBox">
    <div class="flowItem" v-for="flow in flows" :key="flow.id">
      <div class="avatar"></div>
      <div class="content">
        <div class="c-title">
          {{ flow.infoTitle }}
        </div>
        <div class="c-desc">
          <span class="author">{{ flow.author }}</span>
          <span class="date">{{ flow.date }}</span>
          <span class="payment">{{ flow.payment }}</span>
        </div>
      </div>
      <div class="money">
        <template v-if="flow.isGet">
          <span class="green">+</span>
        </template>
        <template v-else>
          <span class="red">-</span>
        </template>
        <span class="moneyNum">
          {{ flow.money }}
        </span>
        <span class="moneyCom">CNY</span>
      </div>
      <template v-if="flow.isGet">
        <div class="rightLine-g"></div>
      </template>
      <template v-else>
        <div class="rightLine-r"></div>
      </template>
    </div>

  </div>
</template>

<script>
export default {
  name: "flowDetail",
  props: {
    flows: Array
  }
}
</script>

<style scoped>
.flowBox {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  border: 1px solid rgb(230, 232, 235);
  border-radius: 10px;
  overflow: hidden;
}

.flowItem {
  display: flex;
  display: -webkit-flex;
  justify-content: flex-start;
  /*align-items: center;*/
  padding: 1.3rem;
  border-bottom: 1px solid rgb(230, 232, 235);
  position: relative;
}

.flowItem .rightLine-r {
  position: absolute;
  width: 2px;
  background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 212, 223) 55.73%, rgb(255, 0, 68) 100%);
  height: 90%;
  right: 0;
  top: 0;
}

.flowItem .rightLine-g {
  position: absolute;
  width: 2px;
  background: linear-gradient(rgb(22, 221, 0) 0%, rgb(198, 243, 204) 55.73%, rgba(255, 255, 255, 0) 100%);
  height: 90%;
  right: 0;
  top: 10%;
}

.flowItem:last-child {
  border-bottom: none;
}

.flowItem .content {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.flowItem .content .c-title {
  font-weight: 600;
  margin-bottom: .625rem;
}

.flowItem .content .c-desc {
  font-size: 10px;
}

.c-desc > .author:after, .date:after {
  content: "|";
  padding: 0 .25rem;
  color: #4e5052;
  font-weight: 500;
}

.c-desc > .author {
  color: #c76b46;
  font-weight: 600;
}

.flowItem .avatar {
  margin-right: 1rem;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: rgb(240, 241, 242);
}

.flowItem .money {
  margin-left: auto;
  display: flex;
  display: -webkit-flex;
  align-items: flex-start;
  line-height: 1rem;
}

.flowItem .money > span[class='red'], span[class='green'] {
  padding: 0 .925rem;
  font-size: 1rem;
  font-weight: 600;
}

.flowItem .money > span[class='red'] {
  color: rgb(184, 15, 60);;
}

.flowItem .money > span[class='green'] {
  color: rgb(13, 184, 19);
}

.flowItem .money > .moneyNum {
  font-weight: 600;
}

.flowItem .money > .moneyNum:before {
  content: "￥";
  padding: 0 3px;
}

.flowItem .money > .moneyCom {
  font-weight: 600;
  padding-left: 1rem;
  color: #c1c1c1;
}
</style>