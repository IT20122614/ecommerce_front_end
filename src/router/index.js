import Vue from "vue";
import VueRouter from "vue-router";
// import HomePage from '../views/HomePage.vue'
import DashboardComponent from "../views/DashboardComponent.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import CategoryPage from "../views/CategoryPage.vue";
import DisplayCategory from "../views/DisplayCategory.vue";

import DisplayEditProduct from "../views/DisplayEditProducts.vue";
import HomeProducts from "../views/HomeProducts.vue";
import AboutUs from "../views/AboutView.vue";
import TestPage from "../views/TestPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "/about",
    name: "about",

    component: AboutUs,
  },
  {
    path: "/test",
    name: "test",
    component: TestPage,
  },
  {
    path: "/loginpage",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/registerpage",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/category",
    name: "category",
    component: CategoryPage,
  },
  {
    path: "/displaycate",
    name: "displaycate",
    component: DisplayCategory,
  },

  {
    path: "/displayedit",
    name: "displayedit",
    component: DisplayEditProduct,
  },
  {
    path: "/",
    name: "homeproducts",
    component: HomeProducts,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
