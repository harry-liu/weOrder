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
            <p class="font-gry border-bottom">{{restaurant.store_name}}</p>
            <ul>
                <li v-for="food in carts">{{food.name}} * {{food.selected}} <span class="pull-right">￥{{food.price}}</span></li>
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
                <p>待付金额：<span class="font-oringe">￥{{total}}</span></p>
            </div>
            <div class="pay pull-right pull-top  font-white red-back" @click="pay">
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
    import api from '../API/api'

    export default{
        name:"pay",
        data(){
            return{
                selectCard:'',
                showChangeCard:false
            }
        },
        computed:{
            restaurant:function () {
                return this.$store.state.restaurants.restaurantDetail
            },
            carts:function () {
                return this.$store.state.cart.cart;
            },
            total:function () {
                return this.$store.getters.totalSpend||0
            },
            cardsList:function () {
                var current = this;
                return this.$store.state.cards.cards.filter(function (card) {
                    return card.total>=current.total
                })
            }
        },
        created(){
            var token = localStorage.getItem('access_token');
            var current = this;
            var url = window.location.href;
            this.$store.dispatch('getCards');

            api.getWechatSetting(token,url).then(function (response) {
                var data = response.data.data.share;
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: data.appId, // 必填，公众号的唯一标识
                    timestamp: data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: data.nonceStr, // 必填，生成签名的随机串
                    signature: data.signature,// 必填，签名，见附录1
                    jsApiList: data.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
            })
        },
        components:{
            SelectList,
            CardPay
        },
        methods:{
            toggleChangeCard:function () {
                this.showChangeCard = !this.showChangeCard;
                this.$store.commit('toggleBlackCover');
            },
            pay:function () {
                var token = localStorage.getItem('access_token');
                var goods_list = JSON.stringify([{"goods_id":"58afa7b277e374863990f4e4","goods_title":"首付","goods_area":"58ae51aaed442f262e251003","goods_taste":"58b3eefcfa3dda240b891227","goods_price":"23.00","goods_number":6}]);
                var pay_type = 1;
                var order_type = 1;
                var remark = 'test';
                api.uploadOrder(token,goods_list,pay_type,order_type,remark).then(function (response) {
                    var data = response.data.data.wepay;
                    wx.ready(function() {
                        wx.chooseWXPay({
                            timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                            nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
                            package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                            signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                            paySign: data.paySign, // 支付签名
                            success: function (res) {
                                // 支付成功后的回调函数
                                alert('payment success');
                            }
                        })
                    })
                })
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