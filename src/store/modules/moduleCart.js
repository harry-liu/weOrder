/**
 * Created by harry-liu on 2017/4/13.
 */

export const moduleCart = {
    state:{
        cart:[]
    },
    getters:{
        totalSpend:function (state) {
            var total = 0;
            state.cart.forEach(function (food) {
                total += food.selected*food.price;
            })
            return total;
        }
    },
    mutations:{
        addFood:function (state,obj) {
            var inCart = false;
            state.cart.forEach(function (food) {
                if(food.id === obj.id){
                    food.selected++;
                    obj.selected = food.selected;
                    inCart = true;
                }
            })
            if(!inCart){
                obj.selected = 1;
                state.cart.push(obj);
            }
        },
        minusFood:function (state,obj) {
            for (var i = 0; i<state.cart.length;i++){
                if(state.cart[i].id === obj.id){
                    if(state.cart[i].selected>1){
                        state.cart[i].selected--;
                        obj.selected = state.cart[i].selected;
                    }
                    else{
                        obj.selected = 0;
                        state.cart.splice(i, 1);
                    }
                }
            }
        },
        clearCart:function (state) {
            state.cart = [];
        }
    }
}