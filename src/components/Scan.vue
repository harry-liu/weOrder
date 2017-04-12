<template>
    <div class="container scan-container">
        <div class="red-back scan-btn" @click="scan()">
            请点此扫描桌上二维码
        </div>
    </div>
</template>

<script>
    import api from '../API/api'
    export default{
        name:'scan',
        data() {
            return {
                msg:'这是扫描二维码页面'
            }
        },
        mounted(){
            var token = localStorage.getItem('access_token');
            var url = window.location.href;

            api.getWechatSetting(token,url).then(function (response) {
                var data = response.data.data.share;
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: data.appId, // 必填，公众号的唯一标识
                    timestamp: data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: data.nonceStr, // 必填，生成签名的随机串
                    signature: data.signature,// 必填，签名，见附录1
                    jsApiList: data.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
            })
        },
        methods:{
            scan:function () {
                wx.ready(function(){
                    wx.scanQRCode({
                        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                        success: function (res) {
                            var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                            window.location.href = result;
                        }
                    });
                });
            }
        }
    }
</script>

<style>
    .scan-container{
        padding-top: 65px !important;
    }
    .scan-container .scan-btn{
        color:white;
        text-align: center;
        width: 100%;
        padding:13px 0;
        border-radius: 5px;
    }
</style>