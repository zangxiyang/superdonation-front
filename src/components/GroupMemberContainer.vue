<template>
  <div class="GroupMemberContainer">

    <ContainerTitle
        title="项目组成员"
        title-eng="PRO MEMBERS">
            <span slot="desc-zh">
                您可以选择以下成员进行打赏，请他们喝一杯☕。值得注意的是，在此处进行打赏的金额将通过组织账户转入到对应成员的账户中，您不会被记录在贡献者列表中，同时也不会被记录在组织的捐款流水中。
            </span>
      <span slot="desc-en">
                Donate the money to the one of group members, and you can treat him or her a cup of coffee ☕. But
                    please note that the money what you donated will transfer to corresponding member's account by
                    organization's account. And you will not be created the record in the list of contributors.
                    Meanwhile, the money what you donated will not be created a record in the list of donation flow.
            </span>
    </ContainerTitle>

    <carousel>
      <sd-card header-image-url="https://www.imsle.com/seale.jpg"
               :tags="['创始人','开发者']"
               v-on:donate-click="clickDonateButton"
               name="Seale">
        <div slot="title">Seale</div>
        <div slot="desc">
          描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
        </div>
      </sd-card>
      <sd-card header-image-url="https://www.imsle.com/seale.jpg"
               :tags="['阿里云','测试']"
               v-on:donate-click="clickDonateButton"
               name="Seale">
        <div slot="title">Seale</div>
        <div slot="desc">
          描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
        </div>
      </sd-card>
      <sd-card header-image-url="https://www.imsle.com/seale.jpg"
               :tags="['阿里云','测试']"
               v-on:donate-click="clickDonateButton"
               name="Seale">
        <div slot="title">Seale</div>
        <div slot="desc">
          描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
        </div>
      </sd-card>
    </carousel>
    <el-dialog
        title="使用支付宝捐助"
        :visible.sync="dialogVisible"
        width="40%"
        :close-on-click-modal="false"
        :center="true"
        :close-on-press-escape="false"
        :before-close="handleCloseDialog">
      <el-form :model="payInfoForm" label-position="right" label-width="85px">
        <el-form-item label="支付给">
          <el-input name="payToName" v-model="payToName" disabled/>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input name="nickName" v-model="payInfoForm.nickName" auto-complete="off"
                    placeholder="请输入您的昵称,这将显示在流水清单上"></el-input>
        </el-form-item>
        <el-form-item label="QQ">
          <el-input name="qq" v-model="payInfoForm.QQ" auto-complete="off" placeholder="请输入您的QQ账号"></el-input>
        </el-form-item>
        <el-form-item label="想说的话">
          <el-input
              name="message"
              v-model="payInfoForm.message"
              auto-complete="off"
              placeholder="请输入您对团队或开发者想说的话"
              type="textarea"
              autosize
              maxlength="100"
              show-word-limit/>

        </el-form-item>
        <el-form-item label="捐助金额">
          <el-input name="money" v-model="payInfoForm.money" placeholder="请输入您想要捐助的金额" id="alipay">
            <i slot="prefix" style="font-size: 20px;line-height: 40px;margin-left: -3px;">
              <icon-font icon="icon-MoneyBag"></icon-font>
            </i>
            <template slot="append">元 | RMB | CNY</template>
          </el-input>

        </el-form-item>

        <el-form-item label="支付方式">
          <payment-radio-group>
            <payment-radio
                v-model="payInfoForm.payment"
                :is-icon=true
                icon-font-name="icon-alipay"
                value="alipay"
                :checked="true"
                :size="100"
            />
            <payment-radio
                v-model="payInfoForm.payment"
                :is-icon=true
                icon-font-name="icon-wechatpay"
                value="wechat"
                :size="100"
                disabled
            />
          </payment-radio-group>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
                <el-popconfirm
                    title="这将发起支付订单,您确定执行操作吗?"
                    placement="top"
                    @onConfirm="createPayment">
                    <el-button type="primary" slot="reference">发起订单</el-button>
                </el-popconfirm>
            </span>
    </el-dialog>
  </div>
</template>

<script>

import QRCode from "qrcodejs2"
import Carousel from "./subComponents/carousel";
import SdCard from "./subComponents/sdCard";
import IconFont from "./subComponents/iconFont";
import ContainerTitle from "./subComponents/containerTitle";
import PaymentRadioGroup from "@/components/subComponents/paymentRadioGroup";
import PaymentRadio from "@/components/subComponents/paymentRadio";

export default {
  name: "GroupMemberContainer",
  components: {PaymentRadio, PaymentRadioGroup, ContainerTitle, IconFont, SdCard, Carousel},
  mounted() {

  },
  data() {
    return {
      dialogVisible: false,
      payToName: '',
      payInfoForm: {
        nickName: '',
        QQ: '',
        message: '',
        money: '',
        payment: 'alipay'
      }
    }
  },
  methods: {
    clickDonateButton: function (name) {
      this.payToName = name
      this.dialogVisible = true

    },
    handleCloseDialog: function () {
      //支付窗口关闭之前调用
      Object.assign(this.$data.payInfoForm, this.$options.data().payInfoForm)
      if (this.isGenPay) this.$refs.qrCode.innerHTML = ""
      this.isGenPay = false
      this.dialogVisible = false
    },
    genQRCode: function () {
      new QRCode(this.$refs.qrCode, {
        text: 'http://www.baidu.com',
        width: 196,
        height: 196,
        colorDark: '#fff',
        colorLight: '#000',
        correctLevel: QRCode.CorrectLevel.H,
      })
      // 对二维码盒子取消title内容
      this.$refs.qrCode.setAttribute('title', '')
    },
    createPayment: function () {
      //TODO 创建支付订单


    }
  }
}
</script>

<style scoped>
h2 {
  color: rgb(20, 20, 20);
  font-size: 2rem;
  line-height: 36px;
  font-weight: normal;
  display: -webkit-flex;
  display: flex;
  align-items: center;
}

h2 > .membersTitle {
  margin-right: 10px;
}

.GroupMemberContainer {
  padding-top: 5rem;
  width: 1280px;
  margin: 0 auto;
}

.membersDesc > .desc-zh, .desc-en {
  padding: 10px 0;
  font-size: 14px;
  color: #777;
}

.QrCodePayment {
  width: 207px;
  height: 207px;
  padding: 6px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px dashed #979797;
}

.QrCodePayment > .empty {
  padding-top: 20%;
  text-align: center;
  cursor: default;
  user-select: none;
  -webkit-user-select: none;
  color: #aaa;
}


</style>