<template>
    <div class="charge-history-container">
        <div class="title border-top border-bottom white-back">
            <h1 class="font-12 ">充值卡购买明细</h1>
        </div>
        <div class="body border-top border-bottom white-back font-gry">
            <div class="border-bottom history">
                <p>110元充值卡 <span style="float: right">2017-04-08</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'charge-history'
    }
</script>

<style>
    .charge-history-container{

    }
    .charge-history-container .title{
        padding:16px;
        text-align: center;
    }
    .charge-history-container .title h1{
        text-align: center;
        margin:0;
    }
    .charge-history-container .body{
        margin-top: 10px;
        padding: 0 15px 80px;
    }
    .charge-history-container .body .history{
        padding:14px 0;
    }
    .charge-history-container .body p{
        margin:0;
    }
</style>