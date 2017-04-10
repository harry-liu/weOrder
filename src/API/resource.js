/**
 * Created by harry-liu on 2017/4/7.
 */
//import API_ROOT from 'config'
const API_ROOT = 'http://wdc-api.xabdsy.cn';

var api = {
    getToken:'/wechat/getToken',
    getStore:'/v1/shop/getStoreList',
    getMenu:'/v1/Shop/getCateGoodsList',
    getRestaurantDetail:'/v1/shop/getStoreDetail',
    getUser:'/v1/user/getUser',
    getBalance:'/v1/user/getPostal'
};

export const getToken = API_ROOT + api.getToken;
export const getStore = API_ROOT + api.getStore;
export const getMenu = API_ROOT + api.getMenu;
export const getRestaurantDetail = API_ROOT + api.getRestaurantDetail;
export const getUser = API_ROOT + api.getUser;
export const getBalance = API_ROOT + api.getBalance;

