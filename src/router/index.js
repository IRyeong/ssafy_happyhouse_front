import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginForm,
  },
  {
    path: "/user",
    component: User,
    children: [
      {
        path: "/regist",
        name: "Regist",
        component: UserRegist,
      },
      {
        path: "/detail/:id",
        name: "Detail",
        component: UserDetail,
      },
      {
        path: "/:id",
        name: "Update",
        component: UserUpdate,
      },
    ],
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "/detail/:aptName",
        name: "Detail",
        component: HomeDetail,
      },
      {
        path: "/search/:dongCode",
        name: "Search",
        component: HomeSearch,
      },
      {
        path: "/sido/:",
        name: "Sido",
        component: HomeSido,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
