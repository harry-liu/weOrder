/**
 * Created by harry-liu on 2017/4/13.
 */
import api from '../../API/api'

export const moduleRestaurant = {
    state:{
        restaurantList:[]
    },
    mutations:{
        setList(state,list){
            state.restaurantList = list;
        }
    },
    actions:{
        getRestaurants(context){
            //console.log(store.state.restaurantList)
            var token = localStorage.getItem('access_token');
            api.getStore(token).then(function (response) {
                context.commit('setList',response.data.data.stores);
            });
        }
    }
}