<template>
    <div class="instead-pay-container">
        <img class="avatar" src="../assets/avatar.jpeg" alt="">
        <div class="instead-pay-content border-top border-bottom container font-12 white-back">
            <p class="font-gry">这是来自 <span class="font-oringe">某某</span> 的求助订单，求代付~</p>
            <hr>
            <p>招牌排骨大面 *1</p>
            <p>招牌排骨大面 *1</p>
            <hr>
            <p>合计：<span class="font-oringe">￥62</span> <span class="font-gry pull-right">某某餐厅龙首原店</span></p>
        </div>
        <div class="btn-wechat-pay pull-right btn font-14 red-back">微信支付</div>
        <div class="btn-refuse btn pull-right font-14">残忍拒绝</div>
        <div></div>
    </div>
</template>

<script>
    export default{
        name:'instead-pay'
    }
</script>

<style>
    .instead-pay-container .avatar{
        margin:33px auto;
        border-radius: 100%;
        height: 68px;
        width: 68px;
        text-align: center;
        display: block;
    }
    .instead-pay-container .instead-pay-content p{
        margin:12px 0;
    }
    .instead-pay-container .instead-pay-content hr{
        border-top:none;
        border-bottom: 1px solid #d1d1d1;;
    }
    .instead-pay-container .btn{
        width: 90px;
        height:35px;
        -webkit-border-radius:5px;
        -moz-border-radius:5px;
        border-radius:5px;
        line-height: 35px;
        margin: 25px 15px 0 0;
        text-align: center;
        color:white;
    }
    .instead-pay-container .btn-refuse{
        background-color: #b9b9b9;
    }
</style>