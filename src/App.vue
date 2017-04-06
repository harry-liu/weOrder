<template>
  <div id="app">

    <router-view></router-view>

    <div class="black-cover" v-show="showBlackCover"></div>

  </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            msg: '这是首页'
        }
    },
    computed:{
        showBlackCover (){
            return this.$store.state.showBlackCover;
        }
    }
}
</script>

<style>
    @import "css/common.css";

    .black-cover{
        position: fixed;
        width: 100%;
        height: 100vh;
        top:0;
        left:0;
        background-color: rgba(0,0,0,.5);
        z-index: 2;
    }
</style>
