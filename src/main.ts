import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入ElementPlus - UI
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
