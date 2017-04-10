<template>
    <div class="order-container">
        <div class="warning font-12">温馨提示：为保证您及时就餐，请提前30分钟下单</div>

        <tabs>
            <tab name="点单" selected="true">
                <div class="section-left" id="section-left">
                    <ul class="border-right">
                        <li v-for="food in menu" class="border-bottom" :class="{active:food.selected}" @click="activeFood(food)">{{food.tag}}</li>
                    </ul>
                </div>
                <div class="section-right" v-on:scroll="scrollFn($event)" id="section-right">

                    <div class="food-class pull-left" v-for="food in menu" :id="food.id">

                        <!--<v-waypoint @waypoint-in="inHandler(food.id)"></v-waypoint>-->

                        <h3 class="font-12 back-gry food-class-title border-bottom">【{{food.tag}}】</h3>
                        <div class="white-back food-class-body pull-left border-bottom" v-for="fo in food.list">
                            <div class="pull-left" style="width: 100%">
                                <img :src="fo.cover" alt="" class="food-img pull-left">
                                <div class="top-img-div pull-left">
                                    <p class="font-15">{{fo.name}}</p>
                                    <p class="font-12 font-gry">排骨+藕片+金针菇+芹菜排骨+藕片+金针菇+芹菜</p>
                                </div>
                            </div>
                            <p class="font-14 font-oringe pull-left" style="width: 100%">￥ {{fo.price}}</p>
                            <div class="plus pull-right font-gry">
                                <div v-show="fo.selected" @click="fo.selected--">-</div>
                                <div class="font-oringe" style="line-height: 22px;font-size: 16px;" v-show="fo.selected">{{fo.selected}}</div>
                                <div @click="fo.selected++">+</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="section-bot border-top white-back" v-show="selectedFood.length">
                    <img src="../assets/shopping.png" alt="" class="pull-left" @click="showSelectedList = !showSelectedList">
                    <div class="red-back select-number font-white">{{totalNumber}}</div>
                    <span class="font-14 pull-left">共计：</span>
                    <span class="font-14 font-oringe pull-left">￥{{totalPrice}}</span>
                    <div class="pull-right pay-btn red-back font-white" @click="goToPay()">选好了</div>
                </div>
                <div class="select-food-list white-back border-top" v-show="showSelectedList&&selectedFood.length">
                    <div class="top">
                        <div class="pull-left font-15" style="line-height: 27px">我的菜单</div>
                        <div class="grey-back pull-right clear-btn font-12 font-white" @click="clearSelectedFood()">清空</div>
                        <div class="red-back pull-right add-btn font-12 font-white" @click="showSelectedList = !showSelectedList">确认</div>
                    </div>
                    <div class="food-list">
                        <ul>
                            <li v-for="food in selectedFood" class="border-top font-14">
                                <div style="text-align: left">{{food.name}}</div>
                                <div style="text-align: center">{{food.price}}元/份</div>
                                <div style="text-align: right;" class="food-list-ctrl">
                                    <div class="btn" @click="food.selected++">+</div>
                                    <div style="width: 23px;text-align: center">{{food.selected}}</div>
                                    <div class="btn" @click="food.selected--">-</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </tab>
            <tab name="店铺信息">
                <div class="detail-row white-back border-bottom border-top">
                    <p class="font-14">{{restaurantDetail.store_name}}</p>
                    <span><img src="../assets/bike.png" alt="bike"></span>
                    <span class="font-12 font-oringe">暂不支持配送</span>
                </div>
                <div class="detail-row white-back border-bottom border-top">
                    <p class="font-14">营业时间</p>
                    <span><img src="../assets/time.png" alt=""></span>
                    <span class="font-12 font-oringe">10：00-15：00</span>
                </div>
                <div class="detail-row white-back border-bottom border-top">
                    <p class="font-14"><img src="../assets/position.png" alt="">西安</p>
                    <span><img src="../assets/telphone.png" alt=""></span>
                    <span class="font-12 font-oringe" style="text-decoration: underline;">{{restaurantDetail.tel}}</span>
                </div>
            </tab>
        </tabs>
    </div>
</template>

