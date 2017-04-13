/**
 * Created by harry-liu on 2017/3/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import {moduleCommon} from './modules/moduleCommon'
import {moduleRestaurant} from './modules/moduleRestaurant'
import {moduleUser} from './modules/moduleUser'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        restaurants:moduleRestaurant,
        commons:moduleCommon,
        user:moduleUser
    }
});

export default store;