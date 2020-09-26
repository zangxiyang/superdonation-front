<template>
  <div class="cbCard">
    <div class="avatarContainer">
      <div class="defaultAvatar"></div>
      <div class="avatarName">
        姓名
      </div>
    </div>
    <div class="bottomInfoContainer">
      <div class="contributorInfo">
        <div class="contributorBox">
          <div class="content">第一位捐助者第一位捐助者</div>
        </div>
      </div>
      <div class="donatedInfo">
        <div class="donatedTitle">
          <span>总捐助</span>
        </div>
        <div class="donatedContent">
          <span>114</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "contributorCard"
}
</script>

<style scoped>
.cbCard{
  height: 300px;
  width: 150px;
  margin: 0 10px;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  justify-content: flex-start;
  -webkit-justify-content: flex-start;
  padding: 15px 5px;
  border: 1px solid #e6e8eb;
  border-radius: 10px;
  user-select: none;
}
.cbCard:first-child{
  margin-left: 0;
}
.cbCard:last-child{
  margin-right: 0;
}
.cbCard > .avatarContainer{
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  flex-direction: column;
  -webkit-flex-direction: column;
}
.avatarContainer .defaultAvatar{
  width: 64px;
  height: 64px;
  background: #eee;
  border-radius: 50%;
}
.avatarContainer .avatarName{
  padding-top: 10px;
  font-weight: bold;
  font-size: 13px;
}
.bottomInfoContainer{
  margin-top: 15px;
  border-top: 1px solid #e6e8eb;
}
.contributorInfo,.donatedInfo{
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  padding-bottom: 10px;
}
.contributorInfo{
  padding-top: 20px;
}
.contributorBox{
  border: 1px solid #e6e8eb;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 13px;
  color: rgb(113, 117, 122);
  background: #dfdfdf;
}
.contributorBox > .content{
  text-align: center;
}
.donatedInfo > .donatedTitle{
  font-size: 13px;
  color: rgb(113, 117, 122);
  font-weight: bold;
  padding-bottom: 10px;
}
.donatedInfo > .donatedContent{
  font-size: 13px;
  font-weight: bold;
}
.donatedInfo > .donatedContent span:before{
  content: '￥';
  padding: 0 1px;
}
.donatedInfo > .donatedContent span:after{
  content: 'CNY';
  padding: 0 1px;
}
</style>