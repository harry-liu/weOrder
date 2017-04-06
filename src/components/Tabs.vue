<template>
    <div class="tabs-container">
        <div class="tabs">
            <ul class="border-bottom white-back">
                <li v-for="tab in tabs" class="font-14" :class="{'is-active':tab.isActive}" :style="{width:getTabWidth+'%'}" @click="selectTab(tab)">
                    {{tab.name}}
                </li>
            </ul>
        </div>
        <div class="tab-details">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default{
        name:'tabs',
        data(){
            return {
                tabs:[]
//                tabWidth:0
            }
        },
        created(){
            this.tabs = this.$children;
        },
        methods:{
            selectTab:function (selectTab) {
                this.tabs.forEach(function (tab) {
                    tab.isActive = (tab.name == selectTab.name);
                })
            }
        },
        computed:{
            getTabWidth:function () {
                return 100/this.tabs.length;
            }
        }
    }
</script>

<style>
    .tabs-container .tabs ul{
        margin: 0;
        padding: 0;
        list-style-type: none;
        height: 50px;
    }

    .tabs-container .tabs ul li{
        line-height: 50px;
        display: block;
        float: left;
        text-align: center;
        color:#767676;
        position: relative;
    }

    .tabs-container .tabs ul li.is-active{
        color: black;
        font-weight: 400;
    }

    .tabs-container .tabs ul li.is-active:after{
        content: '';
        width: 55%;
        /*min-width: 50px;*/
        height: 2px;
        background-color: red;
        position: absolute;
        bottom: 0;
        left: 22.5%;
    }
</style>