import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginForm from '@/components/LoginForm.vue';
import User from '../views/UserView.vue';
import UserUpdate from '@/components/user/UserUpdate.vue';
import UserRegist from '@/components/user/UserRegist.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm,
  },
  {
    path: '/user',
    name: 'User',
    component: User,
  },
  {
    path: '/user/regist',
    name: 'UserRegist',
    component: UserRegist,
  },
  {
    path: '/user/:id',
    name: 'UserUpdate',
    component: UserUpdate,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
