import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as HiMenuAlt3  from "oh-vue-icons/icons/hi";

const Hi = Object.values({ ...HiMenuAlt3 });

addIcons(...Hi);

createApp(App).use(router).component("v-icon", OhVueIcon).mount('#app');
