import Vue from 'vue'
import router from './route'
import store from './store/store'
import App from './App.vue'
import directive from './directive'
import api from './API/api'

// import VueWaypoint from 'vue-waypoint'
//
// Vue.use(VueWaypoint)

var vm = new Vue({
    router:router,
    store:store,
    directives:directive,
    el: '#app',
    render: h => h(App),
    methods:{
        login:function () {
            var token = localStorage.getItem('token')||'';
            var url = this.$route.path;

            //api.getToken(url,token);

            localStorage.setItem('access_token','d9761f3d24a74846847fe3b7596c0253');
        }
    }
});

vm.login();