/**
 *
 * Created by harry-liu on 2017/4/13.
 */

import api from '../../API/api'

const token = localStorage.getItem('access_token');

export const moduleUser = {
    state:{
        user:{},
        balance:0,
        totalSpend:0
    },
    mutations:{
        setUser:function (state,user) {
            state.user = user;
        },
        setBalance:function (state,balance) {
            state.balance = balance;
        },
        setTotalSpend:function (state,spend) {
            state.totalSpend = spend;
        }

    },
    actions:{
        getAllUserInfo:function (context) {
            api.getUser(token).then(function (response) {
                context.commit('setUser',response.data.data.User)
            })
            api.getBalance(token).then(function (response) {
                context.commit('setBalance',response.data.data.money)
            })
            api.getTotalSpend(token).then(function (response) {
                context.commit('setTotalSpend',response.data.data.money)
            })
        },
        getUserBalance:function (context) {
            api.getBalance(token).then(function (response) {
                context.commit('setBalance',response.data.data.money)
            })
        },
        sendMsg:function (context,mobile) {
            return api.getMsg(token,mobile);
        },
        changeMobileNumber:function (context,obj) {
            return api.editPhone(token,obj.mobile,obj.msg)
        }
    }
}