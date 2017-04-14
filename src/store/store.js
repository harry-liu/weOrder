/**
 * Created by harry-liu on 2017/3/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import {moduleCommon} from './modules/moduleCommon'
import {moduleRestaurant} from './modules/moduleRestaurant'
import {moduleUser} from './modules/moduleUser'
import {moduleMenu} from './modules/moduleMenu'
import {moduleCart} from './modules/moduleCart'
import {moduleCards} from './modules/moduleCards'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        restaurants:moduleRestaurant,
        commons:moduleCommon,
        user:moduleUser,
        menu:moduleMenu,
        cart:moduleCart,
        cards:moduleCards
    }
});

export default store;