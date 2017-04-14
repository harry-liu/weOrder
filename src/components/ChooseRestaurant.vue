<template>
    <div class="choose-restaurant-container">
        <div class="back-container"></div>
        <div class="position" v-for="store in storeList" @click="goTo(store.id)" >
            <h1 class="font-white font-15"><img src="../assets/white_position.png" alt="">{{store.name}}</h1>
            <p class="font-white font-12">{{store.address}}</p>
        </div>
    </div>
</template>

<script>
    export default{
        name:'choose-restaurant',
        computed:{
            storeList:function () {
                return this.$store.state.restaurants.restaurantList;
            }
        },
        created(){
            this.$store.dispatch('getRestaurants');
        },
        methods:{
            goTo:function (id) {
                if(this.$route.name === 'takeAwayChooseRestaurant'){
                    this.$router.push({name:'takeAwayOrder',params:{id:id}});
                }
                else{
                    this.$router.push({name:'preOrder',params:{id:id}});
                }
            }
        }
    }
</script>

<style>
    .choose-restaurant-container{
        width: 100%;
        height: 100%;
        min-height: 100vh;
        padding:5px 22px;
    }

    .choose-restaurant-container .back-container{
        position: fixed;
        width: 100%;
        height: 100%;
        background-image: url("../assets/choosebg.png");
        background-size: cover;
        top:0;
        left: 0;
        z-index: -1;
    }

    .choose-restaurant-container h1{
        margin:0;
    }

    .choose-restaurant-container .position{
        width: 100%;
        height: 77px;
        text-align: center;
        background-image: url('../assets/choose1.png');
        background-size: 100% 100%;
        margin-top: 20px;
        padding-top: 10px;
    }

    .choose-restaurant-container .position img{
        width: 13px;
        height: 18px;
        margin-right: 10px;
    }


</style>