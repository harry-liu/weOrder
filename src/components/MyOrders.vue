<template>
<div class="my-orders-container">
    <tabs>
        <tab name="待付款" selected="true">
            <my-order v-for="order in data1" :order-data="order" order-type="unPaid" :key="order.id"></my-order>
        </tab>
        <tab name="已付款">
            <my-order v-for="order in data2" :order-data="order" order-type="paid" :key="order.id"></my-order>
        </tab>
        <tab name="已完成">
            <my-order v-for="order in data3" :order-data="order" order-type="finished" :key="order.id"></my-order>
        </tab>
        <tab name="退款">
            <my-order v-for="order in data3" :order-data="order" order-type="refund" :key="order.id"></my-order>
        </tab>
    </tabs>
</div>
</template>

<script>
    import Tabs from './Tabs.vue'
    import Tab from './Tab.vue'
    import MyOrder from './MyOrder.vue'
    export default{
        name:'my-orders',
        components:{
            Tabs,
            Tab,
            MyOrder
        },
        data(){
            return{
                data1:[
                    {id:0,orders:[{name:'酸辣鱼',number:'1',price:'24'},{name:'酸辣鱼头',number:'1',price:'54'}]},
                    {id:1,orders:[{name:'酸辣鱼',number:'1',price:'24'}]},
                    {id:2,orders:[{name:'酸辣鱼',number:'1',price:'24'}]},
                    {id:2,orders:[{name:'酸辣鱼',number:'1',price:'24'}]},
                    {id:3,orders:[{name:'酸辣鱼',number:'1',price:'24'}]}
                ],
                data2:[
                    {id:0,orders:[{name:'酸辣鱼',number:'1',price:'24'},{name:'酸辣鱼头',number:'1',price:'54'}]},
                    {id:1,orders:[{name:'酸辣鱼',number:'1',price:'24'}]},
                    {id:2,orders:[{name:'酸辣鱼',number:'1',price:'24'}]},
                    {id:2,orders:[{name:'酸辣鱼',number:'1',price:'24'}]},
                    {id:3,orders:[{name:'酸辣鱼',number:'1',price:'24'}]}
                ],
                data3:[
                    {id:0,orders:[{name:'酸辣鱼',number:'1',price:'24'},{name:'酸辣鱼头',number:'1',price:'54'}]},
                    {id:1,orders:[{name:'酸辣鱼',number:'1',price:'24'}]},
                    {id:2,orders:[{name:'酸辣鱼',number:'1',price:'24'}]},
                    {id:2,orders:[{name:'酸辣鱼',number:'1',price:'24'}]},
                    {id:3,orders:[{name:'酸辣鱼',number:'1',price:'24'}]}
                ]
            }
        }

    }
</script>

<style>
    .my-orders-container .tabs{
        position: fixed;
        top:0;
        left:0;
        width: 100%;
    }
    .my-orders-container .tab-details{
        margin-top: 60px;
    }
</style>