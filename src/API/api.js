/**
 * Created by harry-liu on 2017/4/7.
 */
import axios from 'axios'
import {getToken,getStore,getMenu,getRestaurantDetail,getUser,getBalance,getMsg,editPhone,getTotalSpend,getWechatSetting,getCardsList,uploadOrder} from './resource'

//axios.defaults.headers.common['access_token'] = true;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
var instance = axios.create({
    withCredentials: true,
    headers:{
        'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
    }
});

export default {
    getToken:function (current,token) {
        return instance({
            method:'post',
            url:getToken,
            data:'access_token='+token+'&current='+current,
        }).then(function (response) {
            if(response.data.status === 302){
                window.location.href = response.data.location;
            }
            else{
                localStorage.setItem('access_token',response.data.data.access_token);

            }
        }).catch(function (err) {
            console.log(err)
        })
    },
    getStore:function (token) {
        return instance({
            method:'post',
            url:getStore,
            params:{
                access_token:token
            },
        })
    },
    getMenu:function (token) {
        return instance({
            method:'post',
            url:getMenu,
            data:'access_token='+token+'&pagesize=100'
        })
    },
    getRestaurantDetail:function (token,id) {
        return instance({
            method:'post',
            url:getRestaurantDetail,
            data:'access_token='+token+'&_id='+id
        })
    },
    getUser:function (token) {
        return instance({
            method:'post',
            url:getUser,
            data:'access_token='+token
        })
    },
    getBalance:function (token) {
        return instance({
            method:'post',
            url:getBalance,
            data:'access_token='+token
        })
    },
    getMsg:function (token,mobile) {
        return instance({
            method:'post',
            url:getMsg,
            data:'access_token='+token+'&mobile='+mobile+'&type=1'
        })
    },
    editPhone:function (token,phone,verify) {
        return instance({
            method:'post',
            url:editPhone,
            data:'access_token='+token+'&phone='+phone+'&verify='+verify
        })
    },
    getTotalSpend:function (token) {
        return instance({
            method:'post',
            url:getTotalSpend,
            data:'access_token='+token
        })
    },
    getWechatSetting:function (token,url) {
        return instance({
            method:'post',
            url:getWechatSetting,
            data:'access_token='+token+'&url='+url
        })
    },
    getCardsList:function (token) {
        return instance({
            method:'post',
            url:getCardsList,
            data:'access_token='+token
        })
    },
    uploadOrder:function (token,goods_list,pay_type,order_type,remark) {
        return instance({
            method:'post',
            url:uploadOrder,
            data:'access_token='+token+'&goods_list='+goods_list+'&pay_type='+pay_type+'&order_type='+order_type+'&remark='+remark
        })
    },
}
