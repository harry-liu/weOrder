<template>
    <div class="my-order-container border-top border-bottom container white-back">
        <div class="my-order-top border-bottom">
            <p class="font-gry">订单号：{{orderData.id}} <img src="../assets/bin.png" alt="lajitong" class="pull-right bin"></p>
            <p v-for="order in orderData.orders" class="">
                {{getOrder(order)}}
            </p>
        </div>
        <div class="my-order-bottom" v-if="orderType == 'unPaid'">
            <p>需付：<span class="font-oringe">{{'￥'+getTotalPrice()}}</span></p>
            <div class="red-back btn-go-to-pay font-white">去支付</div>
        </div>
        <div class="my-order-bottom" v-if="orderType == 'paid'">
            <p>实付：<span class="font-oringe">{{'￥'+getTotalPrice()}}</span></p>
            <div class="red-back btn-go-to-pay font-white">申请退款</div>
        </div>
        <div class="my-order-bottom" v-if="orderType == 'finished'">
            <p>实付：
                <span class="font-oringe">{{'￥'+getTotalPrice()}}</span>
                <span class="font-gry">已使用</span>
            </p>
        </div>
        <div class="my-order-bottom" v-if="orderType == 'refund'">
            <p>实付：
                <span class="font-oringe">{{'￥'+getTotalPrice()}}</span>
                <span class="font-gry">已退款</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default{
        name:'my-order',
        props:{
            orderData:{
                required:true,
                type:Object
            },
            orderType:{
                required:true,
                type:String
            }
        },
        mounted(){
            if (this.orderType == 'unPaid'){

            }
        },
        computed:{
//            getOrder:function () {
//                return order.name+' *'+order.number+' ￥'+order.price;
//            }
        },
        methods:{
            getOrder:function (order) {
                return order.name+' *'+order.number+' ￥'+order.price;
            },
            getTotalPrice:function () {
                return 24;
            }
        }
    }
</script>

<style>
    .my-order-container{
        margin-top: 10px;
    }
    .my-order-container p{
        margin:0;
    }
    .my-order-container .my-order-top{
        padding-bottom: 15px;
    }
    .my-order-container .my-order-top .bin{
        width: 15px;
        height: 20px;
    }
    .my-order-container .my-order-top p{
        margin-top: 15px;
    }
    .my-order-container .my-order-bottom p{
        margin:15px 0;
    }
    .my-order-container .my-order-bottom .btn-go-to-pay{
        width: 75px;
        height: 30px;
        border-radius: 5px;
        text-align: center;
        line-height: 30px;
        margin-top: -38px;
        float: right;
    }
    .my-order-container .my-order-bottom .font-gry{
        float: right;
    }
</style>