<script>
    import Tabs from './Tabs.vue'
    import Tab from './Tab.vue'
    import api from '../API/api'

    export default{
        name:"order",
        data(){
            return{
                menu:[],
                showSelectedList:false,
                restaurantDetail:{}
            }
        },
        mounted(){
            var token = localStorage.getItem('access_token');
            var id = this.$route.params.id;
            var current = this;
            api.getMenu(token).then(function (response) {
                current.setMenu(response.data.data.CateGoodsList);
            });
            api.getRestaurantDetail(token,id).then(function (response) {
                current.restaurantDetail = response.data.data.stores;
            })
        },
        computed:{
            selectedFood:function () {
                var list = [];
                this.menu.forEach(function (foods) {
                    foods.list.forEach(function (food) {
                        if(food.selected){
                            list.push(food)
                        }
                    })
                })
                return list;
            },
            totalPrice:function () {
                var price = 0;
                this.selectedFood.forEach(function (food) {
                    price += food.price*food.selected;
                });
                return price;
            },
            totalNumber:function () {
                var number = 0;
                this.selectedFood.forEach(function (food) {
                    number += 1 * food.selected;
                });
                return number;
            }
        },
        methods:{
            setMenu(obj){
                var finalList = [];

                var pushTag = function (food) {
                    var included = false;
                    finalList.forEach(function (tag) {
                        if(tag.id === food.cate){
                            included = true;
                        }
                    });
                    if(!included){
                        var newTag = {
                            id:'',
                            tag:'',
                            selected:false,
                            list:[]
                        };

                        newTag.id = food.cate;
                        newTag.tag = food.pcate_name;

                        finalList.push(newTag);
                    }
                };

                var pushFood = function (food) {
                    finalList.forEach(function (tag) {
                        if(tag.id === food.cate){
                            var newFood = {
                                name:'',
                                price:'',
                                id:'',
                                cover:'',
                                selected:0
                            };
                            newFood.name = food.title;
                            newFood.price = food.market_price;
                            newFood.id = food.goods_id;
                            newFood.cover = food.thumb;

                            tag.list.push(newFood);
                        }
                    })
                };

                for(var property in obj){
                    if (obj.hasOwnProperty(property)) {
                        // do stuff
                        pushTag(obj[property]);
                        pushFood(obj[property]);
                    }
                }

                finalList[0].selected = true;

                this.menu = finalList;
            },
            goToPay:function () {
                this.$router.push('/take-away-pay');

            },
            clearSelectedFood:function () {
                this.menu.forEach(function (foods) {
                    foods.list.forEach(function (food) {
                        food.selected = 0;
                    })
                })
                this.showSelectedList = false;
            },
            scrollFn:function (e) {
                //console.log(e);
//                var menu = this.menu;
                var targetTop = document.getElementById('section-right').scrollTop;
                //console.log(target.scrollTop);
                var targeChildsLength = document.getElementsByClassName('food-class').length;
                for (var i = 0;i<targeChildsLength;i++){
                    var target = document.getElementsByClassName('food-class')[i];
//                    console.log(i+':'+target.offsetTop);
//                    console.log(i+':'+targetTop+87);
//                    console.log(i+':'+target.offsetTop+target.offsetHeight);
                    if(Number(target.offsetTop)<=Number(targetTop)+87&&Number(targetTop)+87<Number(target.offsetTop)+Number(target.offsetHeight)){
                        this.menu[i].selected = true;
                        //console.log(i);
                    }
                    else{
                        this.menu[i].selected = false;
                        //alert('false')
                    }
                }
                //console.log();
            },
            scrollTo:function (id) {
                var target = document.getElementById(id);
                var targetParent = target.parentElement;
                var stopY = target.offsetTop;
                var startY = targetParent.scrollTop;
                //console.log(target);
                //console.log(targetParent);
                targetParent.scrollTop = stopY-87;
//                var distance = stopY > startY ? stopY - startY : startY - stopY;
//                if (distance < 100) {
//                    scrollTo(0, stopY);
//                    return;
//                }
//                var speed = Math.round(distance / 100);
//                if (speed >= 20) speed = 20;
//                var step = Math.round(distance / 25);
//                var leapY = stopY > startY ? startY + step : startY - step;
//                var timer = 0;
//                if (stopY > startY) {
//                    for ( var i=startY; i<stopY; i+=step ) {
//                        setTimeout("document.getElementById('section-right').scrollTop = "+stopY+(-87), timer * speed);
//                        leapY += step; if (leapY > stopY) leapY = stopY; timer++;
//                    }
//                    return;
//                }
//                for ( var i=startY; i>stopY; i-=step ) {
//                    setTimeout("document.getElementById('section-right').scrollTop = "+stopY+(-87), timer * speed);
//                    leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
//                }


            },
            inHandler:function (id) {
                console.log('in'+id);
            },
            activeFood:function (food) {
                this.menu.forEach(function (fo) {
                    fo.selected = fo === food;
                });
                this.scrollTo(food.id);
            }
        },
        components:{
            Tabs,
            Tab
//            FoodMenu
        }
    }
</script>

