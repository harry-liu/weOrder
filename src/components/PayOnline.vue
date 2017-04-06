<template>
    <div class="pay-online-container">
        <p class="white-back border-top border-bottom font-12" @click="toggleChangeStore">{{selectStore||'请选择餐厅'}}<img src="../assets/arrow.png" class="pull-right arrow"></p>
        <p class="white-back border-top border-bottom font-12">消费总金额</p>
        <input type="text" placeholder="询问服务员后输入" class="font-12" v-model="total">
        <card-pay @click.native="toggleChangeCard" v-show="total>0" :totalPrice="total" :selectCard = 'selectCard'></card-pay>
        <div class="container">
            <div class="btn-pay red-back">支付：￥{{selectCard||total}}</div>
        </div>
        <div class="change-container" v-show="showChangeStore">
            <select-list type="store" :listData="storeList" @hide="toggleChangeStore" @updateValue="selectStore = arguments[0]"></select-list>
        </div>
        <div class="change-container" v-show="showChangeCard">
            <select-list type="restaurant" :listData="cardsList" @hide="toggleChangeCard" @updateValue="selectCard = arguments[0]"></select-list>
        </div>
    </div>
</template>

<script>
    import SelectList from './SelectList.vue'
    import CardPay from './CardPay.vue'
    export default{
        name:'pay-online',
        data(){
            return{
                showChangeStore:false,
                showChangeCard:false,
                storeList:[
                    {name:'龙首原店',selected:false,value:'龙首原店'},
                    {name:'边家村店',selected:false,value:'边家村店'},
                    {name:'金花店',selected:false,value:'金花店'},
                    {name:'高新店',selected:false,value:'高新店'}
                ],
                cardsList:[
                    {name:'115元充值卡（充100送15）',selected:false,value:100},
                    {name:'225元充值卡（充200送25）',selected:false,value:200},
                    {name:'335元充值卡（充300送35）',selected:false,value:300},
                    {name:'445元充值卡（充400送45）',selected:false,value:400}
                ],
                total:'',
                selectStore:'',
                selectCard:'',
                chargeAmount:0
            }
        },
        components:{
            SelectList,
            CardPay
        },
        computed:{
            getCardList:function(){

            }
        },
        methods:{
            toggleChangeStore:function () {
                this.showChangeStore = !this.showChangeStore;
                this.$store.commit('toggleBlackCover');
            },
            toggleChangeCard:function () {
                this.showChangeCard = !this.showChangeCard;
                this.$store.commit('toggleBlackCover');
            }
        }
    }
</script>

<style>
    .pay-online-container .arrow{
        width: 10px;
        height: 15px;
        margin-top: 9px;
    }
    .pay-online-container p{
        height: 35px;
        line-height: 35px;
        margin:0 0 10px 0;
        padding:0 15px;
    }
    .pay-online-container input{
        width: 100%;
        height: 33px;
        line-height: 33px;
        margin-top: -44px;
        margin-bottom: 10px;
        text-align: right;
        padding:0 15px;
        display: block;
    }
    .pay-online-container .container{
        position: fixed;
        bottom:15px;
        left:0;
        width: 100%;
    }
    .pay-online-container .btn-pay{
        color:white;
        text-align: center;
        width: 100%;
        padding:13px 0;
        border-radius: 5px;
    }
    .pay-online-container .change-container{
        position: fixed;
        bottom: 0;
        left:0;
        z-index: 3;
        width:100%;
    }
</style>