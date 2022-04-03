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
    component: Home
  },
  {
    path: "/todos/:id",
    name: "Todos",
    component: Todos
  }
];

const router = createRouter({ history: createWebHistory(process.env.BASE_URL),routes });
  
export default router; 