<style>
    .order-container .warning{
        background-color: #ffeed3;
        color: #ff0000;
        text-align: center;
        padding:10px 0;
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        z-index: 3;
        height: 37px;
    }
    .order-container .detail-row{
        padding:15px 12px;
        margin-top: 10px;
    }
    .order-container .detail-row p{
        padding:0;
        margin: 0 0 10px 0;
    }
    .order-container .detail-row img{
        width: 15px;
        height:15px;
        margin-right: 8px;
        margin-bottom: -2px;
    }

    .order-container .tabs{
        position: fixed;
        top:37px;
        left:0;
        width: 100%;
        z-index: 3;
    }

    .order-container .tab-details{
        padding-top:87px;
        position: relative;
    }

    .order-container .section-left{
        position: fixed;
        top:0;
        left:0;
        padding-top: 87px;
        width: 83px;
        height: 100%;
        overflow: auto;
        z-index: 2;
    }

    .order-container .section-left::-webkit-scrollbar {
        display: none;
    }

    .order-container .section-left ul{
        margin:0;
        padding:0;
        list-style-type: none;
        height: 100%;
    }
    .order-container .section-left ul li{
        width: 83px;
        height: 55px;
        text-align: center;
        font-size: 14px;
        line-height: 55px;
    }

    .order-container .section-left ul li.active{
        background-color: #fcfcfc;
        border-left: 3px solid #ff0000;
    }

    .order-container .section-right{
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        padding-left: 83px;
        padding-top: 87px;
        z-index: 1;
        overflow: auto;
        padding-bottom: 57px;
    }

    .order-container .section-right::-webkit-scrollbar {
        display: none;
    }

    .order-container .section-right .food-class-title{
        padding:10px 11px;
        margin:0;

    }

    .order-container .section-right .food-class-body{
        padding:13px 15px 0 15px;
    }

    .order-container .section-right .food-class-body .food-img{
        width: 51px;
        height: 51px;
    }

    .order-container .section-right .food-class-body .top-img-div{
        margin-top: -53px;
        padding-left: 60px;
        width: 100%;
    }

    .order-container .section-right .food-class-body .top-img-div p{
        margin:0;
    }

    .order-container .food-class .food-class-body:last-child{
        border-bottom: 1px solid #d1d1d1;
    }

    .order-container .food-class .plus{
        height: 25px;
        border: 1px solid #d1d1d1;
        font-size: 25px;
        line-height: 18px;
        border-radius: 20px;
        margin-top: -37px;
    }

    .order-container .food-class .plus div{
        width: 25px;
        float: left;
        text-align: center;
        height: 25px;
        /*line-height: 25px;*/
    }

    .order-container .section-bot{
        position: fixed;
        bottom:0;
        left:0;
        width: 100%;
        z-index: 3;
        padding:10px;
    }

    .order-container .section-bot span{
        line-height: 33px;
        display: block;
    }

    .order-container .section-bot img{
        width: 33px;
        height: 33px;
        margin-right:15px;
    }

    .order-container .pay-btn{
        height: 36px;
        line-height: 36px;
        border-radius:5px;
        width: 100px;
        text-align: center;
    }

    .order-container .select-number{
        width: 15px;
        height: 15px;
        border-radius: 100%;
        position: absolute;
        text-align: center;
        left: 30px;
        line-height: 15px;
    }

    .order-container .select-food-list{
        position: fixed;
        bottom:57px;
        width: 100%;
        z-index: 2;
    }

    .order-container .select-food-list .top{
        padding:10px;
        float: left;
        width: 100%;
    }

    .order-container .select-food-list .add-btn{
        border-radius: 5px;
        margin-left:15px;
        width: 61px;
        height: 27px;
        text-align: center;
        line-height: 27px;
    }

    .order-container .select-food-list .clear-btn{
        border-radius: 5px;
        margin-left:15px;
        width: 61px;
        height: 27px;
        text-align: center;
        line-height: 27px;
        background-color: #b5b4b4;
    }

    .order-container .select-food-list .food-list{
        width: 100%;
        float: left;
        max-height: 135px;
        overflow-y: scroll;
    }

    .order-container .select-food-list .food-list ul{
        margin:0;
        padding:0;
        list-style-type: none;
    }

    .order-container .select-food-list .food-list ul li{
        padding:17px 12px;
        float: left;
        width: 100%;
    }

    .order-container .select-food-list .food-list ul li div{
        width: 33%;
        float: left;
    }

    .order-container .select-food-list .food-list .food-list-ctrl div{
        float: right;
    }

    .order-container .select-food-list .food-list .btn{
        width: 17px;
        height: 17px;
        background-color: #e2e3e5;
        border-radius: 100%;
        text-align: center;
    }


</style>