import { createRouter, createWebHistory } from 'vue-router';

// 導入頁面組件
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import About from "../views/About.vue";
// @ts-ignore
import NotFound from "../views/NotFound.vue";  // 關於頁組件


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
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
