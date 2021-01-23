import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import User from './views/User.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            path: '/',
            name: 'home',
            component : Home
        },
        {
            path: '/about',
            name: 'about',
            component : About
        },
        {
            name: 'user',
            path: '/user/:name?',
            component: User,
            props: true
        },        
        {
            path: '*',
            component: NotFound
        },
    ]
})

export default router;
