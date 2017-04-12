<template>
    <div class="pay-online-container">
        <p class="white-back border-top border-bottom font-12" @click="toggleChangeStore">{{selectStore||'请选择餐厅'}}<img src="../assets/arrow.png" class="pull-right arrow"></p>
        <p class="white-back border-top border-bottom font-12">消费总金额</p>
        <input type="text" placeholder="询问服务员后输入" class="font-12" v-model="total">
        <card-pay @click.native="toggleChangeCard" v-show="total>0" :totalPrice="total" :selectCard = 'selectCard'></card-pay>
        <div class="container">
            <div class="btn-pay red-back">支付：￥{{selectCard||total||0}}</div>
        </div>
        <div class="change-container" v-show="showChangeStore">
            <select-list type="store" :listData="storeList" @hide="toggleChangeStore" @updateValue="selectStore = arguments[0]"></select-list>
        </div>
        <div class="change-container" v-show="showChangeCard">
            <select-list type="cards" :listData="cardsList" @hide="toggleChangeCard" @updateValue="selectCard = arguments[0]"></select-list>
        </div>
    </div>
</template>

<script>
    import SelectList from './SelectList.vue'
    import CardPay from './CardPay.vue'
    import api from '../API/api'
    export default{
        name:'pay-online',
        data(){
            return{
                showChangeStore:false,
                showChangeCard:false,
                storeList:[],
                cardsList:[],
                total:'',
                selectStore:'',
                selectCard:'',
                chargeAmount:0
            }
        },
        mounted(){
            var token = localStorage.getItem('access_token');
            var current = this;
            api.getStore(token).then(function (response) {
                //current.storeList = response.data.data.stores;
                current.transformStoreList(response.data.data.stores);
            })
            api.getCardsList(token).then(function (response) {
                current.transformCardsList(response.data.data.list);
            })
            //console.log(this.storeList);

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
            transformStoreList:function (list) {
                var newList = [];
                list.forEach(function (li) {
                    var newObj = {
                        name:'',
                        selected:false,
                        value:''
                    }
                    newObj.name = li.store_name;
                    newObj.value = li.store_name;
                    newList.push(newObj);
                })
                this.storeList = newList;
            },
            transformCardsList:function (list) {
                var newList = [];
                list.forEach(function (li) {
                    var newObj = {
                        name:'',
                        selected:false,
                        value:''
                    }
                    var total = Number(li.val)+Number(li.remark);
                    newObj.name = total+'元充值卡（充'+li.val+'送'+li.remark+'）';
                    newObj.value = li.name;
                    newObj.total = total;
                    newObj.spend = li.val;
                    newList.push(newObj);
                })
                this.cardsList = newList;
            },
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