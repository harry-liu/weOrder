<template>
    <div class="container add-phone-number-container">
        <form action="" @submit="">
            <input type="text" placeholder="请输入手机号" class="first">
            <input type="text" placeholder="请输入验证码" class="last">
            <div class="get-code font-oringe">免费获取验证码</div>
            <div class="red-back submit-btn font-14">{{btnText}}</div>
        </form>
    </div>
</template>

<script>
    export default{
        name:'add-phone-number',
        data(){
            return{
                btnText:''
            }
        },
        mounted(){
            if(this.$route.name == "addPhoneNumber") {
                this.btnText = '立即绑定';
            }
            else{
                this.btnText = '确认更改';
            }
        }
    }
</script>

<style>
    .add-phone-number-container input{
        width: 100%;
        height: 42px;
        line-height: 42px;
        font-size: 12px;
        padding:0 14px;
        border: 1px solid #d1d1d1;
    }
    .add-phone-number-container .first{
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        margin-top:18px;
        border-bottom:none;
    }
    .add-phone-number-container .last{
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .add-phone-number-container .submit-btn{
        height: 44px;
        color:white;
        line-height: 44px;
        text-align: center;
        margin-top: 14px;
        border-radius: 5px;
    }
    .add-phone-number-container .get-code{
        width:100%;
        height: 42px;
        line-height: 42px;
        margin-top: -42px;
        text-align: right;
        padding-right:14px;
    }
</style>