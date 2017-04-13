/**
 * Created by harry-liu on 2017/4/13.
 */
import api from '../../API/api'

const token = localStorage.getItem('access_token')

export const moduleMenu = {
    state:{
        menu:[]
    },
    mutations:{
        setMenu:function (state,menu) {
            state.menu = menu
        }
    },
    actions:{

    }
}