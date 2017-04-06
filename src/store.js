/**
 * Created by harry-liu on 2017/3/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        showBlackCover:false
    },
    mutations:{
        toggleBlackCover(state){
            state.showBlackCover = !state.showBlackCover;
        }
    }
});

export default store;