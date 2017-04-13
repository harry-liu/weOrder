/**
 * Created by harry-liu on 2017/4/13.
 */
import api from '../../API/api'

const token = localStorage.getItem('access_token')

const transfromMenu = function (obj) {
    var finalList = [];

    var pushTag = function (food) {
        var included = false;
        finalList.forEach(function (tag) {
            if(tag.id === food.cate){
                included = true;
            }
        });
        if(!included){
            var newTag = {
                id:'',
                tag:'',
                selected:false,
                list:[]
            };

            newTag.id = food.cate;
            newTag.tag = food.pcate_name;

            finalList.push(newTag);
        }
    };

    var pushFood = function (food) {
        finalList.forEach(function (tag) {
            if(tag.id === food.cate){
                var newFood = {
                    name:'',
                    price:'',
                    id:'',
                    cover:'',
                    selected:0
                };
                newFood.name = food.title;
                newFood.price = food.market_price;
                newFood.id = food.goods_id;
                newFood.cover = food.thumb;

                tag.list.push(newFood);
            }
        })
    };

    for(var property in obj){
        if (obj.hasOwnProperty(property)) {
            pushTag(obj[property]);
            pushFood(obj[property]);
        }
    }

    finalList[0].selected = true;

    return finalList;
}

export const moduleMenu = {
    state:{
        menu:[]
    },
    mutations:{
        setMenu:function (state,menu) {
            state.menu = transfromMenu(menu)
        }
    },
    actions:{
        getMenu:function (context) {
            api.getMenu(token).then(function (response) {
                context.commit('setMenu',response.data.data.CateGoodsList);
            });
        }
    }
}