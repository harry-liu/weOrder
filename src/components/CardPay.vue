<template>
    <div class="card-pay-container">
        <p class="white-back border-top border-bottom font-12 first-p">
            充值卡付款更优惠
            <img src="../assets/arrow.png" class="pull-right arrow">
            <span class="pull-right font-oringe" v-show="selectCard">{{selectCard}}元充值卡</span>
        </p>
        <p class="white-back border-bottom font-12" v-show="selectCard">本次充值后充值卡余额 <span class="pull-right">￥{{finalPrice}}</span></p>
    </div>
</template>

<script>
    export default{
        name:'card-pay',
        props:{
            totalPrice:{
                required:true
            },
            selectCard:{
                required:true
            }
        },
        computed:{
            finalPrice:function () {
                return this.selectCard-this.totalPrice
            }
        }
    }
</script>

<style>
    .card-pay-container .first-p{
        margin-bottom:1px;
    }
    .card-pay-container .first-p span{
        margin-right: 10px;
    }
</style>