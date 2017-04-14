<template>
    <div class="charge-pay-container">
        <div class="body white-back border-top border-bottom">
            <p>面额  <span class="pull-right">￥{{card.total}}</span></p>
            <p>有效期  <span class="pull-right">永久有效(本卡不可退)</span></p>
            <p>应付金额  <span class="pull-right">￥{{card.spend}}</span></p>
        </div>
        <div class="bt-container">
            <div class="btn red-back font-white">使用微信支付付款</div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'charge-pay',
        computed:{
            card:function () {
                return this.$store.state.cards.selectedCard;
            }
        }
    }
</script>

<style>
    .charge-pay-container .body {
        padding:15px 15px 10px
    }
    .charge-pay-container .body p{
        margin: 0 0 10px;
    }
    .charge-pay-container .bt-container{
        padding:50px 15px;
    }
    .charge-pay-container .btn{
        height: 35px;
        border-radius: 5px;
        line-height: 35px;
        text-align: center;
    }
</style>