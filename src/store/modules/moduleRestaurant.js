/**
 * Created by harry-liu on 2017/4/13.
 */
import api from '../../API/api'

const token = localStorage.getItem('access_token')

export const moduleRestaurant = {
    state:{
        restaurantList:[],
        restaurantDetail:{}
    },
    mutations:{
        setList(state,list){
            state.restaurantList = list;
        },
        setRestaurantDetail(state,rd){
            state.restaurantDetail = rd;
        }
    },
    actions:{
        getRestaurants(context){
            api.getStore(token).then(function (response) {
                context.commit('setList',response.data.data.stores);
            });
        },
        getRestaurant(context,id){
            api.getRestaurantDetail(token,id).then(function (response) {
                context.commit('setRestaurantDetail',response.data.data.stores)
            })
        }
    }
}