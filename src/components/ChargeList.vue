<template>
    <div class="charge-list-container">
        <p class="font-gry">请选择要购买的充值卡面额 <span class="font-oringe">（一经售出概不退还）</span></p>
        <div class="cards-container">
            <div class="card" @click="charge">
                <div class="card-top">
                    <h1>￥110</h1>
                    <p>￥110元充值卡</p>
                </div>
                <div class="card-bot">
                    <p>售价￥100 <span>永久有效</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'charge-list',
        methods:{
            charge:function () {
                this.$router.push({name:'chargePay'})
            }
        }
    }
</script>

<style>
    .charge-list-container{
        padding:0 15px;
    }
    .charge-list-container .cards-container{
        width: 100%;
        padding:0 30px;
        text-align: center;
    }
    .charge-list-container .cards-container .card{
        margin-top: 15px;
    }
    .charge-list-container .cards-container .card .card-top{
        background-color: #de4865;
        padding:28px 0 31px 0;
        color:white;
    }
    .charge-list-container .cards-container .card .card-top h1{
        font-size: 30px;
        margin: 0 0 10px;
    }
    .charge-list-container .cards-container .card .card-top p {
        font-size: 15px;
        color:#f2c3ca;
        margin:0;
    }
    .charge-list-container .cards-container .card .card-bot{
        background-color: #af3950;
        padding:15px;
    }
    .charge-list-container .cards-container .card .card-bot p{
        margin:0;
        color:white;
        font-size: 17px;
    }
    .charge-list-container .cards-container .card .card-bot span{
        margin-left: 10px;
        font-size: 15px;
    }
</style>