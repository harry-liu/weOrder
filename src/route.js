/**
 * Created by harry-liu on 2017/3/14.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import ChooseRestaurant from './components/ChooseRestaurant.vue'
import Scan from './components/Scan.vue'
import MemberCenter from './components/MemberCenter.vue'
import PayOnline from './components/PayOnline.vue'
import MyOrders from './components/MyOrders.vue'
import InsteadPay from './components/InsteadPay.vue'
import Order from './components/Order.vue'
import AddPhoneNumber from './components/AddPhoneNumber.vue'
import Pay from './components/Pay.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/take-away',name:'takeAwayChooseRestaurant' , component: ChooseRestaurant,meta:{title:'选择门店'}},
    { path: '/take-away/:id',name:'takeAwayOrder' , component: Order,meta:{title:'打包'}},
    { path: '/take-away-pay',name:'takeAwayPay' , component: Pay,meta:{title:'填写订单'}},

    { path: '/pre-order',name:'preOrderChooseRestaurant' , component: ChooseRestaurant,meta:{title:'预点餐'}},
    { path: '/pre-order/:id',name:'preOrder' , component: Order,meta:{title:'打包'}},
    { path: '/pre-order-pay',name:'preOrderPay' , component: Pay,meta:{title:'填写订单'}},

    { path: '/have-in',name:'haveInScan' , component: Scan,meta:{title:'到店吃'}},
    { path: '/have-in/order/:rest_name/:rest_id/:table_id',name:'haveInOrder' , component: Order,meta:{title:'restaurant_name'}},

    { path: '/member-center',name:'memberCenter' , component: MemberCenter,meta:{title:'会员中心'}},
    { path: '/member-center/add-phone',name:'addPhoneNumber',component:AddPhoneNumber,meta:{title:'绑定手机号'}},
    { path: '/member-center/change-phone',name:'changePhoneNumber',component:AddPhoneNumber,meta:{title:'更改已绑定手机号'}},
    { path: '/pay-online',name:'payOnline' , component: PayOnline,meta:{title:'在线支付'}},
    { path: '/my-orders',name:'myOrders' , component: MyOrders,meta:{title:'我的订单'}},
    { path: '/instead-pay',name:'insteadPay' , component: InsteadPay,meta:{title:'代付求助页'}},
    { path: '*',name:'home',component:Home,meta:{title:'目录'}}
];

const router = new VueRouter({
    routes: routes
});

router.beforeEach(function(to,from,next){
    if(to.meta.title === "restaurant_name"){
        document.title = to.params.rest_name;
        // console.log(to);
    }
    else {
        document.title = to.meta.title||"微点餐";
    }
    var i = document.createElement('iframe');
    i.src = '/favicon.ico';
    i.style.display = 'none';
    i.onload = function() {
        setTimeout(function(){
            i.remove();
        }, 9)
    };
    document.body.appendChild(i);

    next();
});

export default router;