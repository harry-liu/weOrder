/**
 * Created by harry-liu on 2017/4/7.
 */
import axios from 'axios'
import {getToken,getStore} from './resource'

//axios.defaults.headers.common['access_token'] = true;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
var instance = axios.create({
    headers:{
        'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
    }
});

export default {
    getToken:function (current,token) {
        return instance({
            method:'post',
            url:getToken,
            data:'access_token='+token+'&current='+current
            //access_token : true
        }).then(function (response) {
            //console.log(response);
            if(response.data.status == 302){
                //window.location.href = response.data.location;
                console.log(response.data.status);
            }
            else{
                console.log(response.data.status);
                if(response.data.access_token){
                    //console.log(response.data.access_token);
                    console.log(response);
                }
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
        //     .then(function (response) {
        //     console.log(response);
        // }).catch(function (err) {
        //     console.log(err);
        // })
    }
}
