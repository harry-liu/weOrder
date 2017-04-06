<template>
    <div class="container scan-container">
        <div class="red-back scan-btn" @click="goto()">
            请点此扫描桌上二维码
        </div>
    </div>
</template>

<script>
    export default{
        name:'scan',
        data() {
            return {
                msg:'这是扫描二维码页面'
            }
        },
        methods:{
            goto:function () {
                this.$router.push({name:'haveInOrder',params:{rest_name:'龙首原店',rest_id:1,table_id:1}});
            }
        }
    }
</script>

<style>
    .scan-container .scan-btn{
        color:white;
        text-align: center;
        width: 100%;
        padding:13px 0;
        margin-top: 65px;
        border-radius: 5px;
    }
</style>