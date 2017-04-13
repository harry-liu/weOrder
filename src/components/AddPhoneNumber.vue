<template>
    <div class="container add-phone-number-container">
        <form action="" @submit="">
            <input type="text" placeholder="请输入手机号" class="first" v-model="mobile">
            <input type="text" placeholder="请输入验证码" class="last" v-model="msg">
            <div class="get-code font-oringe" @click="getMsg" :class="{'font-gry':!btnClickable}">免费获取验证码</div>
            <div class="red-back submit-btn font-14" @click="update">{{btnText}}</div>
        </form>
    </div>
</template>

<script>
    import api from '../API/api'
    export default{
        name:'add-phone-number',
        data(){
            return{
                btnText:'',
                mobile:'',
                msg:'',
                btnClickable:true,
                alertMsg:''
            }
        },
        mounted(){
            if(this.$route.name === "addPhoneNumber") {
                this.btnText = '立即绑定';
                this.alertMsg = '绑定成功';
            }
            else{
                this.mobile = this.$store.state.user.user.phone;
                this.btnText = '确认更改';
                this.alertMsg = '修改成功';
            }
        },
        methods:{
            getMsg:function () {
                var current = this;
                if(this.btnClickable){
                    if(this.mobile === ''){
                        alert('请输入手机号')
                    }
                    else{
                        this.btnClickable = false;
                        setTimeout(function () {
                            current.btnClickable = true;
                        },60000)
                        this.$store.dispatch('sendMsg',this.mobile)
                    }
                }
            },
            update:function () {
                var current = this;
                this.$store.dispatch('changeMobileNumber',{mobile:this.mobile,msg:this.msg}).then(function (response) {
                    if(response.data.status === 200){
                        alert(current.alertMsg);
                        current.$router.go(-1);
                    }
                })
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