import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Firebase from 'firebase';

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    meta: { login: true }
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "*",
    name: "NotFound",
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let user = Firebase.auth().currentUser
  let authRequired = to.matched.some(route => route.meta.login)
  if (!user && authRequired) {
    next('login')
  } else if (user && !authRequired) {
 next('Home')
  } else {
    next()
  }
})

export default router;