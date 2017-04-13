/**
 * Created by harry-liu on 2017/4/13.
 */
export const moduleCommon = {
    state:{
        showBlackCover:false
    },
    mutations:{
        toggleBlackCover(state){
            state.showBlackCover = !state.showBlackCover;
        }
    }
}