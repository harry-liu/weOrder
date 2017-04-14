<template>
    <div class="charge-container">
        <div class="money-img">
            <img src="../assets/money.png" alt="">
        </div>
        <p class="font-gry balance-label">账户余额</p>
        <h1 class="border-bottom balance">￥{{userBalance}}</h1>
        <div class="buy-card red-back btn font-white" @click="buyCards">购买充值卡（仅限本商户）</div>
        <div class="check-btn white-back btn" @click="checkBalance">查看资金明细</div>
    </div>
</template>

<script>
    export default{
        name:'charge',
        created(){
            this.$store.dispatch('getUserBalance');
        },
        computed:{
            userBalance:function () {
                return this.$store.state.user.balance;
            }
        },
        methods:{
            buyCards:function () {
                this.$router.push({name:'chargeList'})
            },
            checkBalance:function () {
                this.$router.push({name:'chargeHistory'})
            }
        }
    }
</script>

<style>
    .charge-container{
        text-align: center;
        padding: 42px 15px 0 15px;
    }

    .charge-container .money-img{

    }
    .charge-container .money-img img{
        width: 70px;
    }
    .charge-container .balance-label{
        margin-top: 45px;
    }
    .charge-container .balance{
        margin-top: 27px;
        padding-bottom:20px ;
        font-size: 30px;
    }
    .charge-container .btn{
        width: 100%;
        height: 35px;
        line-height: 35px;
        border-radius: 5px;
        margin-bottom: 15px;
    }

    .charge-container .buy-card{
        margin-top: 65px;
    }
</style>