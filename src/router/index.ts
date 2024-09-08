import { createRouter, createWebHistory } from 'vue-router';

// 導入頁面組件
// @ts-ignore
import Home from "../Home.vue";
// @ts-ignore
import About from "../About.vue";  // 關於頁組件

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
