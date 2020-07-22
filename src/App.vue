<template>
    <div id="app">

        <Header></Header>
        <GroupMemberContainer></GroupMemberContainer>
        <ServerDonation></ServerDonation>
        <DonationFlow></DonationFlow>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import GroupMemberContainer from "./components/GroupMemberContainer";
    import ServerDonation from "./components/ServerDonation";
    import DonationFlow from "./components/DonationFlow";
    export default {
        name: 'app',
        components: {DonationFlow, ServerDonation, GroupMemberContainer, Header}
    }

</script>

<style>
    html{
        font-size: 16px;
    }
    * {
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
    }

    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .no-select{
        user-select: none;
        -webkit-user-select: none;
        cursor: default;
    }
    ::selection{
        background: #795548;
        color: #fff;
    }

</style>
