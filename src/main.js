import Vue from 'vue'
import router from './route'
import store from './store'
import App from './App.vue'
import directive from './directive'


// import VueWaypoint from 'vue-waypoint'
//
// Vue.use(VueWaypoint)

new Vue({
    router:router,
    store:store,
    directives:directive,
    el: '#app',
    render: h => h(App)
});