import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: () => import(/* webpackChunkName: "home" */ "./pages/home.vue") },
    {
      path: "/details/:id",
      component: () => import(/* webpackChunkName: "home" */"./pages/details.vue"),
      props: true
    }
  ]
});
