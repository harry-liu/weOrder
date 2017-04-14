/**
 * Created by harry-liu on 2017/4/14.
 */

import api from '../../API/api'

const token = localStorage.getItem('access_token')

const transformCards = function (list) {
    var newList = [];
    list.forEach(function (li) {
        var newObj = {
            name:'',
            selected:false,
            value:''
        }
        var total = Number(li.val)+Number(li.remark);
        newObj.name = total+'元充值卡（充'+li.val+'送'+li.remark+'）';
        newObj.value = li.name;
        newObj.total = total;
        newObj.spend = li.val;
        newList.push(newObj);
    })
    return newList;
}

export const moduleCards = {
    state:{
        cards:[],
        selectedCard:{}
    },
    mutations:{
        setCards:function (state,cards) {
            state.cards = transformCards(cards);
        },
        setCard:function (state,card) {
            state.selectedCard = card;
        }
    },
    actions:{
        getCards:function (context) {
            api.getCardsList(token).then(function (response) {
                context.commit('setCards',response.data.data.list)
            })
        }
    }
}