<template>
    <div class="member-center-container">
        <div class="detail-header red-back">
            <div class="avatar">
                <!--<div class="avatar-image" style="background-image: url('../src/assets/avatar.png')">-->
                    <img src="../assets/avatar.jpeg" alt="" class="avatar-image">
                <!--</div>-->
            </div>
            <div class="intro font-12">
                <p>昵称：木果果</p>
                <p>ID：122680</p>
                <p>积分：100</p>
                <a style="text-decoration: underline" href="#member-center/add-phone">立即绑定手机号</a><br>
                <span>13333333333</span><a style="text-decoration: underline" href="#member-center/change-phone"><img src="../assets/change.png" alt=""></a>
            </div>
        </div>
        <div class="detail-body">
            <div>
                <img src="../assets/shop.png" alt="">
                <p class="font-14">我的订单</p>
            </div>
            <div class="border-left"></div>
            <div>
                <img src="../assets/vip.png" alt="">
                <p class="font-14">我的等级</p>
            </div>
            <div class="border-left">
                <p class="font-14 font-oringe">LV0</p>
            </div>
            <div>
                <img src="../assets/dimond.png" alt="">
                <p class="font-14">可用余额</p>
            </div>
            <div class="border-left">
                <p class="font-14 font-oringe">￥200</p>
            </div>
            <div>
                <img src="../assets/yuan.png" alt="">
                <p class="font-14">累计消费</p>
            </div>
            <div class="border-left">
                <p class="font-14 font-oringe">￥200</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'member-center',
        methods:{
            goto:function (url) {
                
            }
        }
    }
</script>

<style>
    .member-center-container .avatar{
        width: 87px;
        height: 118px;
    }
    .member-center-container .avatar-image{
        width: 61px;
        height: 61px;
        margin-left: 36px;
        margin-top: 20px;
        border-radius: 100%;
        border:4px white solid;
        background-size: cover;
        position: absolute;
    }
    .member-center-container .intro{
        padding-left: 112px;
        margin-top: -118px;
        height: 118px;
        color: white;
        padding-top: 22px;
        overflow: hidden;
    }
    .member-center-container .intro p{
        margin:0;
    }
    .member-center-container .intro img{
        width: 10px;
        height: 10px;
        margin-left: 10px;
    }
    .member-center-container .intro a{
        color: white;
    }
    .member-center-container .detail-body{
        padding:25px 0 0 66px;
    }
    .member-center-container .detail-body p{
        line-height: 25px;
        padding-left: 30px;
        margin: -25px 0 0;
    }
    .member-center-container .detail-body img{
        width:25px;
        height: 25px;
        margin-left: -12.5px;
        margin-right: 18px;
    }
    .member-center-container .detail-body .border-left{
        height: 68px;
        width: 100%;
        border-left: 2px solid #e4e4e4;
        margin:6px 0;
    }
    .member-center-container .detail-body .border-left p{
        margin:0;
    }
</style>