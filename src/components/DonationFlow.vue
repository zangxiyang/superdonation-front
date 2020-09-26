<template>
  <div class="donationFlowContainer">
    <ContainerTitle
        title="捐赠流水"
        title-eng="DONATION FLOW">
            <span slot="desc-zh">
                这里是捐赠的款项的流水清单，在这里，您可以查看到每一笔款项的去向。
            </span>
      <span slot="desc-en">
                This is the flow list of donation. In this, you can find where each money to go.
            </span>
    </ContainerTitle>
    <div class="flowContainer">
      <div class="flowBoxContainer">
        <FlowDetail :flows="flows"/>
        <div class="flowBoxBottomButtonContainer">
          <div class="flowButton" v-random-border-color>
            <span>查看所有捐赠</span>
          </div>
          <div class="flowButton" v-random-border-color>
            <span>查看所有流水</span>
          </div>
        </div>
      </div>
      <div class="flowEmpty"></div>
      <div class="flowDetail">
        <div class="moneyTotal">
          <div class="fd-title">
            <span class="zh">捐款总金额</span>
            <span class="en">Money Total</span>
          </div>
          <div class="fd-content">
            <span class="num">{{ totalMoney }}</span>
          </div>
        </div>
        <div class="expenditure">
          <div class="fd-title">
            <span class="zh">已支出</span>
            <span class="en">Money Payed</span>
          </div>
          <div class="fd-content">
            <span class="num">{{ payedMoney }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//捐赠流水
import ContainerTitle from "./subComponents/containerTitle";
import FlowDetail from "@/components/subComponents/flowDetail";

export default {
  name: "DonationFlow",
  components: {FlowDetail, ContainerTitle},
  data(){
    return{
      totalMoney: 0,
      payedMoney: 0,
      flows:[
        {
          id: 0,
          infoTitle: '用于组织购买服务器',
          author: 'Seale',
          date: '2020年9月26日',
          payment: 'AliPay',
          isGet: false,
          money: 114
        },
        {
          id: 1,
          infoTitle: '用于组织购买服务器',
          author: 'Seale',
          date: '2020年9月26日',
          payment: 'AliPay',
          isGet: false,
          money: 114
        },
        {
          id: 2,
          infoTitle: '捐赠服务器',
          author: 'Seale',
          date: '2020年7月22日',
          payment: 'AliPay',
          isGet: true,
          money: 114
        },
        {
          id: 3,
          infoTitle: '用于组织购买服务器',
          author: 'Seale',
          date: '2020年9月26日',
          payment: 'AliPay',
          isGet: false,
          money: 114
        }
      ]
    }
  }
}
</script>

<style scoped>

.donationFlowContainer {
  padding-top: 5rem;
  width: 1280px;
  margin: 0 auto;
}

.flowContainer {
  display: flex;
  display: -webkit-flex;
  box-sizing: border-box;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
}

.flowBoxContainer {
  max-width: 800px;
  width: 100%;
  display: flex;
  display: -webkit-flex;
  flex: 10 1 0;
  flex-direction: column;
  box-sizing: border-box;

}

.flowEmpty {
  width: 32px;
  flex: 1 1 0;
  box-sizing: border-box;
}

.flowDetail {
  width: 100%;
  display: flex;
  flex: 1 1 300px;
  overflow: hidden;
  margin: 0 1rem .8rem 1rem;
  border: 1px solid rgb(230, 232, 235);
  border-radius: 10px;
  flex-direction: column;
}

.flowDetail>.moneyTotal,.expenditure{
  box-sizing: border-box;
  padding: 16px 32px;
}
.flowDetail{

}
.fd-title{
  font-size: 14px;
  color: #777777;
}
.fd-title>span{
  margin-right: 1rem;
}
.fd-title>span:last-child{
  margin-right: 0;
}
 .fd-content{
  padding: 8px 0;
}
 .fd-content >span{
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: -0.4px;
  line-height: 2rem;
  color: #000000;
}
 .fd-content >span:before{
  content: '￥';
}
 .fd-content >span:after{
  content: 'CNY';
  color: #c4c7cc;
  font-weight: normal;
  font-size: 1.5rem;
  margin-left: 0.35rem;
}

.expenditure{
  background: #f5f7fa;
}

/*捐赠流水按钮容器 - 按钮*/
.flowBoxBottomButtonContainer{
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
}
.flowBoxBottomButtonContainer>.flowButton{
  display: flex;
  display: -webkit-flex;
  padding: 13px;
  align-items: center;
  justify-content: center;
  margin: 0 25px;
  flex: 1 1 auto;
  border: 1px solid #dcdee0;
  border-radius: 10px;
  user-select: none;
  cursor: pointer;
  transition: background-color .2s;
  -webkit-transition: background-color .2s;
}
.flowButton:first-child{
  margin-left: 0;
}
.flowButton:last-child{
  margin-right: 0;
}
.flowButton:hover{
  background-color: #ececec;
  transition: background-color .2s;
  -webkit-transition: background-color .2s;
}
.flowButton > span{
  -webkit-text-fill-color: transparent;
  background-image: -webkit-linear-gradient(bottom left, #795548, #7728a9, #607D8B);
  display: inline-block;
  -webkit-background-clip: text;
  color: #795548;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

</style>