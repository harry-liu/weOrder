<template>
    <div class="pay-container">

        <div class="people-time container">
            <p>就餐人数</p>
            <input type="text" placeholder="请输入就餐人数">
            <p class="border-top">就餐时间 <span class="font-gry pull-right">今天12点30分</span></p>
        </div>

        <div class="mobile container">
            <input type="text" placeholder="请输入手机号码">
            <input type="text" placeholder="请输入验证码" class="border-top">
            <p class="font-oringe">免费获取短信验证码</p>
        </div>

        <div class="food-list container">
            <p class="font-gry border-bottom">某某餐厅龙首原店</p>
            <ul>
                <li>招牌大骨面 * 1 <span class="pull-right">￥32</span></li>
                <li>招牌大骨面 * 1 <span class="pull-right">￥32</span></li>
                <li>招牌大骨面 * 1 <span class="pull-right">￥32</span></li>
                <li>招牌大骨面 * 1 <span class="pull-right">￥32</span></li>
            </ul>
        </div>

        <div class="text-area container">
            <textarea name="" id="" cols="30" rows="3" placeholder="有什么想告诉店家的写在这里"></textarea>
        </div>

        <card-pay @click.native="toggleChangeCard" :totalPrice="total" :selectCard = 'selectCard'></card-pay>

        <div class="change-container" v-show="showChangeCard">
            <select-list type="restaurant" :listData="cardsList" @hide="toggleChangeCard" @updateValue="selectCard = arguments[0]"></select-list>
        </div>

        <div class="bottom container">
            <div class="money">
                <p>待付金额：<span class="font-oringe">￥60</span></p>
            </div>
            <div class="pay pull-right pull-top  font-white red-back">
                <p>微信支付</p>
            </div>
            <div class="instead-pay pull-right pull-top">
                <p>找人代付</p>
            </div>
        </div>

    </div>
</template>

<script>
    import SelectList from './SelectList.vue'
    import CardPay from './CardPay.vue'

    export default{
        name:"pay",
        data(){
            return{
                total:'',
                selectCard:'',
                showChangeCard:false,
                cardsList:[
                    {name:'115元充值卡（充100送15）',selected:false,value:100},
                    {name:'225元充值卡（充200送25）',selected:false,value:200},
                    {name:'335元充值卡（充300送35）',selected:false,value:300},
                    {name:'445元充值卡（充400送45）',selected:false,value:400}
                ],
            }
        },
        components:{
            SelectList,
            CardPay
        },
        methods:{
            toggleChangeCard:function () {
                this.showChangeCard = !this.showChangeCard;
                this.$store.commit('toggleBlackCover');
            }
        }

    }
</script>

<style>
    .pay-container .container{
        padding: 0 12px;
        background-color: white;
        border-bottom: 1px solid #d1d1d1;
        border-top: 1px solid #d1d1d1;
        margin-top: 10px;
        font-size: 12px;
    }
    .pay-container .container p{
        padding:10px 0;
        margin:0;
    }

    .pay-container .people-time input{
        margin-top: -27px;
        text-align: right;
        width: 100%;
        display: block;
        float: right;
    }

    .pay-container .mobile input{
        width: 100%;
        display: block;
        padding:10px 0;
    }
    .pay-container .mobile p{
        text-align: right;
        margin-top: -36px;
        width: 50%;
        float: right;
    }

    .pay-container .food-list ul{
        margin:0;
        padding:0;
        list-style-type: none;
    }
    .pay-container .food-list ul li{
        margin:10px 0;
    }
    .pay-container .text-area textarea{
        width: 100%;
        border:none;
        padding:10px 0;
    }
    .pay-container .bottom{
        position: fixed;
        bottom:0;
        left: 0;
        width: 100%;
        font-size: 14px;
    }
    .pay-container .bottom p{
        padding:13px 0;
    }
    .pay-container .bottom .instead-pay{
        color:#fc3a3a;
        background-color: #e5e5e5;
        position: absolute;
        width:85px;
        text-align: center;
        bottom:0;
        right: 85px;
    }
    .pay-container .bottom .pay{
        position: absolute;
        width:85px;
        text-align: center;
        bottom: 0;
        right: 0;
    }
    .pay-container .card-pay-container{
        position: fixed;
        bottom:48px;
        left:0;
        width: 100%;
    }
    .pay-container .card-pay-container p{
        padding:15px 12px;
        margin:0;
        border-bottom: none;
    }
    .pay-container .card-pay-container img{
        height: 19px;
    }
    .pay-container .change-container{
        position: fixed;
        bottom: 0;
        left:0;
        z-index: 3;
        width:100%;
    }

</style>