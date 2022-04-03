import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Todos from "../views/Todos.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: "/todos/:id",
    name: "Todos",
    component: Todos,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({ history: createWebHistory(process.env.BASE_URL),routes });

router.beforeEach((to, from, next)=>{
  if(to.matched.some(route => route.meta.requiresAuth)){
    if(localStorage.getItem('activeSession')){
      next();
    } else {
      next('/');
    }
  } else {
    if(localStorage.getItem('activeSession')){
      next('/home');
    }else{
      next();
    }
  }
});
  
export default router; 