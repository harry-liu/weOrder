<template>
    <div class="change-store-container grey-back">
        <p class="font-14">{{title}}</p>
        <ul>
            <li v-for="data in lists" @click="select(data)"><img :src="getImageUrl(data.selected)">{{data.name}}</li>
        </ul>
        <div class="white-back btn font-14 font-gry" @click="hideSelect">{{cancel}}</div>
        <div class="red-back btn font-14 font-white" @click="updateValue">{{confirm}}</div>
    </div>
</template>

<script>
    export default{
        name:'select-list',
        props:{
            type:{
                required:true,
                type:String
            },
            listData:{
                required:true,
                type:Array
            }
        },
        mounted(){
            if(this.type === 'store'){
                this.title = '选择店铺';
                this.cancel = '取消';
            }
            else{
                this.title = '选择充值面额';
                this.cancel = '送钱不要';
            }
        },
        data(){
            return {
                lists:this.listData,
                title:'',
                cancel:'',
                confirm:'确定'
            }
        },
        methods:{
            hideSelect:function () {
                this.$emit('hide');
            },
            getImageUrl:function(selected){
                if(selected){
                    return require('../assets/oringeCheck.png')
                }
                else{
                    return require('../assets/gryCheck.png')
                }
            },
            select:function (data) {
                this.lists.forEach(function (element) {
                    element.selected = element == data;
                })
            },
            updateValue:function () {
                var selectValue = '';
                this.lists.forEach(function (element) {
                    if(element.selected){
                        selectValue = element.value;
                    }
                });
                this.$emit('updateValue',selectValue);
                this.hideSelect();
            }
        }
    }
</script>

<style>
    .change-store-container{
        width: 100%;
        height:auto;
        max-height: 500px;
        padding:15px;
        overflow: auto;
    }
    .change-store-container p{
        margin:0;
        padding:0;
    }
    .change-store-container ul{
        padding: 0;
        margin:0;
        list-style-type: none;
    }
    .change-store-container ul li{
        height: 30px;
        line-height: 30px;
        padding-left: 30px;
        position: relative;
    }
    .change-store-container ul li img{
        width: 18px;
        height: 18px;
        position: absolute;
        top:4px;
        left:0;
    }
    .change-store-container .btn{
        height: 32px;
        width: 155px;
        border-radius: 5px;
        text-align: center;
        line-height: 32px;
        float: left;
        margin-top: 25px;
    }
    .change-store-container .red-back{
        float: right;
    }

</style>